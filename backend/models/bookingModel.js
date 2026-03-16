import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    eventType: {
      type: String,
      required: true,
      enum: [
        'Conference',
        'Workshop',
        'Corporate Meeting',
        'Seminar',
        'Wedding',
        'Lobola Ceremony',
        'Birthday Party',
        'Company Luncheon',
        'Family Event',
        'Other',
      ],
    },
    date: { type: Date, required: true },
    guests: { type: Number, required: true },
    message: { type: String },
    status: {
      type: String,
      default: 'Pending',
      enum: ['Pending', 'Confirmed', 'Cancelled'],
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
