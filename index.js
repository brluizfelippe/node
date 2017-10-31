// JavaScript source code
const express = require('express');
var React = require('react');
var app = express();
var modbus = require('jsmodbus');

app.get('/', (req, res) => {
    res.send({ bye: 'budy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);



