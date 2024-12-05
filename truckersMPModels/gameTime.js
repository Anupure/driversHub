const mongoose = require('mongoose');

const GameTimeSchema = new mongoose.Schema({
    game_time: Number,
  });
  
  module.exports = mongoose.model('GameTime', GameTimeSchema);
  