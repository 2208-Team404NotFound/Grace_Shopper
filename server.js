require('dotenv').config();

const http = require("http")
const chalk = require("chalk")
const app = require("./app")

const PORT = process.env["PORT"] ?? 5000
const server = http.createServer(app)
const express = require('express');
const morgan = require('morgan');

// const { client } = require('./db');
// client.connect();

server.listen(PORT, () => {
    console.log(
        chalk.blueBright("Server is listening on PORT:"),
        chalk.yellow(PORT),
        chalk.blueBright("Get your routine on!")
    )
});
