import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AuthPages.css';

export default function RegisterPage() {
  const { register, authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/account';

  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    try {
      await register({ name: form.name, email: form.email, phone: form.phone, password: form.password });
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="container auth-page__inner">
        <div className="auth-card">
          <h1>Create Your Account</h1>
          <p className="auth-card__subtitle">
            Save your details for faster checkout next time, and keep track of your orders.
          </p>

          {location.state?.from === '/checkout' && (
            <p className="auth-card__hint">You'll be returned to checkout after signing up.</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required autoFocus />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone (optional)</label>
              <input type="tel" name="phone" placeholder="+263 7XX XXX XXX" value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={6} />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirm" value={form.confirm} onChange={handleChange} required minLength={6} />
              </div>
            </div>

            {error && <p className="auth-card__error">{error}</p>}

            <button type="submit" className="btn-primary auth-card__submit" disabled={authLoading}>
              {authLoading ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <p className="auth-card__switch">
            Already have an account?{' '}
            <Link to="/login" state={location.state}>Log in</Link>
          </p>
          <p className="auth-card__switch">
            <Link to={redirectTo}>Continue as guest →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
