import React from 'react';
import { sponsorsData } from '../../../data/sponsors';

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="sponsors-section" aria-labelledby="sponsors-heading">
      <div className="events-container">
        <div className="section-header-block">
          <div className="section-overline font-mono-tag">
            <span>COMMUNITY &amp; INDUSTRY PARTNERS</span>
          </div>
          <h2 id="sponsors-heading" className="section-heading">
            Supported by Industry Partners
          </h2>
          <p className="section-subtext">
            Thank you to the engineering teams providing cloud credits, IDE licenses, prizes, and venue support.
          </p>
        </div>

        <div className="sponsors-container-block">
          <div className="sponsors-grid-partners">
            {sponsorsData.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-card-item"
              >
                <span className="sponsor-badge-tag">{sponsor.tier}</span>
                <span className="sponsor-name">{sponsor.name}</span>
              </a>
            ))}
          </div>

          {/* Sponsor CTA Banner */}
          <div className="sponsor-cta-banner">
            <div>
              <h3 className="sponsor-cta-title">Want to Support Student Developers?</h3>
              <p className="sponsor-cta-desc">Connect your brand with 1,500+ student developers and makers right here at ITER Campus.</p>
            </div>
            <a href="mailto:gdg@iter.ac.in" className="btn-primary" style={{ flexShrink: 0 }}>
              <span>Become a Sponsor</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

