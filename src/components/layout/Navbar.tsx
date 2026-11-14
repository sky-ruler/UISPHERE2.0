import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useModal } from '../../context/ModalContext';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { MobileNavDrawer } from './MobileNavDrawer';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { openModal } = useModal();
  const { isScrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} role="banner">
        <div className="nav-container">
          {/* Brand Logo & Text */}
          <a href="#hero" className="nav-brand" aria-label="Tekno Krraft 2026 GDG ITER Home">
            <div className="nav-logo-box">
              <img src={`${import.meta.env.BASE_URL}assets/gdg-brackets.svg`} alt="Google Developer Group Brackets Logo" width="28" height="17" />
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-title">Tekno Krraft</span>
              <span className="nav-brand-subtitle">GDG ITER Chapter</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#events" className="nav-link">Events</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#team" className="nav-link">Team</a></li>
              <li><a href="#faqs" className="nav-link">FAQs</a></li>
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button
              type="button"
              className="theme-toggle-btn"
              id="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              onClick={toggleTheme}
            >
              <svg className="theme-icon icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <svg className="theme-icon icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            <button
              type="button"
              className="btn-primary"
              onClick={() => openModal('register-modal')}
            >
              <span>Register Now</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="nav-hamburger"
              id="hamburger-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="hamburger-icon" aria-hidden="true">
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileNavDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

