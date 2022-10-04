require("dotenv").config();
const express = require("express");
const app = express();

// Setup your Middleware and API Router here
app.use(express.json());
const cors = require("cors");
app.use(cors());

module.exports = app;