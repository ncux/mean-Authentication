const mongoose = require('mongoose');

const User = mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('AuthenticationTutorial', User);
