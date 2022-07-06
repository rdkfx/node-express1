
const express = require('express');
const app = express();
const port=3000;

app.get('/hello', (req, res) => {
  res.send('Hi! Ruben ');
});

app.listen(port, () => console.log('Server On'));