const mongoose = require('mongoose');
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const auth = require('./auth');
const Users = mongoose.model('Users');

module.exports = app => {
  app.post('/login', auth.optional, (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email) {
      return res.status(422).json({
        errors: {
          email: 'is required'
        }
      });
    }

    if (!password) {
      return res.status(422).json({
        errors: {
          password: 'is required'
        }
      });
    }

    return passport.authenticate(
      'local',
      { session: false },
      (err, passportUser, info) => {
        if (err) {
          return next(err);
        }

        if (passportUser) {
          const user = passportUser;
          user.token = passportUser.generateJWT();

          return res.json({ user: user.toAuthJSON() });
        }

        return res.status(200);
      }
    )(req, res, next);
  });

  /* //GET current route (required, only authenticated users have access)
  app.get('/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
  
    return Users.findById(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }
  
        return res.json({ user: user.toAuthJSON() });
      });
  }); */
};
