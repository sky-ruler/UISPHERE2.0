import React from 'react';
import { useModal } from '../../context/ModalContext';

export const Footer: React.FC = () => {
  const { openModal } = useModal();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Club Identity & Socials */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <img src="/assets/gdg-brackets.svg" alt="Google Developer Group Brackets Logo" width="30" height="18" loading="lazy" />
              </div>
              <div>
                <h3 className="footer-brand-title">Tekno Krraft 2026</h3>
                <p className="footer-brand-sub">Google Developer Group @ SOA, ITER Chapter</p>
              </div>
            </div>
            <p className="footer-brand-desc">
              A 3-day technical event organized by students at ITER, focusing on hands-on cloud computing, AI development, mobile engineering, and open source.
            </p>
            <div className="footer-social-row">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GDG ITER on GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GDG ITER on LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.25 1.63 1.63 0 0 0 0-3.25z" />
                </svg>
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GDG ITER Discord Community">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About Fest</a></li>
              <li><a href="#events" className="footer-link">Arenas &amp; Events</a></li>
              <li><a href="#projects" className="footer-link">Hackathon Projects</a></li>
              <li><a href="#team" className="footer-link">Speakers &amp; Team</a></li>
              <li><a href="#schedule" className="footer-link">Event Schedule</a></li>
              <li><a href="#sponsors" className="footer-link">Sponsors &amp; Partners</a></li>
              <li><a href="#faqs" className="footer-link">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 3: Community & Guidelines */}
          <div className="footer-col">
            <h4 className="footer-heading">Community &amp; Rules</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link" onClick={() => openModal('conduct-modal')}>
                  Code of Conduct
                </button>
              </li>
              <li>
                <button type="button" className="footer-link" onClick={() => openModal('rules-modal')}>
                  Hackathon Rulebook
                </button>
              </li>
              <li>
                <a href="https://developers.google.com/community/gdg" target="_blank" rel="noopener noreferrer" className="footer-link">
                  GDG Guidelines
                  <svg className="footer-link-external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://soa.ac.in" target="_blank" rel="noopener noreferrer" className="footer-link">
                  SOA University Portal
                  <svg className="footer-link-external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Venue & Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Venue &amp; Contact</h4>
            <div className="footer-venue-block">
              <span className="venue-name">Siksha 'O' Anusandhan</span>
              <span>ITER Campus, Khandagiri Square, Bhubaneswar, Odisha 751030</span>
              <a href="https://maps.google.com/?q=ITER+Bhubaneswar" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                View on Google Maps
              </a>
              <a href="mailto:gdg@iter.ac.in" className="footer-contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                gdg@iter.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Independent Group Disclaimer */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            <span>&copy; 2026 Tekno Krraft &mdash; GDG ITER Chapter. Built by students with</span>
            <span className="footer-heart" aria-label="love">&hearts;</span>
          </p>
          <p className="footer-disclaimer">
            Google Developer Group is an independent group; activities and opinions expressed here are in no way linked to Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

