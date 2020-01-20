const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const jwt = require('jsonwebtoken');
const User = mongoose.model('user');

module.exports = app => {
  app.post('/register', async (req, res) => {
    if (!req.body.email || !req.body.password) {
      res.json({ success: false, msg: 'Please pass email and password.' });
    } else {
      console.log('naaaa');
      let newUser = await User.create(req.body);
      console.log(newUser, 'new');
      return res.status(201).send({
        error: false,
        newUser
      });
    }
  });

  app.post('/login', function(req, res) {
    User.findOne(
      {
        email: req.body.email
      },
      console.log(req.body.email, 'body'),

      function(err, user) {
        console.log(user, 'body user');
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
              // if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), settings.secret);
              // return the information including token as JSON

              res.json({ success: true, token: 'JWT ' + token });
            } else {
              console.log('else fa');
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
