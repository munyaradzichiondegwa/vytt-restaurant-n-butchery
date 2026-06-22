import React, { useState, useEffect, useRef } from 'react';
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

export default function MenuPage() {
  const [items, setItems] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [activeCat, setActiveCat] = useState('All');
  const [loading, setLoading] = useState(true);

  // Hero auto‑slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    fetchMenuItems()
      .then((res) => {
        const all = res.data || [];
        setItems(all);
        // pick featured items, or fallback to first 5 if none are featured
        const featuredItems = all.filter(item => item.isFeatured);
        setFeatured(featuredItems.length > 0 ? featuredItems : all.slice(0, 5));
      })
      .catch(() => {
        setItems([]);
        setFeatured([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Auto‑rotate the hero slide every 10 seconds
  useEffect(() => {
    if (featured.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featured.length);
    }, 10000);
    return () => clearInterval(timerRef.current);
  }, [featured]);

  const filtered = activeCat === 'All'
    ? items
    : items.filter((i) => i.category === activeCat);

  if (loading) return <div className="spinner" />;

  return (
    <div className="menu-page">
      {/* ─── HERO SECTION – now the autoplay slideshow ─── */}
      <section className="menu-page__hero-slideshow">
        {featured.length > 0 ? (
          featured.map((item, index) => (
            <div
              key={item._id || item.name}
              className={`hero-slide ${index === currentSlide ? 'hero-slide--active' : ''}`}
              style={{
                backgroundImage: item.image
                  ? `url(${item.image})`
                  : undefined,
              }}
            >
              <div className="hero-slide__overlay" />
              <div className="hero-slide__content">
                <span className="hero-slide__category">
                  {CATEGORY_ICONS[item.category]} {item.category}
                </span>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <strong className="hero-slide__price">
                  {item.price === 0 ? 'Price varies' : `$${item.price.toFixed(2)}`}
                </strong>
              </div>
            </div>
          ))
        ) : (
          <div className="hero-slide hero-slide--active">
            <div className="hero-slide__overlay" />
            <div className="hero-slide__content">
              <h1>Our Menu</h1>
              <p>Farm‑fresh, traditional, and contemporary — all made to order.</p>
            </div>
          </div>
        )}
      </section>

      {/* ─── CATEGORY TABS ─── */}
      <div className="menu-page__tabs">
        <button
          className={`tab ${activeCat === 'All' ? 'active' : ''}`}
          onClick={() => setActiveCat('All')}
        >
          All
        </button>
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

      {/* ─── MENU GRID ─── */}
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