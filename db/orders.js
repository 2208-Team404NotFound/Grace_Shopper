const client = require('./client');

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

// const getOrdersByOrderId = async (order_id) => {
//     try {
//         const { rows: [orders] } = await client.query(`
//         SELECT orders.*
//         `)

//     } catch (error) {
//         throw error;
//     }
// }

module.exports = {
    getAllOrders,
    createOrders,
    // getOrdersByOrderId
};