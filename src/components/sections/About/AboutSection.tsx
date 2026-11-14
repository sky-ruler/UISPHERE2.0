import React from 'react';
import { StatsGrid } from './StatsGrid';
import { FeaturePillars } from './FeaturePillars';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="events-container">
        <div className="section-header-block">
          <div className="section-overline font-mono-tag">
            <span>ABOUT THE GATHERING</span>
          </div>
          <h2 id="about-heading" className="section-heading">
            Why Be Here?
          </h2>
          <p className="section-subtext">
            Tekno Krraft is ITER’s annual technical gathering. Over three days, students, alumni working in tech, and invited engineers run hands-on labs, compete in algorithmic coding, and build working software together.
          </p>
        </div>

        {/* 4 Key Metrics Bento */}
        <StatsGrid />

        {/* 3 Feature Pillars */}
        <FeaturePillars />
      </div>
    </section>
  );
};

