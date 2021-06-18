const { get } = require('config');
const express = require('express');
const router = express.Router();

//@rout get api/user
//@desc test rout
//@access public

router.get('/', (req, res) => res.send('User Route'));

module.exports = router;