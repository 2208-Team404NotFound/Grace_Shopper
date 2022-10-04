const client = require('./client');

const dropTables = async () => {
    try {
        console.log('Dropping all tables!');

        await client.query(`
        DROP TABLE IF EXISTS users;
        `);

        console.log('Finished dropping tables!');
    } catch (error) {
        console.error(`Error dropping tables: ${error}`);
    }
}

const createTables = async () => {
    try {
        console.log('Starting to build tables!');

        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(23) UNIQUE NOT NULL,
            password VARCHAR(23) NOT NULL
        );
        `)

    } catch (error) {
        console.error(`Error building tables: ${error}`)
    }
}