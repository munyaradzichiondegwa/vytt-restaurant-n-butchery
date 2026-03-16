import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchOrder } from '../api';
import './OrderConfirmPage.css';

export default function OrderConfirmPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder(id)
      .then((res) => setOrder(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="order-confirm"><div className="container"><div className="spinner"></div></div></div>;

  return (
    <div className="order-confirm">
      <div className="container order-confirm__body">
        <div className="order-confirm__icon">✅</div>
        <h1>Order Placed!</h1>
        <p className="order-confirm__sub">
          Thank you{order ? `, ${order.customerName}` : ''}! Your order has been received.
        </p>

        {order && (
          <div className="order-confirm__card">
            <div className="order-confirm__row">
              <span>Order ID</span>
              <span className="order-confirm__id">{order._id.slice(-8).toUpperCase()}</span>
            </div>
            <div className="order-confirm__row">
              <span>Status</span>
              <span className="badge badge-green">{order.status}</span>
            </div>
            <div className="order-confirm__row">
              <span>Total</span>
              <span className="order-confirm__total">${order.totalPrice.toFixed(2)}</span>
            </div>
            {order.isDelivery && (
              <div className="order-confirm__row">
                <span>Delivery to</span>
                <span>{order.address}</span>
              </div>
            )}
          </div>
        )}

        <div className="order-confirm__info">
          <p>We'll contact you on <strong>{order?.phone}</strong> to confirm your order.</p>
          <p>For immediate queries, call or WhatsApp:</p>
          <div className="order-confirm__contacts">
            <a href="tel:+263787902521" className="btn-primary">📞 +263 787 902 521</a>
            <a href="https://wa.me/263787902521" target="_blank" rel="noopener noreferrer" className="btn-outline order-confirm__wa">
              💬 WhatsApp
            </a>
          </div>
        </div>

        <Link to="/menu" className="order-confirm__back">Browse More →</Link>
      </div>
    </div>
  );
}
