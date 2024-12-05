const mongoose = require('mongoose');

const BanSchema = new mongoose.Schema({
    expiration: String,
    timeAdded: String,
    active: Boolean,
    reason: String,
    adminName: String,
    adminID: Number,
  });
  
  module.exports = mongoose.model('Ban', BanSchema);
  