import express from 'express';
import Booking from '../models/bookingModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST create booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    const created = await booking.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all bookings (admin only)
router.get('/', protect, admin, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update booking status (admin only)
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (booking) res.json(booking);
    else res.status(404).json({ message: 'Booking not found' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
