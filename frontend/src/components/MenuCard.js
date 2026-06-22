import React from 'react';
import { Link } from 'react-router-dom';

const categoryEmojis = {
  'Traditional Starches': '🌽',
  'Contemporary Starches': '🍟',
  'Traditional Usavi': '🍲',
  'Contemporary Delicacies': '🥩',
  'Platters': '🍱',
  'Tribes Treat': '🔥',
  'Contemporary Bites': '🌯',
  'Starters': '🥜',
  'Salads': '🥗',
  'Breakfast': '🍳',
  'Desserts': '🍰',
  'Hot Beverages': '☕',
  'Cold Beverages': '🥤',
  'Ciders': '🍺',
  'Mocktails': '🍹',
  'Cocktails': '🍸',
};

const MenuCard = ({ item }) => {
  const priceDisplay = item.price === 0 ? 'Price varies' : `$${item.price.toFixed(2)}`;

  return (
    <div className="menu-card">
      <div className="menu-card__img">
        <img
          src={item.image || '/images/placeholder-food.jpg'}
          alt={item.name}
          loading="lazy"
          onError={(e) => { e.target.src = '/images/placeholder-food.jpg'; }}
        />
        {item.isFeatured && <span className="badge-featured">⭐ Featured</span>}
      </div>
      <div className="menu-card__info">
        <span className="menu-card__category">
          {categoryEmojis[item.category] || '🍽️'} {item.category}
        </span>
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">{item.description}</p>
        <strong className="menu-card__price">{priceDisplay}</strong>
      </div>
    </div>
  );
};

export default MenuCard;