const { get } = require('config');
const express = require('express');
const router = express.Router();

//@rout get api/Profile
//@desc test rout
//@access public

router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;