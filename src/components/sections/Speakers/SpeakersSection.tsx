import React from 'react';
import { speakersData } from '../../../data/speakers';
import { SpeakerCard } from './SpeakerCard';

export const SpeakersSection: React.FC = () => {
  return (
    <section id="team" className="speakers-section" aria-labelledby="speakers-heading">
      <span id="speakers" style={{ display: 'block', position: 'relative', top: '-72px', visibility: 'hidden' }} aria-hidden="true" />
      <div className="events-container">
        <div className="section-header-block">
          <div className="section-overline font-mono-tag">
            <span>GUEST MENTORS &amp; LEADERSHIP TEAM</span>
          </div>
          <h2 id="speakers-heading" className="section-heading">
            Learn Directly from Working Engineers
          </h2>
          <p className="section-subtext">
            Engineers, architects, and community mentors visiting campus to run workshops and review your code.
          </p>
        </div>

        <div className="speakers-grid">
          {speakersData.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

