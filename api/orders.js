const express = require('express');
const ordersRouter = express.Router();
const {
    getAllOrders,
    createOrders,
    getOrdersById,
    getOrdersByUserId,
    updateOrders,
    destroyOrders
} = require('../db');

ordersRouter.get('/', async (req, res) => {
    try {
        const allOrders = await getAllOrders();

        res.send(allOrders);
    } catch (error) {
        throw error;
    }
});

ordersRouter.post('/', async (req, res) => {
    const { user_id, price, is_active } = req.body;

    try {
        if (await getAllOrders(user_id)) {
            res.send({
                message: 'Order already exists',
                name: 'Order Exists Error'
            });
        };
        const newOrder = await createOrders({ user_id, price, is_active });
        res.send(newOrder);

    } catch (error) {
        throw error;
    }
});

// ordersRouter.put()

// ordersRouter.patch('/:order_id', async (req, res) => {
//     const { order_id } = req.params;
//     const { user_id, price, is_active } = req.body;

// })

module.exports = ordersRouter;