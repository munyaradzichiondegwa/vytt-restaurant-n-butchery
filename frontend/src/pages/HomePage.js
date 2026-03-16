// frontend/src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchFeaturedItems } from '../api';
import MenuCard from '../components/MenuCard';
import { heroImg, aboutStoryImg } from '../assets';
import './HomePage.css';

const SPECIALS = [
  { day: 'Monday',  color: '#3296a0', icon: '🌿', title: 'Forget Monday Blues',  desc: 'Sadza & Chicken Offals — $1.50' },
  { day: 'Tuesday', color: '#2d8a94', icon: '🤔', title: 'This or That',          desc: 'Mix traditional or contemporary dishes with cocktails & mocktails' },
  { day: 'Friday',  color: '#1e6970', icon: '🍺', title: 'Friday Highlights',     desc: 'Usavi stews, shawarma, platters, burgers & ice-cold ciders' },
  { day: 'Weekend', color: '#0f3a3e', icon: '🔥', title: 'Weekend Vibes',         desc: 'Hotdog vs Burger — 100% full flavour from $2.00' },
];

const SERVICES = [
  { icon: '🍽️', title: 'Restaurant Dining',   desc: 'Indoor seating with a warm, welcoming atmosphere. Perfect for family meals and casual gatherings.' },
  { icon: '🥩', title: 'Butchery',             desc: 'Family-approved fresh meats daily — beef, pork, goat, fish, sausages and farm eggs.' },
  { icon: '🛵', title: 'Delivery',             desc: 'Full menu delivered from our kitchen to your door. Order via phone or WhatsApp.' },
  { icon: '🏢', title: 'Conference Room',      desc: 'Professional venue for board meetings, workshops, training sessions and seminars.' },
  { icon: '🎉', title: 'Outdoor Catering',     desc: 'Customised spreads for weddings, lobola ceremonies, corporate luncheons and parties.' },
  { icon: '📅', title: 'Reservations',         desc: 'Reserve a table, conference room, or book our catering services in advance.' },
];

export default function HomePage() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    fetchFeaturedItems()
      .then((res) => setFeatured(res.data))
      .catch(() => setFeatured([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div
          className="hero__bg"
          style={heroImg ? { backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__badge badge badge-teal">Now Open · Gutu, Zimbabwe</div>
          <h1 className="hero__title">
            Great Food.<br />
            <span className="hero__title--accent">Cold Beer.</span><br />
            Good Times.
          </h1>
          <p className="hero__subtitle">
            VYTT Restaurant &amp; Butchery — where traditional Zimbabwean flavours
            meet fresh, farm-sourced ingredients and warm hospitality.
          </p>
          <div className="hero__actions">
            <Link to="/menu"    className="btn-primary">Explore Menu</Link>
            <Link to="/booking" className="btn-outline">Book a Table</Link>
          </div>
          <div className="hero__info">
            <div className="hero__info-item"><span>📍</span><span>2465 Gutu Junction, Gutu</span></div>
            <div className="hero__info-item"><span>📞</span><span>+263 787 902 521</span></div>
            <div className="hero__info-item"><span>🕐</span><span>Open Daily 7am – 10pm</span></div>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── WEEKLY SPECIALS ── */}
      <section className="specials">
        <div className="container">
          <p className="specials__eyebrow">Weekly Deals</p>
          <h2 className="section-title">Every Day Has a Special</h2>
          <p className="section-subtitle">We keep things exciting all week long</p>
          <div className="specials__grid">
            {SPECIALS.map((s) => (
              <div key={s.day} className="specials__card" style={{ '--accent': s.color }}>
                <div className="specials__icon">{s.icon}</div>
                <div className="specials__day">{s.day}</div>
                <h3 className="specials__title">{s.title}</h3>
                <p className="specials__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP (uses aboutStoryImg from assets) ── */}
      <section className="about-strip">
        <div
          className="about-strip__bg"
          style={aboutStoryImg ? { backgroundImage: `url(${aboutStoryImg})` } : {}}
        />
        <div className="container about-strip__inner">
          <div className="about-strip__text">
            <p className="about-strip__eyebrow">Our Story</p>
            <h2>Farm-Fresh.<br />Always Flavourful.</h2>
            <p>
              Located at 2465 Gutu Junction, VYTT Restaurant and Butchery brings you
              authentic Zimbabwean cuisine made from the freshest local ingredients.
              From our butchery to your plate — quality you can taste.
            </p>
            <Link to="/about" className="btn-primary">Read Our Story</Link>
          </div>
          <div
            className="about-strip__image"
            style={aboutStoryImg ? { backgroundImage: `url(${aboutStoryImg})` } : {}}
          >
            {!aboutStoryImg && (
              <div className="about-strip__image-placeholder">
                <span>🏪</span>
                <p>Add about-story.jpg<br />to src/assets/</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED ITEMS ── */}
      <section className="featured">
        <div className="container">
          <p className="featured__eyebrow">Staff Picks</p>
          <h2 className="section-title">Our Signature Dishes</h2>
          <p className="section-subtitle">Tried, tested and loved by everyone</p>
          {loading ? (
            <div className="featured__loading"><div className="spinner" /></div>
          ) : featured.length > 0 ? (
            <div className="featured__grid">
              {featured.map((item) => <MenuCard key={item._id} item={item} />)}
            </div>
          ) : (
            <div className="featured__static">
              {[
                { icon: '🌯', name: 'Shawarma',            desc: 'Our perfected specialty — beef or chicken with house sauce', price: '$3.00' },
                { icon: '🔥', name: 'Tribes Treat',        desc: '3 meats of your choice — traditional or contemporary',       price: 'Varies' },
                { icon: '🍳', name: 'Full English Breakfast', desc: 'Power your potential — available for delivery',            price: '$10.00' },
                { icon: '🥩', name: 'T-Bone Steak',         desc: 'Grilled to your preferred doneness, served your way',       price: '$5.00' },
              ].map((item) => (
                <div key={item.name} className="featured__static-item">
                  <span>{item.icon}</span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          )}
          <div className="featured__cta">
            <Link to="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-preview">
        <div className="container">
          <p className="services-preview__eyebrow">What We Offer</p>
          <h2 className="section-title">More Than Just a Restaurant</h2>
          <p className="section-subtitle">From your plate to your event — we've got you covered</p>
          <div className="services-preview__grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="services-preview__card">
                <div className="services-preview__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-preview__cta">
            <Link to="/booking" className="btn-primary">Book a Conference / Event</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="contact-strip">
        <div className="container contact-strip__inner">
          <div className="contact-strip__text">
            <h2>Ready to Order or Visit?</h2>
            <p>Call us, WhatsApp, or walk in. We'd love to serve you.</p>
          </div>
          <div className="contact-strip__actions">
            <a href="tel:+263787902521" className="btn-primary">📞 +263 787 902 521</a>
            <a href="https://wa.me/263787902521" target="_blank" rel="noopener noreferrer" className="btn-outline">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}