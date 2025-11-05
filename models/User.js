const { Schema, model, models } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  // Username: required string
  username: {
    type: String,
    required: true
  },
  // Password: required string with min length 5, max length 20
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20
  }
});

// Hashes the password before it's stored in MongoDB
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = models.User || model('User', UserSchema);