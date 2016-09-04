'use strict';

const express = require('express');
const logger = require('morgan');
const path = require('path');
const jsonParser = require('body-parser').json();
const port = process.env.PORT || 8080;
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function (req, res) {
  console.log('server listening on port', port);
});
