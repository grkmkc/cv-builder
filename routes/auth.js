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
      console.log(user);
      var message;
      if (user) {
        message = 'user exists, please try to sign in';
      }
      res.json({ message: message });
    });
    /*  let result = await user.save();
    return res.status(201).send({
      error: false,
      result
    }); */
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
          console.log(user, 'user');
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              console.log('22');
              // if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), settings.secret);
              // return the information including token as JSON
              res.json({ success: true, token: 'JWT ' + token });
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
};
