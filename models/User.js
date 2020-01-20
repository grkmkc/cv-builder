const mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcrypt');

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  }
});

UsersSchema.pre('create', function(next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        console.log(user.password, 'user.passwrod');
        next();
      });
    });
  } else {
    return next();
  }
});

UsersSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    console.log(passw, this.password, 'asd');
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

mongoose.model('user', UsersSchema);
