const express = require('express');
const app = express();
const port=3000;

//cargar rutas 
const hello_routes= require("./routes/hello");
app.use("/api",hello_routes);

module.exports = app;