import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
});

// Attach the logged-in customer's token (if any) to every request. Guest
// requests simply have no Authorization header — the backend's
// optionalAuth middleware treats that as a guest, not an error.
API.interceptors.request.use((config) => {
  try {
    const token = JSON.parse(localStorage.getItem('vytt_auth_v1'))?.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch {
    // no stored session — proceed as a guest
  }
  return config;
});

// Menu
export const fetchMenuItems = (category) =>
  API.get('/api/menu', { params: category ? { category } : {} });

export const fetchFeaturedItems = () => API.get('/api/menu/featured');

// Orders
export const createOrder = (orderData) => API.post('/api/orders', orderData);
export const fetchOrder = (id) => API.get(`/api/orders/${id}`);
export const fetchMyOrders = () => API.get('/api/orders/myorders');

// Bookings
export const createBooking = (bookingData) => API.post('/api/bookings', bookingData);

// Account
export const loginUser = (credentials) => API.post('/api/users/login', credentials);
export const registerUser = (userData) => API.post('/api/users/register', userData);
export const fetchProfile = () => API.get('/api/users/profile');
export const updateProfile = (profileData) => API.put('/api/users/profile', profileData);

export default API;
