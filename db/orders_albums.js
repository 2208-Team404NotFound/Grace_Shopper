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

const destroyAlbumsFromCart = async (order_id, album_id) => {
    try {
        await client.query(`
        DELETE FROM orders_albums (order_id, album_id)
        WHERE order_id=$1 AND album_id=$2;
        `, [order_id, album_id]);

        return;
    } catch (error) {
        throw error;
    }
};

const attachAlbumsToOrders = async (cart) => {
    try {
        const { rows } = client.query(`
        SELECT albums.*, orders_albums.quantity
        FROM albums
        JOIN orders_albums ON orders_albums.album_id = album.id
        WHERE  orders_albums.order_id=$1;
        `, [cart.id]);

        cart.albums = rows

        return cart;
    } catch (error) {
        throw error;
    }
};

const getUserOrders = async (id) => {
    try {
        const usersCart = await client.query(`
        SELECT orders.*, users.id AS user_id, users.username
        FROM orders 
        JOIN users ON orders.user_id=users.id
        WHERE orders.user_id=$1 AND is_active=FALSE
        `, [id]);

        if (!usersCart.rows.length) {
            return false;
        }

        const albumsInCart = await attachAlbumsToOrders(usersCart.rows[0]);

        return albumsInCart;
    } catch (error) {
        throw error;
    }
};

const updateAlbumQuantity = async (order_id, album_id, quantity) => {
    try {
        const quantity = await client.query(`
        UPDATE orders_albums
        SET quantity=($3)
        WHERE order_id=($1) AND album_id=($2)
        RETURNING *;
        `, [order_id, album_id, quantity]);

        return quantity;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getOrdersAlbums,
    addAlbumsToCart,
    destroyAlbumsFromCart,
    attachAlbumsToOrders,
    getUserOrders,
    updateAlbumQuantity
}