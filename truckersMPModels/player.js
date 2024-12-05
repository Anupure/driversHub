const mongoose = require('mongoose');

const PatreonSchema = new mongoose.Schema({
  isPatron: Boolean,
  active: Boolean,
  color: String,
  tierId: Number,
  currentPledge: Number,
  lifetimePledge: Number,
  nextPledge: Number,
  hidden: Boolean,
});

const PermissionsSchema = new mongoose.Schema({
  isStaff: Boolean,
  isUpperStaff: Boolean,
  isGameAdmin: Boolean,
  showDetailedOnWebMaps: Boolean,
});

const VTCHistorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  verified: Boolean,
  joinDate: String,
  leftDate: String,
});

const VTCSchema = new mongoose.Schema({
  id: Number,
  name: String,
  tag: String,
  inVTC: Boolean,
  memberID: Number,
});

const PlayerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  avatar: String,
  smallAvatar: String,
  joinDate: String,
  steamID64: Number,
  steamID: String,
  discordSnowflake: String,
  displayVTCHistory: Boolean,
  groupName: String,
  groupColor: String,
  groupID: Number,
  banned: Boolean,
  bannedUntil: String,
  bansCount: Number,
  displayBans: Boolean,
  patreon: PatreonSchema,
  permissions: PermissionsSchema,
  vtc: VTCSchema,
  vtcHistory: [VTCHistorySchema],
});

module.exports = mongoose.model('Player', PlayerSchema);
