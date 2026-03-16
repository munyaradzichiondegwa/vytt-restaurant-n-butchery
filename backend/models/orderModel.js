import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
});

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    orderItems: [orderItemSchema],
    totalPrice: { type: Number, required: true },
    isDelivery: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },
    status: {
      type: String,
      default: 'Pending',
      enum: ['Pending', 'Confirmed', 'Preparing', 'Ready', 'Delivered', 'Cancelled'],
    },
    notes: { type: String },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
