import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container cart-page__empty">
          <span>🛒</span>
          <h2>Your cart is empty</h2>
          <p>Add some delicious items from our menu.</p>
          <Link to="/menu" className="btn-primary">Browse Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__header">
          <h1>Your Order</h1>
          <button onClick={clearCart} className="cart-page__clear">Clear All</button>
        </div>

        <div className="cart-page__layout">
          <div className="cart-page__items">
            {items.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="cart-item__emoji">🍽️</div>
                <div className="cart-item__info">
                  <h3>{item.name}</h3>
                  <span className="cart-item__price">${item.price.toFixed(2)} each</span>
                </div>
                <div className="cart-item__controls">
                  <button onClick={() => updateQty(item._id, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item._id, item.qty + 1)}>+</button>
                </div>
                <span className="cart-item__subtotal">${(item.price * item.qty).toFixed(2)}</span>
                <button className="cart-item__remove" onClick={() => removeItem(item._id)}>✕</button>
              </div>
            ))}
          </div>

          <div className="cart-page__summary">
            <h3>Order Summary</h3>
            <div className="cart-summary__row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-summary__row">
              <span>Delivery</span>
              <span className="cart-summary__delivery">To be confirmed</span>
            </div>
            <div className="cart-summary__total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn-primary cart-summary__btn">
              Proceed to Checkout
            </Link>
            <p className="cart-summary__note">
              📞 Or call us: <a href="tel:+263787902521">+263 787 902 521</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
