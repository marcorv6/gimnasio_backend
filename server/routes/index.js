const express = require("express");
const app = express();

app.use(require('./Usuario'));

module.exports = app;
