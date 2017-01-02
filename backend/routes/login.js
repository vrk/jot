/* @flow */

var express = require('express');
var bodyParser = require('body-parser')

var { getDatabase } = require('../lib/db');

var router = express.Router();

var jsonParser = bodyParser.json()

router.get('/login', jsonParser, (req, res) => {
  console.log('login request received');
  res.json({
    success: true,
    message: 'login requested'
  });
});

module.exports = router;
