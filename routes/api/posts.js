const { get } = require('config');
const express = require('express');
const router = express.Router();

//@rout get api/post
//@desc test rout
//@access public

router.get('/', (req, res) => res.send('Post Route'));

module.exports = router;