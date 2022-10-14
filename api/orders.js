const express = require('express');
const ordersRouter = express.Router();
const { requireUser, requireAdmin } = require('./utils')
const {
    getAllOrders,
    createOrders,
    getOrdersById,
    getOrdersByUserId,
    updateOrders,
    destroyOrders
} = require('../db');

ordersRouter.get('/', requireUser, async (req, res) => {
    try {
        const allOrders = await getAllOrders();

        res.send(allOrders);
    } catch (error) {
        throw error;
    }
});

ordersRouter.post('/', requireUser, async (req, res) => {
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

module.exports = ordersRouter;