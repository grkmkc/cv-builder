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
  },
  name: String,
  lastname: String,
  birthday: Date
});

UsersSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  console.log(this.password, 'asd');
  this.password = bcrypt.hashSync(this.password, 10);
  next();
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
