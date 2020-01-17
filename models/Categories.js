const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  description: String,
  fields: [
    {
      name: String
    }
  ]
});

mongoose.model('categories', categorySchema);
