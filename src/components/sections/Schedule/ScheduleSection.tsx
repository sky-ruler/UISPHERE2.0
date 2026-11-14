import React, { useState } from 'react';
import { ScheduleDay } from '../../../types';
import { scheduleSessionsData } from '../../../data/schedule';
import { ScheduleRowCard } from './ScheduleRowCard';
import { useSlidingPill } from '../../../hooks/useSlidingPill';
import { useToast } from '../../../context/ToastContext';

const daysConfig: { day: ScheduleDay; title: string; subtitle: string }[] = [
  { day: 1, title: 'Day 1', subtitle: 'Cloud, AI & Keynotes' },
  { day: 2, title: 'Day 2', subtitle: 'AI Hack Sprint & Mobile' },
  { day: 3, title: 'Day 3', subtitle: 'Coding Finals & Showcase' },
];

export const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<ScheduleDay>(1);
  const { containerRef, style } = useSlidingPill<HTMLDivElement, HTMLDivElement>(activeDay);
  const { showToast } = useToast();

  const handleDaySelect = (day: ScheduleDay) => {
    setActiveDay(day);
    showToast(`Showing Day ${day} Technical Schedule`, 'info');
  };

  const currentSessions = scheduleSessionsData.filter((s) => s.day === activeDay);

  return (
    <section id="schedule" className="schedule-section" aria-labelledby="schedule-heading">
      <div className="events-container">
        <div className="section-header-block">
          <div className="section-overline font-mono-tag">
            <span>3-DAY INTERACTIVE SCHEDULE</span>
          </div>
          <h2 id="schedule-heading" className="section-heading">
            Plan Your Schedule
          </h2>
          <p className="section-subtext">
            Filter by day, locate your lab or auditorium, and export sessions directly to your personal calendar.
          </p>
        </div>

        {/* Day Selector Tabs with Sliding Pill Indicator */}
        <div
          ref={containerRef}
          className="schedule-day-tabs"
          role="tablist"
          aria-label="Event Days"
        >
          <div
            className="schedule-pill-indicator"
            id="schedule-pill-indicator"
            style={style}
            aria-hidden="true"
          />
          {daysConfig.map((item) => (
            <button
              key={item.day}
              type="button"
              className={`schedule-day-btn ${activeDay === item.day ? 'active' : ''}`}
              role="tab"
              aria-selected={activeDay === item.day}
              onClick={() => handleDaySelect(item.day)}
            >
              <strong>{item.title}</strong> &middot; {item.subtitle}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="schedule-list" id="schedule-container">
          {currentSessions.map((session) => (
            <ScheduleRowCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
};

