const client = require('./client');

const getOrdersAlbums = async () => {
    try {
        const { rows } = await client.query(`
        SELECT * FROM orders_albums;
        `);

        return rows;
    } catch (error) {
        throw error;
    }
};

const createCart = async (user_id) => {
    try {
        const { rows: [cart] } = await client.query(`
        INSERT INTO orders_albums (user_id)
        VALUES ($1)
        RETURNING *;
        `, [user_id]);

        return cart;
    } catch (error) {
        throw error;
    }
};

const addAlbumsToCart = async (order_id, album_id) => {
    try {
        const { rows: [album] } = await client.query(`
        INSERT INTO orders_albums (order_id, album_id)
        VALUES ($1, $2)
        RETURNING *;
        `, [order_id, album_id]);

        return album;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getOrdersAlbums,
    createCart,
    addAlbumsToCart
}