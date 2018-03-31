const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect('mongodb://localhost:27017/poibms', err => {
  if(err) console.error(chalk.bgRed(err.message));
});

const db = mongoose.connection;
db.once('open', function() {
  console.log(chalk.bgGreen(`Success connect to mongoDB`));
});

module.exports = {
  db
};
