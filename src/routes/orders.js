const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orders');


router.post('/',OrderController.OrderCreate);
router.get('/all',OrderController.GetallOrders)
router.delete('/:id',OrderController.OrderDelete)

module.exports = router;