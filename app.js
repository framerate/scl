'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(serveStatic(path.join(__dirname, '/static'), {
    'index': false
}));

require('./lib/routes')(app);

app.listen(3000);
