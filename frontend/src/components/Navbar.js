import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logoIcon from '../assets/images/logo-icon.png';
import './Navbar.css';

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, isLoggedIn } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'navbar--solid' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={logoIcon} alt="VYTT" className="navbar__logo-mark" />
          <span className="navbar__logo-text">VYTT</span>
          <span className="navbar__logo-tag">Restaurant &amp; Butchery</span>
        </Link>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/booking">Book a Table</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <NavLink to={isLoggedIn ? '/account' : '/login'} className="navbar__account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span>{isLoggedIn ? user.name.split(' ')[0] : 'Login'}</span>
            </NavLink>
          </li>
          <li>
            <Link to="/cart" className="navbar__cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalItems > 0 && <span className="navbar__cart-badge">{totalItems}</span>}
              <span>Order</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
