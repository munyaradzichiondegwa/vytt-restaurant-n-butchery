import React, { createContext, useContext, useState } from 'react';
import { loginUser, registerUser, updateProfile as apiUpdateProfile } from '../api';

const AuthContext = createContext();

const STORAGE_KEY = 'vytt_auth_v1';

const loadInitialUser = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object' && parsed._id) return parsed;
    }
  } catch {
    // corrupt/unavailable storage — fall back to logged out
  }
  return null;
};

const persist = (user) => {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage unavailable (e.g. private browsing) — session still works for this tab
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(loadInitialUser);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const handleAuthResponse = (data) => {
    if (!data || typeof data !== 'object' || !data._id) {
      throw new Error('Unexpected response from server');
    }
    setUser(data);
    persist(data);
    return data;
  };

  const login = async (email, password) => {
    setAuthLoading(true);
    setAuthError('');
    try {
      const { data } = await loginUser({ email, password });
      return handleAuthResponse(data);
    } catch (err) {
      const message = err.response?.data?.message || 'Could not log in. Please try again.';
      setAuthError(message);
      throw new Error(message);
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (payload) => {
    setAuthLoading(true);
    setAuthError('');
    try {
      const { data } = await registerUser(payload);
      return handleAuthResponse(data);
    } catch (err) {
      const message = err.response?.data?.message || 'Could not create your account. Please try again.';
      setAuthError(message);
      throw new Error(message);
    } finally {
      setAuthLoading(false);
    }
  };

  const updateProfile = async (payload) => {
    setAuthLoading(true);
    setAuthError('');
    try {
      const { data } = await apiUpdateProfile(payload);
      return handleAuthResponse(data);
    } catch (err) {
      const message = err.response?.data?.message || 'Could not update your details.';
      setAuthError(message);
      throw new Error(message);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    persist(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, authError, authLoading, login, register, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);