import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import MenuItem from '../models/menuModel.js';
import Order from '../models/orderModel.js';
import Booking from '../models/bookingModel.js';
import User from '../models/userModel.js';
import { menuItems, users } from './menuData.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const importData = async () => {
  try {
    await MenuItem.deleteMany();
    await Order.deleteMany();
    await Booking.deleteMany();
    await User.deleteMany();

    await MenuItem.insertMany(menuItems);

    const createdUsers = await Promise.all(
      users.map(async (u) => {
        const salt = await bcrypt.genSalt(10);
        u.password = await bcrypt.hash(u.password, salt);
        return User.create(u);
      })
    );

    console.log('✅ VYTT data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await MenuItem.deleteMany();
    await Order.deleteMany();
    await Booking.deleteMany();
    await User.deleteMany();
    console.log('✅ VYTT data destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
