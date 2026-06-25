import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AuthPages.css';

export default function LoginPage() {
  const { login, authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/account';

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(form.email, form.password);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="container auth-page__inner">
        <div className="auth-card">
          <h1>Welcome Back</h1>
          <p className="auth-card__subtitle">
            Log in for faster checkout and to see your order history.
          </p>

          {location.state?.from === '/checkout' && (
            <p className="auth-card__hint">You'll be returned to checkout after logging in.</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required autoFocus />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} required />
            </div>

            {error && <p className="auth-card__error">{error}</p>}

            <button type="submit" className="btn-primary auth-card__submit" disabled={authLoading}>
              {authLoading ? 'Logging in…' : 'Log In'}
            </button>
          </form>

          <p className="auth-card__switch">
            New here?{' '}
            <Link to="/register" state={location.state}>Create an account</Link>
          </p>
          <p className="auth-card__switch">
            <Link to={redirectTo}>Continue as guest →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
