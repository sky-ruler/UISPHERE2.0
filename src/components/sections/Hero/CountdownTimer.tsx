import React from 'react';
import { useCountdown } from '../../../hooks/useCountdown';

export const CountdownTimer: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown('2026-10-16T09:00:00+05:30');

  return (
    <div className="countdown-section">
      <div className="countdown-label-row">
        <span className="countdown-label">Event Launch Countdown</span>
        <span className="font-mono-tag" style={{ color: 'var(--accent)', fontSize: '11px' }}>
          Starts 09:00 AM IST
        </span>
      </div>
      <div className="countdown-grid" role="timer" aria-live="polite">
        <div className="countdown-tile">
          <span className="countdown-value">{days}</span>
          <span className="countdown-unit">Days</span>
        </div>
        <div className="countdown-tile">
          <span className="countdown-value">{hours}</span>
          <span className="countdown-unit">Hours</span>
        </div>
        <div className="countdown-tile">
          <span className="countdown-value">{minutes}</span>
          <span className="countdown-unit">Mins</span>
        </div>
        <div className="countdown-tile">
          <span className="countdown-value">{seconds}</span>
          <span className="countdown-unit">Secs</span>
        </div>
      </div>
    </div>
  );
};

