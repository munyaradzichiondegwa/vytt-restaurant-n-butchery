import express from 'express';
import MenuItem from '../models/menuModel.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET all menu items (optionally filter by category)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const items = await MenuItem.find(filter).sort({ category: 1, name: 1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET featured items
router.get('/featured', async (req, res) => {
  try {
    const items = await MenuItem.find({ isFeatured: true });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single item
router.get('/:id', async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (item) res.json(item);
    else res.status(404).json({ message: 'Menu item not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create item (admin only)
router.post('/', protect, admin, async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    const created = await item.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update item (admin only)
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (item) res.json(item);
    else res.status(404).json({ message: 'Menu item not found' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE item (admin only)
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu item removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
