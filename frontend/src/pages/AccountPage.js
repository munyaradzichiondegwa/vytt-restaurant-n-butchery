import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fetchMyOrders } from '../api';
import './AccountPage.css';

const STATUS_COLORS = {
  Pending: '#8a8a8a',
  Confirmed: '#029591',
  Preparing: '#c9a84c',
  Ready: '#017172',
  Delivered: '#1a7a1a',
  Cancelled: '#B7011D',
};

export default function AccountPage() {
  const { user, updateProfile, authLoading, authError, logout } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [form, setForm] = useState({ name: user?.name || '', phone: user?.phone || '', address: user?.address || '' });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchMyOrders()
      .then((res) => setOrders(Array.isArray(res.data) ? res.data : []))
      .catch(() => setOrders([]))
      .finally(() => setOrdersLoading(false));
  }, []);

  const handleChange = (e) => {
    setSaved(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(form);
      setSaved(true);
    } catch {
      // authError is already set by the context for display below
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null; // ProtectedRoute handles the redirect

  return (
    <div className="account-page">
      <div className="container">
        <div className="account-page__header">
          <h1>My Account</h1>
          <p>Welcome back, {user.name}.</p>
        </div>

        <div className="account-page__grid">
          <div className="account-card">
            <h2>Your Details</h2>
            <p className="account-card__hint">
              Saved here so checkout can fill itself in next time.
            </p>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user.email} disabled />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+263 7XX XXX XXX" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Delivery Address</label>
                <textarea name="address" rows={2} value={form.address} onChange={handleChange} />
              </div>

              {authError && <p className="account-card__error">{authError}</p>}
              {saved && <p className="account-card__success">Saved.</p>}

              <button type="submit" className="btn-primary" disabled={authLoading}>
                {authLoading ? 'Saving…' : 'Save Changes'}
              </button>
            </form>

            <button type="button" className="account-page__logout" onClick={handleLogout}>
              Log Out
            </button>
          </div>

          <div className="account-card account-card--orders">
            <h2>Order History</h2>
            {ordersLoading ? (
              <p className="account-card__hint">Loading your orders…</p>
            ) : orders.length === 0 ? (
              <p className="account-card__hint">
                No orders yet — your past orders will show up here once you've placed one.
              </p>
            ) : (
              <ul className="account-orders">
                {orders.map((o) => (
                  <li key={o._id} className="account-order">
                    <div className="account-order__top">
                      <span className="account-order__ref">
                        VT-{String(o._id).slice(-6).toUpperCase()}
                      </span>
                      <span
                        className="account-order__status"
                        style={{ background: `${STATUS_COLORS[o.status] || '#8a8a8a'}1A`, color: STATUS_COLORS[o.status] || '#8a8a8a' }}
                      >
                        {o.status}
                      </span>
                    </div>
                    <p className="account-order__items">
                      {(o.orderItems || []).map((i) => `${i.name} ×${i.qty}`).join(', ')}
                    </p>
                    <div className="account-order__bottom">
                      <span>{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : ''}</span>
                      <strong>${Number(o.totalPrice || 0).toFixed(2)}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
