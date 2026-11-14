import React, { useRef } from 'react';
import { BentoArenaItem } from '../../../types';
import { useModal } from '../../../context/ModalContext';

interface BentoCardProps {
  item: BentoArenaItem;
  isDimmed: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({ item, isDimmed }) => {
  const { openModal } = useModal();
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', '-999px');
    card.style.setProperty('--mouse-y', '-999px');
  };

  return (
    <article
      ref={cardRef}
      id={item.id}
      data-arena={item.category}
      className={`bento-card bento-card-span-${item.colSpan} ${isDimmed ? 'dimmed' : 'tab-micro-slide'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="bento-top-row">
          <span className={`bento-type-badge ${item.isFeatured ? 'featured' : ''} font-mono-tag`}>
            {item.category === 'hackathon' && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            )}
            {item.category === 'coding' && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            )}
            {item.category === 'labs' && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            )}
            {item.category === 'esports' && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h4m-2-2v4m10-2h.01m-3 0h.01" />
              </svg>
            )}
            {item.badgeTag}
          </span>
          {item.prizePool && <span className="bento-prize-badge">{item.prizePool}</span>}
          {item.category === 'labs' && (
            <span className="font-mono-tag" style={{ color: '#34A853', fontSize: '11px' }}>Verified Cert</span>
          )}
        </div>

        <h3 className="bento-title">{item.title}</h3>
        <p className="bento-description">{item.description}</p>

        {item.tags && (
          <div className="bento-tags-row">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="bento-pill-tag">{tag}</span>
            ))}
          </div>
        )}

        {item.trackModules && (
          <div className="track-modules-list">
            {item.trackModules.map((module, idx) => (
              <div key={idx} className="track-module-item">
                <strong>{module.title}</strong>
                <span>{module.subtitle}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bento-meta-row">
        <div className="bento-meta-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{item.metaTiming}</span>
        </div>
        <button
          type="button"
          className="bento-action-btn"
          onClick={() => openModal(item.modalTarget)}
        >
          <span>{item.actionText}</span>
          <span className="bento-arrow" aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </article>
  );
};

