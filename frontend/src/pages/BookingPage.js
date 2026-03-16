// frontend/src/pages/BookingPage.js
import React, { useState, useRef } from 'react';
import { createBooking } from '../api';
import { bookingHeroImg, conferenceImg, cateringImg, tableImg } from '../assets';
import './BookingPage.css';

const EVENT_TYPES = [
  'Conference', 'Workshop', 'Corporate Meeting', 'Seminar',
  'Wedding', 'Lobola Ceremony', 'Birthday Party', 'Company Luncheon',
  'Family Event', 'Other',
];

const VENUE_CARDS = [
  {
    id: 'conference',
    icon: '🏢',
    title: 'Conference Room',
    desc: 'Ideal for board meetings, workshops, training sessions, and seminars. Professional, fully equipped.',
    capacity: 'Up to 30 guests',
    assetImage: conferenceImg,
    eventTypes: ['Conference', 'Workshop', 'Corporate Meeting', 'Seminar'],
  },
  {
    id: 'catering',
    icon: '🎉',
    title: 'Outdoor Catering',
    desc: 'Weddings, lobola ceremonies, corporate luncheons, birthday parties. Customised menus and full spreads.',
    capacity: '50 – 500+ guests',
    assetImage: cateringImg,
    eventTypes: ['Wedding', 'Lobola Ceremony', 'Birthday Party', 'Company Luncheon', 'Family Event', 'Other'],
  },
  {
    id: 'table',
    icon: '🍽️',
    title: 'Table Reservation',
    desc: 'Reserve your dining table in advance. Great for family meals and special occasions.',
    capacity: '2 – 20 guests',
    assetImage: tableImg,
    eventTypes: ['Family Event', 'Other'],
  },
];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventType: '',
    date: '', guests: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleVenueClick = (card) => {
    if (card.eventTypes.length > 0) {
      setForm((f) => ({ ...f, eventType: card.eventTypes[0] }));
    }
    document.querySelector('.booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createBooking({ ...form, guests: Number(form.guests) });
      setSubmitted(true);
    } catch {
      setError('Could not submit booking. Please call us on +263 787 902 521.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="container booking-success">
          <div>🎉</div>
          <h2>Booking Request Sent!</h2>
          <p>We'll confirm your booking for <strong>{form.eventType}</strong> on <strong>{form.date}</strong>.</p>
          <p>We'll contact you on <strong>{form.phone}</strong> shortly.</p>
          <div className="booking-success__contacts">
            <a href="tel:+263787902521" className="btn-primary">📞 Call Us</a>
            <a href="https://wa.me/263787902521" target="_blank" rel="noopener noreferrer" className="btn-primary booking-wa">💬 WhatsApp</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">

      {/* ── HERO — background from assets/booking-hero.jpg ── */}
      <div
        className="booking-page__hero"
        style={bookingHeroImg ? { backgroundImage: `url(${bookingHeroImg})` } : {}}
      >
        {bookingHeroImg && <div className="booking-page__hero-overlay" />}
        <div className="container booking-page__hero-content">
          <h1>Book a Table or Event</h1>
          <p>Conference rooms, outdoor catering, dining reservations — we've got you covered.</p>
          {!bookingHeroImg && (
            <p className="booking-page__hero-hint">
              Add <code>booking-hero.jpg</code> to <code>src/assets/</code> for a background image
            </p>
          )}
        </div>
      </div>

      {/* ── ANIMATED VENUE CARDS — images from assets ── */}
      <section className="booking-page__venues">
        <div className="container">
          <h2>Choose Your Experience</h2>
          <p className="booking-venues__sub">Click a card to start your booking</p>
          <div className="booking-venues__grid">
            {VENUE_CARDS.map((card) => (
              <div
                key={card.id}
                className="booking-venue-card"
                onClick={() => handleVenueClick(card)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleVenueClick(card)}
              >
                {/* Image from assets — falls back to gradient + emoji */}
                <div
                  className="booking-venue-card__image"
                  style={card.assetImage ? { backgroundImage: `url(${card.assetImage})` } : {}}
                >
                  {!card.assetImage && (
                    <>
                      <span className="booking-venue-card__image-icon">{card.icon}</span>
                      <span className="booking-venue-card__image-hint">
                        Add {`venue-${card.id}.jpg`}<br />to src/assets/
                      </span>
                    </>
                  )}
                </div>
                <div className="booking-venue-card__body">
                  <div className="booking-venue-card__icon-sm">{card.icon}</div>
                  <h3 className="booking-venue-card__title">{card.title}</h3>
                  <p className="booking-venue-card__desc">{card.desc}</p>
                  <span className="booking-venue-card__capacity">👥 {card.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <div className="container booking-page__body">
        <div className="booking-layout">
          <div className="booking-info">
            <div className="booking-venue">
              {VENUE_CARDS.map((card) => (
                <div key={card.id} className="booking-venue__card">
                  <div className="booking-venue__icon">{card.icon}</div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="booking-contact">
              <h4>Need to talk first?</h4>
              <p>Call or WhatsApp us directly</p>
              <a href="tel:+263787902521">+263 787 902 521</a>
              <a href="tel:+263710735811">+263 710 735 811</a>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Your Booking Details</h3>
            {error && <div className="booking-error">{error}</div>}

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+263 7XX XXX XXX" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Event Type *</label>
                <select name="eventType" value={form.eventType} onChange={handleChange} required>
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Number of Guests *</label>
                <input type="number" name="guests" value={form.guests} onChange={handleChange} required min="1" placeholder="e.g. 20" />
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Date *</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required
                min={new Date().toISOString().split('T')[0]} />
            </div>

            <div className="form-group">
              <label>Additional Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                placeholder="Tell us about your event, menu preferences, special requirements..." />
            </div>

            <button type="submit" className="btn-primary booking-submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Booking Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}