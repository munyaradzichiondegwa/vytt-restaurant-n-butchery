import React, { useState, useEffect } from 'react';
import './BookingPage.css';

const VENUE_OPTIONS = [
  {
    title: 'Conference Room',
    description: 'Ideal for board meetings, workshops and training. Projector, Wi‑Fi, AC and seating up to 30 guests.',
    image: null, // add your photo later
    eventType: 'Conference',
  },
  {
    title: 'Outdoor Catering',
    description: 'Customised menus for weddings, lobola ceremonies, birthday parties and corporate events.',
    image: null,
    eventType: 'Wedding',
  },
  {
    title: 'Table Reservation',
    description: 'Reserve a table in our restaurant — indoor or outdoor seating for any occasion.',
    image: null,
    eventType: 'Family Event',
  },
];

const EVENT_TYPES = [
  'Conference', 'Workshop', 'Corporate Meeting', 'Seminar', 'Wedding',
  'Lobola Ceremony', 'Birthday Party', 'Company Luncheon', 'Family Event', 'Other',
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', eventType: '', date: '', guests: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVenueClick = (venue) => {
    setSelectedVenue(venue.title);
    setFormData((prev) => ({ ...prev, eventType: venue.eventType }));
    // Scroll to form
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally POST to /api/bookings
    setSubmitted(true);
  };

  return (
    <div className="booking-page">
      <section className="booking-page__hero">
        <div className="booking-page__hero-bg" />
        <h1>Book Your Event</h1>
        <p>From conferences to family gatherings — we provide the perfect setting.</p>
      </section>

      <div className="venue-cards">
        {VENUE_OPTIONS.map((venue, idx) => (
          <div
            key={venue.title}
            className={`venue-card ${selectedVenue === venue.title ? 'selected' : ''}`}
            style={{ animationDelay: `${idx * 0.15}s` }}
            onClick={() => handleVenueClick(venue)}
          >
            <div className="venue-card__img">
              {venue.image ? (
                <img src={venue.image} alt={venue.title} />
              ) : (
                <div className="venue-card__placeholder">
                  <span>📷</span>
                  <button onClick={(e) => { e.stopPropagation(); alert('Upload your venue photo here'); }}>Add photo</button>
                </div>
              )}
            </div>
            <h3>{venue.title}</h3>
            <p>{venue.description}</p>
          </div>
        ))}
      </div>

      <div className="booking-form" id="booking-form">
        <h2>Make a Reservation</h2>
        {submitted ? (
          <div className="success-message">Thank you! We'll get back to you shortly.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required onChange={handleChange} />

            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" name="phone" required onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} />

            <label htmlFor="eventType">Event Type *</label>
            <select id="eventType" name="eventType" required value={formData.eventType} onChange={handleChange}>
              <option value="">Select...</option>
              {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            <label htmlFor="date">Event Date *</label>
            <input type="date" id="date" name="date" required onChange={handleChange} />

            <label htmlFor="guests">Number of Guests *</label>
            <input type="number" id="guests" name="guests" min="1" required onChange={handleChange} />

            <label htmlFor="message">Additional Message</label>
            <textarea id="message" name="message" rows="4" onChange={handleChange} />

            <button type="submit" className="btn-primary">Submit Booking</button>
          </form>
        )}
      </div>
    </div>
  );
}