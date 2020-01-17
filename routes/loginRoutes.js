const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('Users');

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne(
      {
        username: username
      },
      function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      }
    );
  })
);

module.exports = app => {
  app.post(`/login`, async (req, res) => {
    console.log(req);
    passport.authenticate('local', { failureRedirect: '/error' }),
      function(req, res) {
        return res.status(201).send({
          error: false
        });
      };
  });
};
