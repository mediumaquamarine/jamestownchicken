var express = require('express');
var app = express();
var config = require('./config/config');


require('mongoose').connect(config.db.url);

module.exports = app;