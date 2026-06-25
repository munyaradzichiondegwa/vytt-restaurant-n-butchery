// frontend/src/components/MenuCard.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './MenuCard.css';

const categoryEmojis = {
  'Traditional Starches': '🌾', 'Contemporary Starches': '🍟',
  'Traditional Usavi': '🍲',    'Contemporary Delicacies': '🥩',
  'Platters': '🍽️',            'Tribes Treat': '🏆',
  'Contemporary Bites': '🌯',   'Starters': '🥨',
  'Salads': '🥗',               'Breakfast': '🍳',
  'Desserts': '🍦',             'Hot Beverages': '☕',
  'Cold Beverages': '🥤',       'Ciders': '🍺',
  'Mocktails': '🌿',            'Cocktails': '🍸',
  // Legacy
  Starches: '🌽', Mains: '🍖', Delicacies: '🌯',
  Butchery: '🥩', Breakfast: '🍳', Desserts: '🍦',
  Beverages: '🍺', Specials: '⭐',
};

export default function MenuCard({ item, itemImage }) {
  const { addItem } = useCart();

  // For items with priceOptions (e.g. Burger chicken/beef, Tribes Treat)
  // selectedOption tracks which option is chosen before adding to cart
  const hasOptions = item.priceOptions && item.priceOptions.length > 1;
  const [selectedOption, setSelectedOption] = useState(hasOptions ? item.priceOptions[0] : null);

  const effectivePrice = hasOptions ? selectedOption.price : item.price;

  const formatPrice = () => {
    if (hasOptions) return `$${effectivePrice.toFixed(2)}`;
    if (item.price === 0) return 'Price varies';
    if (item.priceMax) return `$${item.price.toFixed(2)} – $${item.priceMax.toFixed(2)}`;
    return `$${item.price.toFixed(2)}${item.unit || ''}`;
  };

  const handleAdd = () => {
    const cartItem = hasOptions
      ? { ...item, price: effectivePrice, name: `${item.name} (${selectedOption.label})` }
      : item;
    addItem(cartItem);
  };

  return (
    <div className={`menu-card${item.isFeatured ? ' menu-card--featured' : ''}`}>
      {item.isFeatured && <span className="menu-card__badge badge badge-teal">⭐ Featured</span>}

      {/* Image or emoji */}
      {itemImage ? (
        <div
          className="menu-card__image"
          style={{ backgroundImage: `url(${itemImage})` }}
        />
      ) : (
        <div className="menu-card__emoji">{categoryEmojis[item.category] || '🍽️'}</div>
      )}

      <div className="menu-card__body">
        <h3 className="menu-card__name">{item.name}</h3>
        {item.description && <p className="menu-card__desc">{item.description}</p>}
        {item.tags && item.tags.length > 0 && (
          <div className="menu-card__tags">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="menu-card__tag">{tag}</span>
            ))}
          </div>
        )}

        {/* ── PRICE OPTIONS (dual/multi price) ── */}
        {hasOptions && (
          <div className="menu-card__options">
            {item.priceOptions.map((opt) => (
              <button
                key={opt.label}
                className={`menu-card__option-btn${selectedOption.label === opt.label ? ' selected' : ''}`}
                onClick={() => setSelectedOption(opt)}
              >
                {opt.label}
                <span className="menu-card__option-price">${opt.price.toFixed(2)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="menu-card__footer">
        <span className="menu-card__price">{formatPrice()}</span>
        {!item.unit ? (
          <button className="menu-card__btn" onClick={handleAdd}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add
          </button>
        ) : (
          <span className="menu-card__unit-note">Order in-store</span>
        )}
      </div>
    </div>
  );
}