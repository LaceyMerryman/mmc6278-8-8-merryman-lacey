const { Schema, model, SchemaTypes, models } = require('mongoose');
const CommentSchema = require('./Comment');

const PostSchema = new Schema({
  // Title: required, unique string
  title: {
    type: String,
    required: true,
    unique: true
  },
  // Body: required string
  body: {
    type: String,
    required: true
  },
  // CreatedAt: default to current date/time
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Comments: array of CommentSchema (subdocuments)
  comments: [CommentSchema],
  // Tags: array of ObjectIds referencing the Tag model
  tags: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Tag'
    }
  ],
  // Slug: string generated automatically before save
  slug: {
    type: String
  }
});

PostSc
