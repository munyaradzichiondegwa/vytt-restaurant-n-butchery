import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/images/logo-icon.png';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="container notfound-page__inner">
        <img src={logoIcon} alt="VYTT" className="notfound-page__logo" />
        <h1>404</h1>
        <h2>This page wandered off the menu.</h2>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <div className="notfound-page__actions">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/menu" className="btn-outline">View Menu</Link>
        </div>
      </div>
    </div>
  );
}
