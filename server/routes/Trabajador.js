const express = require('express');
const app = express();
const login = require('../controller/Trabajador/login');

app.post(`/login`, (req, res) => {
  return login(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

module.exports = app;
