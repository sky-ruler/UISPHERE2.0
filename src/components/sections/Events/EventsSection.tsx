import React, { useState } from 'react';
import { EventCategory } from '../../../types';
import { bentoArenasData } from '../../../data/events';
import { BentoCard } from './BentoCard';
import { useSlidingPill } from '../../../hooks/useSlidingPill';
import { useToast } from '../../../context/ToastContext';

const categories: { id: EventCategory; label: string }[] = [
  { id: 'all', label: 'All Arenas' },
  { id: 'hackathon', label: 'Hackathon' },
  { id: 'coding', label: 'Competitive Coding' },
  { id: 'labs', label: 'Technical Labs' },
  { id: 'esports', label: 'Esports' },
];

export const EventsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all');
  const { containerRef, style } = useSlidingPill<HTMLDivElement, HTMLDivElement>(selectedCategory);
  const { showToast } = useToast();

  const handleCategorySelect = (cat: EventCategory, label: string) => {
    setSelectedCategory(cat);
    showToast(`Filtered to ${label} arena`, 'info');
  };

  return (
    <section id="events" className="events-section" aria-labelledby="events-heading">
      <div className="events-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-overline font-mono-tag">
            <span>FESTIVAL HIGHLIGHTS &amp; EVENTS</span>
          </div>
          <h2 id="events-heading" className="section-heading">
            Four Signature Arenas
          </h2>
          <p className="section-subtext">
            Hands-on cloud labs, algorithmic problem solving, a 24-hour prototype sprint, and community esports at ITER Campus.
          </p>
        </div>

        {/* Interactive Category Tabs with Sliding Indicator */}
        <div
          ref={containerRef}
          className="events-tabs-wrapper"
          role="tablist"
          aria-label="Events Category Filter"
        >
          <div
            className="sliding-pill-indicator"
            id="events-pill-indicator"
            style={style}
            aria-hidden="true"
          />
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`events-tab ${selectedCategory === cat.id ? 'active' : ''}`}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => handleCategorySelect(cat.id, cat.label)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="bento-grid" id="events-bento-grid">
          {bentoArenasData.map((item) => (
            <BentoCard
              key={item.id}
              item={item}
              isDimmed={selectedCategory !== 'all' && item.category !== selectedCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

