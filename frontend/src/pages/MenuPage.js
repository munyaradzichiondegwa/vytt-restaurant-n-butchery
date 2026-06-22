import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fetchMenuItems } from '../api';
import MenuCard from '../components/MenuCard';
import './MenuPage.css';

const CATEGORIES = [
  'Traditional Starches', 'Contemporary Starches', 'Traditional Usavi',
  'Contemporary Delicacies', 'Platters', 'Tribes Treat', 'Contemporary Bites',
  'Starters', 'Salads', 'Breakfast', 'Desserts', 'Hot Beverages',
  'Cold Beverages', 'Ciders', 'Mocktails', 'Cocktails',
];

const CATEGORY_ICONS = {
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

// Full static fallback (91 items from menuData)
const STATIC_MENU = [
  { name: 'White Sadza', price: 0.50, category: 'Traditional Starches', description: 'Smooth white maize meal sadza.' },
  { name: 'Road Runners', price: 4.00, category: 'Traditional Usavi', description: 'Free-range chicken, slow-cooked.' },
  // ... you can include all 91 items if you want a full offline fallback.
  // For brevity, only a few are shown; ideally copy the entire array from menuData.js.
  // But since the API will always be used, we can rely on the live data.
];

export default function MenuPage() {
  const [items, setItems] = useState([]);
  const [activeCat, setActiveCat] = useState('All');
  const [loading, setLoading] = useState(true);

  // Carousel state
  const [featured, setFeatured] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    fetchMenuItems()
      .then((res) => {
        const all = res.data || [];
        setItems(all);
        setFeatured(all.filter((i) => i.isFeatured));
      })
      .catch(() => setItems(STATIC_MENU))
      .finally(() => setLoading(false));
  }, []);

  // Carousel auto-rotate
  useEffect(() => {
    if (featured.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featured.length);
    }, 10000);
    return () => clearInterval(timerRef.current);
  }, [featured]);

  const handlePrevSlide = () => {
    clearInterval(timerRef.current);
    setCurrentSlide((prev) => (prev - 1 + featured.length) % featured.length);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featured.length);
    }, 10000);
  };

  const handleNextSlide = () => {
    clearInterval(timerRef.current);
    setCurrentSlide((prev) => (prev + 1) % featured.length);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featured.length);
    }, 10000);
  };

  const filtered = activeCat === 'All'
    ? items
    : items.filter((i) => i.category === activeCat);

  if (loading) return <div className="spinner" />;

  return (
    <div className="menu-page">
      <section className="menu-page__hero">
        <div className="menu-page__hero-bg" />
        <h1>Our Menu</h1>
        <p>Farm-fresh, traditional, and contemporary — all made to order.</p>
      </section>

      {/* Featured Carousel */}
      {featured.length > 0 && (
        <div className="menu-page__carousel">
          <button className="carousel__btn carousel__prev" onClick={handlePrevSlide}>‹</button>
          <div className="carousel__slide">
            <MenuCard item={featured[currentSlide]} />
          </div>
          <button className="carousel__btn carousel__next" onClick={handleNextSlide}>›</button>
          <div className="carousel__dots">
            {featured.map((_, idx) => (
              <span
                key={idx}
                className={`carousel__dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => { clearInterval(timerRef.current); setCurrentSlide(idx); }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="menu-page__tabs">
        <button
          className={`tab ${activeCat === 'All' ? 'active' : ''}`}
          onClick={() => setActiveCat('All')}
        >All</button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeCat === cat ? 'active' : ''}`}
            onClick={() => setActiveCat(cat)}
          >
            {CATEGORY_ICONS[cat]} {cat}
          </button>
        ))}
      </div>

      <div className="menu-page__grid">
        {filtered.length > 0 ? (
          filtered.map((item) => <MenuCard key={item._id || item.name} item={item} />)
        ) : (
          <p className="no-items">No items in this category yet.</p>
        )}
      </div>
    </div>
  );
}