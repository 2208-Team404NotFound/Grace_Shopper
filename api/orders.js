const express = require('express');
const ordersRouter = express.Router();
const {
    getAllOrders,
    createOrders,
    getOrdersById,
    getOrdersByUserId
} = require('../db');

ordersRouter.get('/', async (req, res) => {
    try {
        const allOrders = await getAllOrders();

        res.send(allOrders);
    } catch (error) {
        throw error;
    }
});