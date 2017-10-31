// JavaScript source code
const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there Git, I like it!!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
