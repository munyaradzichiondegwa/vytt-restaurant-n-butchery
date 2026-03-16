import express from 'express';
import Order from '../models/orderModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST create order
router.post('/', async (req, res) => {
  try {
    const { customerName, phone, address, orderItems, totalPrice, isDelivery, notes } = req.body;
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }
    const order = new Order({ customerName, phone, address, orderItems, totalPrice, isDelivery, notes });
    const created = await order.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
