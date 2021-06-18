const { get } = require('config');
const express = require('express');
const router = express.Router();

//@rout get api/Auth
//@desc test rout
//@access public

router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;