import React from 'react';
import { featurePillarsData } from '../../../data/pillars';

export const FeaturePillars: React.FC = () => {
  return (
    <div className="pillars-grid">
      {featurePillarsData.map((pillar, idx) => (
        <div key={idx} className="pillar-card">
          <div className="pillar-icon-box" aria-hidden="true" style={{ color: pillar.color }}>
            {pillar.icon === 'code' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            )}
            {pillar.icon === 'zap' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            )}
            {pillar.icon === 'users' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            )}
          </div>
          <h3 className="pillar-title">{pillar.title}</h3>
          <p className="pillar-text">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
};

