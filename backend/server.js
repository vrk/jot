/* @flow */

const express = require('express');
const path = require('path');

var login_router = require('./routes/login');

const app = express();

app.set('port', (process.env.PORT || 3100));

app.use('/api', login_router);

module.exports = app;
