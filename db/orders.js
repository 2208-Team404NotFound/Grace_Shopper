const ordersRouter = require('../api')
const client = require('./client')

const getAllOrders = async () => {
    try {
        const { rows: orders } = await client.query(`
        SELECT * FROM orders;
        `);

        return orders;
    } catch (error) {
        throw error;
    }
};

const createOrders = async ({ user_id, price, is_active }) => {
    try {
        const { rows: [orders] } = await client.query(`
        INSERT INTO orders (user_id, price, is_active)
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

const getOrdersByUserId = async ({ user_id }) => {
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

module.exports = {
    getAllOrders,
    createOrders,
    getOrdersById,
    getOrdersByUserId
};