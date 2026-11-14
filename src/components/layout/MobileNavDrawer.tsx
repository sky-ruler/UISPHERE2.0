import React, { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useModal } from '../../context/ModalContext';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const { openModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleRegisterClick = () => {
    onClose();
    openModal('register-modal');
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      id="mobile-drawer"
      className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
      aria-label="Mobile Navigation"
      aria-hidden={!isOpen}
    >
      <div className="mobile-drawer-header">
        <span className="mobile-drawer-label font-mono-tag">COLOR THEME</span>
        <button
          type="button"
          className="theme-toggle-btn mobile-theme-btn"
          id="mobile-theme-toggle-btn"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
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
          <span className="theme-mode-text font-mono-tag" id="mobile-theme-text">
            {theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE'}
          </span>
        </button>
      </div>

      <ul className="mobile-nav-links">
        <li>
          <a href="#about" className="mobile-nav-link" onClick={handleLinkClick}>
            About Fest <span className="link-arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a href="#events" className="mobile-nav-link" onClick={handleLinkClick}>
            Arenas &amp; Events <span className="link-arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="mobile-nav-link" onClick={handleLinkClick}>
            Hack Sprint Projects <span className="link-arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a href="#team" className="mobile-nav-link" onClick={handleLinkClick}>
            Speakers &amp; Team <span className="link-arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a href="#schedule" className="mobile-nav-link" onClick={handleLinkClick}>
            Event Schedule <span className="link-arrow">&rarr;</span>
          </a>
        </li>
        <li>
          <a href="#faqs" className="mobile-nav-link" onClick={handleLinkClick}>
            Frequently Asked Questions <span className="link-arrow">&rarr;</span>
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="btn-primary mobile-nav-cta"
        onClick={handleRegisterClick}
      >
        <span>Register Now</span>
        <span className="btn-arrow" aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
};

