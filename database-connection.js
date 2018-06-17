const mongoose = require('mongoose');

const url = 'mongodb://dbuser:dbpassword@ds143039.mlab.com:43039/note-taker';

mongoose.connect(url, err => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to database!');
  }
});

module.exports = mongoose;
