'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send({"message": "GET from backend 1"});
});

app.post('/', (req, res) => {
  res.send({"message": "POST from backend 1"});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
