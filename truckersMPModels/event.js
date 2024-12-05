const mongoose = require('mongoose');

const EventTypeSchema = new mongoose.Schema({
    key: String,
    name: String,
  });
  
  const EventSchema = new mongoose.Schema({
    id: Number,
    event_type: EventTypeSchema,
    name: String,
    slug: String,
    game: String,
    server: {
      id: Number,
      name: String,
    },
    language: String,
    departure: {
      location: String,
      city: String,
    },
    arrive: {
      location: String,
      city: String,
    },
    meetup_at: String,
    start_at: String,
    banner: String,
    map: String,
    description: String,
    rule: String,
    voice_link: String,
    external_link: String,
    featured: String,
    vtc: {
      id: Number,
      name: String,
    },
    user: {
      id: Number,
      username: String,
    },
    attendances: {
      confirmed: Number,
      unsure: Number,
      vtcs: Number,
    },
    dlcs: {
      dlc_id: String,
    },
    url: String,
    created_at: String,
    updated_at: String,
  });
  
  module.exports = mongoose.model('Event', EventSchema);
  