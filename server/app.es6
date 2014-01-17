import express from 'express';
import React from 'react';
import Layout from 'components/layout';

var app = express();
app.use(express.static(__dirname + '/../../public'));

var props = {bornAt: Date.now()};

app.get('/', function (req, res) {
  React.renderComponentToString(Layout(props), res.send.bind(res));
});

var server = app.listen(8000);
process.on('SIGTERM', server.close.bind(server));
