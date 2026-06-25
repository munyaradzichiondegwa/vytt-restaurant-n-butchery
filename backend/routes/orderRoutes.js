import express from 'express';
import Order from '../models/orderModel.js';
import { protect, optionalAuth, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST create order — works for guests; links to the account automatically
// when the customer is logged in (optionalAuth never blocks the request).
router.post('/', optionalAuth, async (req, res) => {
  try {
    const { customerName, phone, address, orderItems, totalPrice, isDelivery, notes, paymentMethod, paymentNumber } = req.body;
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }
    const order = new Order({
      user: req.user ? req.user._id : undefined,
      customerName, phone, address, orderItems, totalPrice, isDelivery, notes, paymentMethod, paymentNumber,
    });
    const created = await order.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET orders for the logged-in customer (repeat-customer order history)
router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all orders (admin only)
router.get('/', protect, admin, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) res.json(order);
    else res.status(404).json({ message: 'Order not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update order status (admin only)
router.put('/:id/status', protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status;
      const updated = await order.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;