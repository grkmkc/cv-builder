const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const jwt = require('jsonwebtoken');
const User = mongoose.model('user');

module.exports = app => {
  app.post('/api/register', async (req, res, next) => {
    let user = new User({
      name: req.body.data.name,
      lastname: req.body.data.lastname,
      email: req.body.data.email,
      password: req.body.data.password
    });
    User.findOne({ email: req.body.data.email }, function(err, user) {
      if (err) {
        console.log(err);
      }
      let message;
      if (user) {
        message = 'email exists, please try to sign in';
      }
      res.json({ message: message });
    });
    const result = await user.save();
    return res.status(201).send({
      error: false,
      result
    });
  });

  app.post('/api/login', function(req, res) {
    User.findOne(
      {
        email: req.body.email
      },

      function(err, user) {
        if (err) throw err;

        if (!user) {
          res.status(401).send({
            success: false,
            msg: 'Authentication failed. User not found.'
          });
        } else {
          // check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              console.log('22');
              // if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), settings.secret, {
                expiresIn: 86400
              });
              // return the information including token as JSON
              res.json({ success: true, token: 'JWT ' + token, user: user });
            } else {
              res.status(401).send({
                success: false,
                msg: 'Authentication failed. Wrong password.'
              });
            }
          });
        }
      }
    );
  });

  app.post('/api/user/fields', async (req, res, next) => {
    const _id = req.body._id;
    const content = req.body.fields[0].content;
    const name = req.body.fields[0].name;
    const updateUser = await User.updateOne(
      {
        _id: _id,
        'fields.name': name
      },
      {
        $set: {
          'fields.$.content': content
        }
      }
    )
      .then(async function(response) {
        if (response.n === 0) {
          const updateField = await User.updateOne(
            {
              _id: _id
            },
            {
              $push: {
                fields: [
                  {
                    name: name,
                    content: content
                  }
                ]
              }
            }
          )
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error, 'errr');
            });
        }
      })
      .catch(function(error) {
        console.log(error, 'error');
      });
    return res.status(201).send({
      error: false
    });
  });
  app.post('/api/user', async (req, res, next) => {
    const _id = req.body._id;
    const getUserProfile = await User.findOne({ _id: _id }, function(
      err,
      user
    ) {
      if (err) {
        console.log(err);
      }
      return res.status(201).send({
        error: false,
        user
      });
    });
  });
};
