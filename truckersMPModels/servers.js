const mongoose = require('mongoose');

const ServerSchema = new mongoose.Schema({
    id: Number,
    game: String,
    ip: String,
    port: Number,
    name: String,
    shortname: String,
    idprefix: String,
    online: Boolean,
    players: Number,
    queue: Number,
    maxplayers: Number,
    mapid: Number,
    displayorder: Number,
    speedlimiter: Number,
    collisions: Boolean,
    carsforplayers: Boolean,
    policecarsforplayers: Boolean,
    afkenabled: Boolean,
    event: Boolean,
    specialEvent: Boolean,
    promods: Boolean,
    syncdelay: Number,
  });
  
  module.exports = mongoose.model('Server', ServerSchema);
  