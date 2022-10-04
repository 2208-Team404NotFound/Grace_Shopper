const { Pool } = require('pg');

const connection = process.env.DATABASE_URL || 'https://localhost:5432/cassette-shop';

const client = new Pool({
    connection,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

client.connect();

module.exports = client;