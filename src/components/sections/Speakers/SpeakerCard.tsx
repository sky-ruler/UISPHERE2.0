import React from 'react';
import { Speaker } from '../../../types';

interface SpeakerCardProps {
  speaker: Speaker;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <article className="speaker-card">
      <div className="speaker-photo-wrap">
        <img
          src={speaker.avatarUrl}
          alt={`Portrait photo of ${speaker.name}`}
          className="speaker-photo"
          loading="lazy"
          width="300"
          height="300"
        />
      </div>
      <div className="speaker-details">
        <span className="speaker-track-pill">{speaker.trackTag}</span>
        <h3 className="speaker-name">{speaker.name}</h3>
        <p className="speaker-role">{speaker.role}</p>
        <span className="speaker-org">{speaker.organization}</span>
      </div>
      <a
        href={speaker.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="speaker-social-btn"
        aria-label={`${speaker.name} on LinkedIn`}
      >
        <span>Connect on LinkedIn</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </article>
  );
};

