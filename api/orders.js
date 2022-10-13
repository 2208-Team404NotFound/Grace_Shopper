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
        if (!req.user) {
            res.send('Error');
            return;
        }
        const cart = await getAllOrders(req.user.id);
        res.send({ cart })
    } catch (error) {
        throw error;
    }
});

ordersRouter.post('/add-to-cart', async (req, res) => {
    const { user_id, price, is_active } = req.body;

    try {
        if (!req.user) {
            res.send('Error');
            return;
        }
        const item = await updateOrders(req.body);
        res.send(item);

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