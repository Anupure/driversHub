const mongoose = require('mongoose');

const VTCSchema = new mongoose.Schema({
    id: Number,
    name: String,
    owner_id: Number,
    owner_username: String,
    slogan: String,
    tag: String,
    website: String,
    socials: {
      twitter: String,
      facebook: String,
      twitch: String,
      discord: String,
      youtube: String,
    },
    games: {
      ats: Boolean,
      ets: Boolean,
    },
    members_count: Number,
    recruitment: String,
    language: String,
    verified: Boolean,
    validated: Boolean,
    created: String,
  });
  
  module.exports = mongoose.model('VTC', VTCSchema);
  