// JavaScript source code
const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT
app.listen(PORT);
