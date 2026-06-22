import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    priceMax: { type: Number },
    category: {
      type: String,
      required: true,
      enum: [
        'Traditional Starches',
        'Contemporary Starches',
        'Traditional Usavi',
        'Contemporary Delicacies',
        'Platters',
        'Tribes Treat',
        'Contemporary Bites',
        'Starters',
        'Salads',
        'Breakfast',
        'Desserts',
        'Hot Beverages',
        'Cold Beverages',
        'Ciders',
        'Mocktails',
        'Cocktails',
      ],
    },
    unit: { type: String, default: '' },
    isAvailable: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    tags: [{ type: String }],
    image: { type: String, default: '' },
  },
  { timestamps: true }
);

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;