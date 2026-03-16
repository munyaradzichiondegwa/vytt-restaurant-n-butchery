// frontend/src/pages/ContactPage.js
import React from 'react';
import { contactHeroImg } from '../assets';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">

      {/* ── HERO — background from assets/contact-hero.jpg ── */}
      <div
        className="contact-page__hero"
        style={contactHeroImg ? { backgroundImage: `url(${contactHeroImg})` } : {}}
      >
        {contactHeroImg && <div className="contact-page__hero-overlay" />}
        <div className="container contact-page__hero-content">
          <h1>Contact Us</h1>
          <p>We're always ready to serve you.</p>
          {!contactHeroImg && (
            <p className="contact-page__hero-hint">Add <code>contact-hero.jpg</code> to <code>src/assets/</code></p>
          )}
        </div>
      </div>

      <div className="container contact-page__body">
        <div className="contact-grid">

          {/* INFO CARDS */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card__icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>2465 Gutu Junction<br />Gutu, Zimbabwe</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon">📞</div>
              <div>
                <h3>Phone / WhatsApp</h3>
                <a href="tel:+263787902521">+263 787 902 521</a>
                <a href="tel:+263710735811">+263 710 735 811</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon">🕐</div>
              <div>
                <h3>Opening Hours</h3>
                <p>Monday – Sunday</p>
                <p className="contact-hours-time">7:00 AM – 10:00 PM</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card__icon">🛵</div>
              <div>
                <h3>Delivery</h3>
                <p>We deliver! Call or WhatsApp to place your delivery order.</p>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="contact-actions">
            <h2>Get In Touch</h2>
            <p>For reservations, catering, butchery orders, or any questions — reach us here:</p>

            <div className="contact-actions__btns">
              <a href="tel:+263787902521" className="contact-btn contact-btn--call">
                <span>📞</span>
                <div>
                  <strong>Call Us</strong>
                  <small>+263 787 902 521</small>
                </div>
              </a>
              <a href="https://wa.me/263787902521" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn--whatsapp">
                <span>💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <small>Chat with us anytime</small>
                </div>
              </a>
              <a href="tel:+263710735811" className="contact-btn contact-btn--call2">
                <span>📱</span>
                <div>
                  <strong>Alternative Line</strong>
                  <small>+263 710 735 811</small>
                </div>
              </a>
            </div>

            <div className="contact-map">
              <h3>Find Us</h3>
              <div className="contact-map__placeholder">
                <span>🗺️</span>
                <p>2465 Gutu Junction, Gutu, Zimbabwe</p>
                <a
                  href="https://maps.google.com/?q=Gutu+Junction,+Gutu,+Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}