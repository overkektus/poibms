const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Client = new Schema({
  deviceID: String,
  key: String
});

module.exports = mongoose.model('client', Client);
