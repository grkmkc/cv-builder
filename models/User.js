const mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcrypt');

const UsersSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  birthday: {
    type: Date
  }
});

UsersSchema.pre('save', function(next) {
  console.log('0');
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UsersSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
const UsersSectionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: 'user' },
  fields: []
});
mongoose.model('user', UsersSchema);
mongoose.model('sections', UsersSectionSchema);
