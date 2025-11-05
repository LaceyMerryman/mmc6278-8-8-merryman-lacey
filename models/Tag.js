const { Schema, model, models } = require('mongoose');

const TagSchema = new Schema({
  // Name of the tag: required and unique
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = models.Tag || model('Tag', TagSchema);
