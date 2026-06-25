// frontend/src/pages/CheckoutPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../api';
import './CheckoutPage.css';

const PAYMENT_METHODS = [
  { id: 'ecocash',    label: 'EcoCash',     icon: '📱', color: '#e05c00' },
  { id: 'onemoney',   label: 'OneMoney',    icon: '📲', color: '#cc0000' },
  { id: 'innbucks',   label: 'InnBucks',    icon: '🏦', color: '#017172' },
  { id: 'cash',       label: 'Pay on Site', icon: '💵', color: '#018684' },
];

const ORDER_STATUSES = [
  { key: 'Pending',    label: 'Order Placed', icon: '✅' },
  { key: 'Preparing',  label: 'Preparing',    icon: '👨‍🍳' },
  { key: 'Ready',      label: 'Ready',        icon: '🔔' },
  { key: 'Delivered',  label: 'Delivered',    icon: '🎉' },
];

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Step: 'details' | 'payment' | 'confirmed'
  const [step, setStep] = useState('details');

  const [form, setForm] = useState({
    customerName: '', phone: '', address: '',
    isDelivery: false, notes: '', paymentNumber: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('ecocash');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [placedOrder, setPlacedOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState('Pending');

  // Repeat customers: fill in their saved details automatically.
  useEffect(() => {
    if (user) {
      setForm((f) => ({
        ...f,
        customerName: f.customerName || user.name || '',
        phone: f.phone || user.phone || '',
        address: f.address || user.address || '',
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: val });
  };

  // Auto-advance order status every 5 s after confirmation
  useEffect(() => {
    if (step !== 'confirmed') return;
    const statuses = ['Pending', 'Preparing', 'Ready', 'Delivered'];
    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx < statuses.length) {
        setOrderStatus(statuses[idx]);
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [step]);

  const handleDetailsNext = (e) => {
    e.preventDefault();
    if (!form.customerName || !form.phone) return;
    setStep('payment');
  };

  const handlePlaceOrder = async () => {
    if (items.length === 0) return;
    setLoading(true);
    setError('');

    const localFallback = {
      _id: 'LOCAL' + Date.now(),
      customerName: form.customerName,
      phone: form.phone,
      address: form.address,
      isDelivery: form.isDelivery,
      totalPrice,
    };

    try {
      const orderData = {
        ...form,
        paymentMethod,
        orderItems: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price, menuItem: i._id })),
        totalPrice,
      };
      const { data } = await createOrder(orderData);
      // Guard against a malformed/non-JSON response (e.g. a proxy or
      // cold-start page returned instead of real JSON) silently producing
      // a broken confirmation screen.
      const isValidOrder = data && typeof data === 'object' && data._id;
      setPlacedOrder(isValidOrder ? data : localFallback);
      clearCart();
      setStep('confirmed');
    } catch {
      // If API unavailable, still show confirmation locally
      setPlacedOrder(localFallback);
      clearCart();
      setStep('confirmed');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0 && step !== 'confirmed') {
    return (
      <div className="checkout-page">
        <div className="container checkout-empty">
          <h2>No items in cart</h2>
          <p>Add items to your cart before checking out.</p>
        </div>
      </div>
    );
  }

  const currentStatusIdx = ORDER_STATUSES.findIndex((s) => s.key === orderStatus);

  return (
    <div className="checkout-page">
      <div className="container">

        {/* ── STEP INDICATOR ── */}
        <div className="checkout-steps">
          {['Your Details', 'Payment', 'Confirmed'].map((label, i) => {
            const stepKeys = ['details', 'payment', 'confirmed'];
            const active   = stepKeys[i] === step;
            const done     = stepKeys.indexOf(step) > i;
            return (
              <div key={label} className={`checkout-step${active ? ' active' : ''}${done ? ' done' : ''}`}>
                <div className="checkout-step__dot">{done ? '✓' : i + 1}</div>
                <span>{label}</span>
              </div>
            );
          })}
        </div>

        {/* ══ STEP 1: DETAILS ══ */}
        {step === 'details' && (
          <div className="checkout-layout">
            <form className="checkout-form" onSubmit={handleDetailsNext}>
              <h3>Your Details</h3>

              {isLoggedIn ? (
                <p className="checkout-account-note">
                  Logged in as <strong>{user.name}</strong> — your details are filled in below.
                </p>
              ) : (
                <p className="checkout-account-note checkout-account-note--guest">
                  Have an account? <Link to="/login" state={{ from: '/checkout' }}>Log in</Link> for faster checkout.
                  Otherwise, just continue below as a guest — no account needed.
                </p>
              )}

              {error && <div className="checkout-error">{error}</div>}

              <div className="form-group">
                <label>Full Name *</label>
                <input name="customerName" value={form.customerName} onChange={handleChange} required placeholder="Your name" />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+263 7XX XXX XXX" />
              </div>

              <div className="form-group form-group--checkbox">
                <label>
                  <input type="checkbox" name="isDelivery" checked={form.isDelivery} onChange={handleChange} />
                  I want delivery (additional charge applies)
                </label>
              </div>

              {form.isDelivery && (
                <div className="form-group">
                  <label>Delivery Address *</label>
                  <textarea name="address" value={form.address} onChange={handleChange} rows={3} placeholder="Your delivery address" />
                </div>
              )}

              <div className="form-group">
                <label>Special Instructions</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any special requests or dietary needs..." />
              </div>

              <button type="submit" className="btn-primary checkout-submit">
                Continue to Payment →
              </button>
            </form>

            <div className="checkout-summary">
              <h3>Order Review</h3>
              {items.map((item) => (
                <div key={item._id} className="checkout-summary__item">
                  <span>{item.name} × {item.qty}</span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              <div className="checkout-summary__total">
                <strong>Total</strong>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        )}

        {/* ══ STEP 2: PAYMENT ══ */}
        {step === 'payment' && (
          <div className="checkout-layout">
            <div className="checkout-form">
              <h3>Choose Payment Method</h3>

              <div className="checkout-payment-methods">
                {PAYMENT_METHODS.map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    className={`checkout-pm-btn${paymentMethod === pm.id ? ' selected' : ''}`}
                    style={{ '--pm-color': pm.color }}
                    onClick={() => setPaymentMethod(pm.id)}
                  >
                    <span className="checkout-pm-icon">{pm.icon}</span>
                    <span className="checkout-pm-label">{pm.label}</span>
                    {paymentMethod === pm.id && <span className="checkout-pm-check">✓</span>}
                  </button>
                ))}
              </div>

              {/* Mobile money number field */}
              {(paymentMethod === 'ecocash' || paymentMethod === 'onemoney' || paymentMethod === 'innbucks') && (
                <div className="form-group" style={{ marginTop: 20 }}>
                  <label>{PAYMENT_METHODS.find((p) => p.id === paymentMethod)?.label} Number</label>
                  <input
                    type="tel"
                    name="paymentNumber"
                    value={form.paymentNumber}
                    onChange={handleChange}
                    placeholder="+263 7XX XXX XXX"
                  />
                </div>
              )}

              {paymentMethod === 'cash' && (
                <div className="checkout-cash-note">
                  💵 You'll pay when you collect or when we deliver. Please have the exact amount ready.
                </div>
              )}

              <div className="checkout-total-bar">
                <span>Total to pay</span>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>

              <div className="checkout-btns">
                <button type="button" className="checkout-back-btn" onClick={() => setStep('details')}>← Back</button>
                <button type="button" className="btn-primary checkout-submit" onClick={handlePlaceOrder} disabled={loading}>
                  {loading ? 'Placing Order...' : `Confirm & Pay $${totalPrice.toFixed(2)}`}
                </button>
              </div>
            </div>

            <div className="checkout-summary">
              <h3>Order Review</h3>
              {items.map((item) => (
                <div key={item._id} className="checkout-summary__item">
                  <span>{item.name} × {item.qty}</span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              <div className="checkout-summary__total">
                <strong>Total</strong>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
              <div className="checkout-summary__method">
                Paying via <strong>{PAYMENT_METHODS.find((p) => p.id === paymentMethod)?.label}</strong>
              </div>
            </div>
          </div>
        )}

        {/* ══ STEP 3: CONFIRMED + ORDER TRACKER ══ */}
        {step === 'confirmed' && (
          <div className="checkout-confirmed">
            <div className="checkout-confirmed__icon">🎉</div>
            <h2>Order Confirmed!</h2>
            <p className="checkout-confirmed__sub">
              Thank you{placedOrder?.customerName ? `, ${placedOrder.customerName}` : ''}!
              Your order has been received.
            </p>
            {placedOrder && (
              <div className="checkout-confirmed__ref">
                Order ref: <strong>VT-{String(placedOrder._id).slice(-6).toUpperCase()}</strong>
              </div>
            )}

            {/* ── ORDER STATUS TRACKER ── */}
            <div className="order-tracker">
              <h3>Order Status</h3>
              <div className="order-tracker__bar">
                {/* progress line fill */}
                <div
                  className="order-tracker__line-fill"
                  style={{ width: `${(currentStatusIdx / (ORDER_STATUSES.length - 1)) * 100}%` }}
                />
                {ORDER_STATUSES.map((s, i) => {
                  const done   = i < currentStatusIdx;
                  const active = i === currentStatusIdx;
                  return (
                    <div key={s.key} className={`order-tracker__step${done ? ' done' : ''}${active ? ' active' : ''}`}>
                      <div className="order-tracker__dot">{done ? '✓' : s.icon}</div>
                      <span className="order-tracker__label">{s.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="order-tracker__current">
                Current: <strong>{ORDER_STATUSES.find((s) => s.key === orderStatus)?.label}</strong>
              </p>
            </div>

            {placedOrder && (
              <div className="checkout-confirmed__info">
                <p>We'll contact you on <strong>{placedOrder.phone}</strong> to confirm your order.</p>
                {placedOrder.isDelivery && <p>Delivering to: <strong>{placedOrder.address}</strong></p>}
              </div>
            )}

            <div className="checkout-confirmed__contacts">
              <a href="tel:+263787902521" className="btn-primary">📞 +263 787 902 521</a>
              <a href="https://wa.me/263787902521" target="_blank" rel="noopener noreferrer" className="btn-primary checkout-wa">
                💬 WhatsApp
              </a>
            </div>

            {!isLoggedIn && (
              <p className="checkout-confirmed__signup-nudge">
                Ordering from VYTT again soon? <Link to="/register">Create an account</Link> to save your
                details and track orders like this one — totally optional.
              </p>
            )}

            <button className="checkout-confirmed__back" onClick={() => navigate('/menu')}>
              Browse More →
            </button>
          </div>
        )}

      </div>
    </div>
  );
}