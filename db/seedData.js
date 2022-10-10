; const client = require('./client');
const { getUser, createUser, getUserById, getUserByUsername } = require('./users');
const { createAlbums, getAllAlbums } = require('./albums');

const dropTables = async () => {
    try {
        console.log('Dropping all tables!');

        await client.query(
            // DROP TABLE IF EXISTS orders;
            // DROP TABLE IF EXISTS shopping_cart;
            `
        DROP TABLE IF EXISTS albums;
        DROP TABLE IF EXISTS users;
        `);

        console.log('Finished dropping tables!');
    } catch (error) {
        console.log(`Error dropping tables: ${error}`);
    }
};

const createTables = async () => {
    try {
        console.log('Starting to build tables!');

        await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        ); 

        CREATE TABLE albums (
            id SERIAL PRIMARY KEY,
            artist VARCHAR(50) NOT NULL,
            album_name VARCHAR(50) UNIQUE NOT NULL,
            album_price NUMERIC(5, 2),
            year INT,
            img_url TEXT
        ); `
            // CREATE TABLE artists (
            //     id SERIAL PRIMARY KEY,
            //     name VARCHAR(50) UNIQUE NOT NULL
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
        console.log(`Error building tables: ${error}`);
    }
};

const createInitialUsers = async () => {
    try {
        console.log('Starting to create tables!');

        const usersToCreate = [
            { username: 'markymark', password: 'shithead123' },
            { username: 'GrungeElFz', password: 'password' },
            { username: 'HarrisonBurner', password: 'password123' },
            { username: 'aaawww', password: '123123123' },
            { username: 'lucy', password: '12341234' }
        ];

        const users = await Promise.all(usersToCreate.map(createUser));

        console.log(`Users created: ${users}`);
    } catch (error) {
        console.log(`Error creating users: ${error}`);
    }
};

const createInitialAlbums = async () => {
    try {
        console.log('Starting to create albums...')

        const albumsToCreate = [
            { artist: 'Drake', album_name: 'Thank Me Later', year: 2010, album_price: 20.99, img_url: 'thankjpg.jpg' }
        ];

        const albums = await Promise.all(albumsToCreate.map(createAlbums));

        console.log(`Albums created: ${albums}`)
    } catch (error) {
        console.log(`Error creating albums: ${error}`)
    }
};

const rebuildDB = async () => {
    try {
        await dropTables();
        await createTables();
        await createInitialUsers();
        await createInitialAlbums();
        await testDB();
    } catch (error) {
        console.log(`Error during rebuildDB: ${error}`);
    }
};

const testDB = async () => {
    console.log('Starting to test database...');
    const results = await getAllAlbums({ artist: 'Drake' });
    console.log(results);
    console.log('Finished testing!');
}

module.exports = {
    rebuildDB,
    dropTables,
    createTables
};