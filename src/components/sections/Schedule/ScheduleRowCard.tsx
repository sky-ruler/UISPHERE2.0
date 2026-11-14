import React from 'react';
import { ScheduleSession } from '../../../types';
import { generateAndDownloadIcs } from '../../../utils/icsGenerator';
import { useToast } from '../../../context/ToastContext';

interface ScheduleRowCardProps {
  session: ScheduleSession;
}

export const ScheduleRowCard: React.FC<ScheduleRowCardProps> = ({ session }) => {
  const { showToast } = useToast();

  const handleAddToCalendar = () => {
    generateAndDownloadIcs({
      title: session.icsTitle,
      time: session.icsTime,
      venue: session.icsVenue,
    });
    showToast(`Session "${session.icsTitle}" saved to calendar (.ics)`, 'success');
  };

  return (
    <article className="schedule-row-card tab-micro-slide" data-schedule-day={session.day}>
      <div className="schedule-time-col">
        <span className="schedule-time-badge font-mono-tag">{session.timeRange}</span>
        <span className="schedule-level-tag">{session.level}</span>
      </div>

      <div className="schedule-info-col">
        <h3 className="schedule-title">{session.title}</h3>
        <div className="schedule-speaker-row">
          <span className="schedule-speaker-name">{session.speakerName}</span>
          <span>&bull;</span>
          <span className="schedule-org font-mono-tag">{session.speakerRole}</span>
        </div>
        <div className="schedule-venue-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{session.venue}</span>
        </div>
      </div>

      <div className="schedule-actions-col">
        <button
          type="button"
          className="btn-schedule-action"
          onClick={handleAddToCalendar}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Add to Calendar</span>
        </button>
      </div>
    </article>
  );
};

