require('dotenv').config();

const { PORT = 5000 } = process.env
const express = require('express');
const server = express();
const morgan = require('morgan');

server.use(morgan('dev'));
server.use(express.json());

const { client } = require('./db');
client.connect();
