import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
});

// Menu
export const fetchMenuItems = (category) =>
  API.get('/api/menu', { params: category ? { category } : {} });

export const fetchFeaturedItems = () => API.get('/api/menu/featured');

// Orders
export const createOrder = (orderData) => API.post('/api/orders', orderData);
export const fetchOrder = (id) => API.get(`/api/orders/${id}`);

// Bookings
export const createBooking = (bookingData) => API.post('/api/bookings', bookingData);

// Users
export const loginUser = (credentials) => API.post('/api/users/login', credentials);
export const registerUser = (userData) => API.post('/api/users/register', userData);

export default API;
