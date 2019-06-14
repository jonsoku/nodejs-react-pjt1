const express = require('express');
const router = express.Router();

// @route    GET api/profile
// @desc     Test route
// @access   Public
// public    : don't need token on localstorage
// private   : must have token on localstorage
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;
