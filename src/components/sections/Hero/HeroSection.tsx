import React from 'react';
import { useModal } from '../../../context/ModalContext';
import { ClubMemberPass } from './ClubMemberPass';

export const HeroSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <main id="hero" className="hero-section" role="main">
      {/* Soft Ambient Radial Wash in Google Blue */}
      <div className="hero-radial-wash" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-left">
            <div className="hero-badge-group">
              <div className="hero-kicker font-mono-tag">
                <span className="hero-pulse-dot" aria-hidden="true" />
                <span>&lt; GOOGLE DEVELOPER GROUP /&gt;</span>
              </div>
              <div className="hero-date-pill font-mono-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>October 16 &ndash; 18, 2026</span>
              </div>
            </div>

            {/* Masked Line-by-Line Slide-Up Reveal */}
            <h1 className="hero-title">
              <span className="mask-line"><span className="reveal-line">Tekno Krraft</span></span>
              <span className="mask-line"><span className="reveal-line hero-title-accent">2026</span></span>
            </h1>

            <p className="hero-subtext">
              Three days of code, cloud systems, and AI hacks &mdash; built and run by students at GDG ITER Chapter.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-primary"
                onClick={() => openModal('register-modal')}
              >
                <span>Register for Free</span>
                <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </button>
              <a href="#events" className="btn-secondary">
                <span>Explore Events</span>
                <span className="btn-arrow" aria-hidden="true">&darr;</span>
              </a>
            </div>

            <div className="hero-venue-row">
              <svg className="hero-venue-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>ITER Campus, Siksha 'O' Anusandhan, Bhubaneswar</span>
            </div>
          </div>

          {/* Right Column (3D Pass) */}
          <ClubMemberPass />
        </div>
      </div>
    </main>
  );
};

