require("dotenv").config();
const express = require("express");
const app = express();

//Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

const apiRouter = require("./api");
app.use('/api', apiRouter);

module.exports = app;