const client = require('./client');
const { getUser, createUser, getUserById, getUserByUsername } = require('./users');
const { createAlbums, getAllAlbums } = require('./albums');

const dropTables = async () => {
    try {
        console.log('Dropping all tables!');

        await client.query(`
        DROP TABLE IF EXISTS orders_albums;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS artists;
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
        );

        CREATE TABLE artists (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) UNIQUE NOT NULL,
            album_id INT REFERENCES albums(id)
        );

        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id),
            price INT,
            is_active BOOLEAN DEFAULT false
        );

        CREATE TABLE orders_albums (
            id SERIAL PRIMARY KEY,
            order_id INT REFERENCES albums(id) NOT NULL,
            album_id INT REFERENCES orders(id) NOT NULL,
            quantity INT NOT NULL
        ); `

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
            { artist: 'Drake', album_name: 'Thank Me Later', year: 2010, album_price: 20.99, img_url: 'https://th.bing.com/th/id/R.7a00b670def11cba0119f66a6aaca536?rik=vbcE7R0Nv6%2fv7Q&riu=http%3a%2f%2fhiphop-n-more.com%2fwp-content%2fuploads%2f2010%2f05%2fTML.jpg&ehk=m3bKEgW2XPnF9ZZX3Dgkr1kc%2f752FrXMxSujxZuc%2bvY%3d&risl=&pid=ImgRaw&r=0' },
            { artist: 'Lil Wayne', album_name: 'The Carter III', year: 2008, album_price: 15.99, img_url: 'https://th.bing.com/th/id/R.72d58a665fe295467c98d42150b98ee1?rik=RsIJgv66mUslYw&riu=http%3a%2f%2f1.bp.blogspot.com%2f_5arDEEcMkEU%2fSGKnKLHCCeI%2fAAAAAAAAAA4%2fTvUs9sPnZtQ%2fs1600%2f00%2b-%2bLil%2bWayne%2b-%2bThe%2bCarter%2bIII%2b%252528Front%252529.jpg&ehk=tchruh6GChgzLhK91emlPMYOLTKkVFKsM5yjiz%2f4Zkg%3d&risl=&pid=ImgRaw&r=0' },
            { artist: 'Bladee', album_name: '333', year: 2020, album_price: 9.99, img_url: 'https://static.qobuz.com/images/covers/ka/93/zzn6saqkx93ka_600.jpg' },
            { artist: 'Bladee', album_name: 'EXETER', year: 2020, album_price: 9.99, img_url: 'https://static.qobuz.com/images/covers/qb/h6/idbycvkajh6qb_600.jpg' },
            { artist: 'Yung Lean', album_name: 'Starz', year: 2020, album_price: 9.99, img_url: 'https://static.qobuz.com/images/covers/ha/im/b1xaal6aeimha_600.jpg' },
            { artist: 'Ecco2k', album_name: 'Amygdala', year: 2022, album_price: 0.99, img_url: 'https://static.qobuz.com/images/covers/8a/yn/n14wpfhw5yn8a_600.jpg' },
            { artist: 'Brutalismus 3000', album_name: 'Eros Massacre', year: 2022, album_price: 8.99, img_url: 'https://static.qobuz.com/images/covers/rc/h2/mvxwnz0dth2rc_600.jpg' },
            { artist: 'Yellow Claw', album_name: 'Los Amsterdam', year: 2017, album_price: 9.99, img_url: 'https://static.qobuz.com/images/covers/36/88/5060421568836_600.jpg' }
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
