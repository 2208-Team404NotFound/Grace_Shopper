const ordersRouter = require('../api')
const client = require('./client')
const { getAlbumsByOrderId } = require('./albums')

const getAllOrders = async (user_id) => {
    try {
        const response = await client.query(`
        SELECT * FROM orders
        WHERE user_id=$1;
        `, [user_id]);

        let orders = response.rows;
        return orders;
    } catch (error) {
        throw error;
    }
};

const createOrders = async ({ user_id, price, is_active }) => {
    try {
        const { rows: [orders] } = await client.query(`
        INSERT INTO orders(user_id, price, is_active)
        VALUES ($1, $2, $3)
        RETURNING *;
        `, [user_id, price, is_active]);

        return orders;
    } catch (error) {
        throw error;
    }
};

const getOrdersById = async (id) => {
    try {
        const { rows: [orders] } = await client.query(`
        SELECT orders * FROM orders
        WHERE id=$1;
        `, [id]);

        return orders;
    } catch (error) {
        throw error;
    }
};

const getOrdersByUserId = async (user_id) => {
    try {
        const { rows: orders } = await client.query(`
        SELECT * FROM orders
        WHERE user_id=$1;
        `, [user_id]);

        return orders;
    } catch (error) {
        throw error;
    }
};

const updateOrders = async (id) => {
    try {
        await client.query(`
        UPDATE orders
        SET is_active=TRUE
        WHERE id=$1;
        `, [id]);

        return;
    } catch (error) {
        throw error;
    }
};

const destroyOrders = async (id) => {
    try {
        await client.query(`
        DELETE FROM orders
        WHERE id=${id}
        RETURNING *;
        `);

        return;
    } catch (error) {
        throw error;
    }
};

const checkoutOrders = async (user_id) => {
    try {
        await client.query(`
        UPDATE orders
        SET is_active=true
        WHERE id=$1
        RETURNING *;
        `, [user_id]);

        return;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllOrders,
    createOrders,
    getOrdersById,
    getOrdersByUserId,
    updateOrders,
    destroyOrders,
    checkoutOrders
};