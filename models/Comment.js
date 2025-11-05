const { Schema } = require('mongoose');

const CommentSchema = new Schema({
  // Author of the comment, defaults to "Anonymous"
  author: {
    type: String,
    default: 'Anonymous'
  },
  // Body of the comment, required
  body: {
    type: String,
    required: true
  },
  // Date created, defaults to current date/time
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = CommentSchema;
