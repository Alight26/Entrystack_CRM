const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  username: { type: String, required: true },
  platform: { type: String, required: true },
  followers: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Creator', creatorSchema);
