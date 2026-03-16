// frontend/src/pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { aboutHeroImg, aboutStoryImg } from '../assets';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ── HERO — image from assets/about-hero.jpg ── */}
      <div
        className="about-page__hero"
        style={aboutHeroImg ? { backgroundImage: `url(${aboutHeroImg})` } : {}}
      >
        {aboutHeroImg && <div className="about-page__hero-overlay" />}
        <div className="container about-page__hero-content">
          <h1>About VYTT</h1>
          <p>Where tradition meets flavour, every single day.</p>
          {!aboutHeroImg && (
            <p className="about-page__hero-hint">Add <code>about-hero.jpg</code> to <code>src/assets/</code></p>
          )}
        </div>
      </div>

      <div className="container about-page__body">

        {/* ── STORY — story image from assets/about-story.jpg ── */}
        <section className="about-story">
          <div className="about-story__text">
            <p className="about-story__eyebrow">Our Story</p>
            <h2>More Than a Restaurant</h2>
            <p>
              VYTT Restaurant and Butchery was born from a simple belief: that great food, cold beer,
              and good times are what bring people together. Located at 2465 Gutu Junction in the heart
              of Gutu, Zimbabwe, we serve our community with pride.
            </p>
            <p>
              From the thick, comforting sadza of a Monday special to our perfected shawarma and
              freshly grilled meats, every dish is made with care using farm-sourced, fresh ingredients.
              Our butchery ensures you take the same quality home with you.
            </p>
            <p>
              Whether you're joining us for a casual midweek meal, a Friday night with friends, a
              weekend feast, or a corporate conference — VYTT is your home away from home.
            </p>
          </div>

          {/* Story image panel — from assets/about-story.jpg */}
          <div
            className="about-story__visual"
            style={aboutStoryImg ? { backgroundImage: `url(${aboutStoryImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
          >
            {!aboutStoryImg && (
              <>
                <div className="about-story__card about-story__card--teal">
                  <span>🌽</span>
                  <h3>Traditional Zimbabwean Cuisine</h3>
                  <p>Sadza, usavi, madora — authentic flavours, lovingly prepared.</p>
                </div>
                <div className="about-story__card about-story__card--sand">
                  <span>🥩</span>
                  <h3>Farm-Fresh Butchery</h3>
                  <p>Beef, pork, goat, fish and eggs sourced fresh, every day.</p>
                </div>
                <div className="about-story__card about-story__card--dark">
                  <span>🎉</span>
                  <h3>Events &amp; Conferences</h3>
                  <p>Professional venue for business meetings, weddings, and celebrations.</p>
                </div>
                <p className="about-story__img-hint">Add <code>about-story.jpg</code> to <code>src/assets/</code> to replace these cards</p>
              </>
            )}
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="about-values">
          <h2>Our Values</h2>
          <div className="about-values__grid">
            {[
              { icon: '🌿', title: 'Freshness',     desc: 'Everything on your plate is sourced fresh. We work closely with local farms to ensure quality.' },
              { icon: '❤️', title: 'Community',     desc: 'We are Gutu. We serve our neighbours, support local suppliers, and give back to our town.' },
              { icon: '👨‍🍳', title: 'Craftsmanship', desc: 'Every dish is prepared with skill and pride — from a simple sadza to our signature shawarma.' },
              { icon: '😊', title: 'Hospitality',   desc: 'You are always welcome at VYTT. Warm service and a genuine smile with every visit.' },
            ].map((v) => (
              <div key={v.title} className="about-values__card">
                <span>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="about-cta">
          <h2>Come Visit Us</h2>
          <p>2465 Gutu Junction, Gutu, Zimbabwe — open daily, 7AM to 10PM.</p>
          <div className="about-cta__btns">
            <Link to="/menu"    className="btn-primary">Explore Menu</Link>
            <Link to="/booking" className="btn-primary about-cta__book">Book a Table</Link>
          </div>
        </section>
      </div>
    </div>
  );
}