const client = require('./client');

const dropTables = async () => {
    try {
        console.log('Dropping all tables!');

        await client.query(
            // DROP TABLE IF EXISTS orders;
            // DROP TABLE IF EXISTS shopping_cart;
            // DROP TABLE IF EXISTS albums;
            // DROP TABLE IF EXISTS artists;
            `
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
        ); `

            // CREATE TABLE artists (
            //     id SERIAL PRIMARY KEY,
            //     name VARCHAR(50) UNIQUE NOT NULL
            // );

            // CREATE TABLE albums (
            //     id SERIAL PRIMARY KEY,
            //     artist_name VARCHAR(50) UNIQUE NOT NULL
            //     album_name VARCHAR(50) NOT NULL,
            //     album_price NUMERIC(5, 2),
            //     year INT
            // );

            // CREATE TABLE shopping_cart (
            //     id SERIAL PRIMARY KEY,
            //     order_id INT UNIQUE NOT NULL,
            //     album_id INT NOT NULL,
            //     quantity INT NOT NULL
            // );

            // CREATE TABLE orders (
            //     user_id INT UNIQUE NOT NULL 
            // );
        );

    } catch (error) {
        console.error(`Error building tables: ${error}`)
    }
}