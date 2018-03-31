const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;

const Points = new Schema({
  deviceID: String,
  time: Number,
  lat: Number,
  lng: Number,
  hash: Boolean
});

module.exports = mongoose.model('points', Points)