const express = require('express');
const router = express.Router();
const Creator = require('../models/Creator');

// get all creators
router.get('/', async (req, res) => {
  const creators = await Creator.find();
  res.json(creators);
});

// add a creator
router.post('/', async (req, res) => {
  const { username, platform, followers } = req.body;
  const creator = await Creator.create({ username, platform, followers });
  res.json(creator);
});

module.exports = router;
