const express = require("express");
const app = express();

app.use(require('./Trabajador'));
app.use(require('./Cliente'));

module.exports = app;
