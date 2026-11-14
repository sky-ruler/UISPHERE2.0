import React, { useState } from 'react';
import { useTilt3D } from '../../../hooks/useTilt3D';
import { CountdownTimer } from './CountdownTimer';
import { generateAndDownloadPassSvg } from '../../../utils/passGenerator';
import { useToast } from '../../../context/ToastContext';

export const ClubMemberPass: React.FC = () => {
  const { wrapperRef, cardRef, emblemRef, isIdle } = useTilt3D(15);
  const { showToast } = useToast();

  const [attendeeName, setAttendeeName] = useState('STUDENT BUILDER');
  const [tier, setTier] = useState('STUDENT DEVELOPER PASS');
  const [isCustomizing, setIsCustomizing] = useState(false);

  const handleDownload = () => {
    generateAndDownloadPassSvg({
      name: attendeeName,
      tier,
      passId: 'GDG-ITER-2026',
    });
    showToast(`Official badge downloaded for ${attendeeName}!`, 'success');
  };

  return (
    <div className="hero-right" id="club-pass-wrapper" ref={wrapperRef}>
      {/* Studio Rim Lighting Aura */}
      <div className="card-ambient-aura" aria-hidden="true" />

      <aside
        ref={cardRef}
        className={`club-member-pass gdg-3d-card ${isIdle ? 'is-idle' : ''}`}
        id="club-member-pass"
        aria-label="Official Club Member Pass"
      >
        {/* Subtle Diagonal Light Glare */}
        <div className="pass-glare" aria-hidden="true" />

        {/* Thin Glowing Inner Frame at translateZ(25px) */}
        <div className="card-inner-frame" aria-hidden="true" />

        {/* Pass Brand Row */}
        <div className="pass-brand-row">
          <div className="pass-club-identity">
            <div className="pass-logo-mini">
              <img src={`${import.meta.env.BASE_URL}assets/gdg-brackets.svg`} alt="Google Developer Group Brackets Logo" width="22" height="13" />
            </div>
            <div>
              <h2 className="pass-club-name">GDG @ SOA ITER</h2>
              <span className="pass-club-sub">Google Developer Group</span>
            </div>
          </div>
          <div className="pass-status-pill">
            <span className="pass-active-dot" aria-hidden="true" />
            <span>ACTIVE</span>
          </div>
        </div>

        {/* Pass Member Meta Strip */}
        <div className="pass-meta-strip">
          <span className="pass-meta-tier">{tier}</span>
          <span className="pass-meta-batch">BATCH 2026&ndash;27</span>
        </div>

        {/* Delegate Name Overprint */}
        <div style={{ padding: '0 20px', marginTop: '6px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            DELEGATE:
          </span>
          <div style={{
            fontSize: '15px',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {attendeeName}
          </div>
        </div>

        {/* Prominent Center Floating 3D GDG Logo Showcase (translateZ(65px) Parallax) */}
        <div className="pass-emblem-showcase" aria-label="Official GDG ITER Emblem">
          <div className="pass-floating-emblem" ref={emblemRef}>
            <svg
              className="pass-gdg-logo"
              viewBox="0 0 320 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Google Developer Group SOA ITER Official Logo"
            >
              {/* Centered GDG Emblem */}
              <g transform="translate(100, 8)">
                <rect x="36.5" y="6" width="38" height="15" rx="7.5" transform="rotate(45 36.5 6)" fill="#EA4335" />
                <rect x="9.5" y="47.5" width="38" height="15" rx="7.5" transform="rotate(-45 9.5 47.5)" fill="#4285F4" />
                <rect x="56.5" y="33" width="38" height="15" rx="7.5" transform="rotate(-45 56.5 33)" fill="#34A853" />
                <rect x="83.5" y="20" width="38" height="15" rx="7.5" transform="rotate(45 83.5 20)" fill="#FBBC05" />
              </g>

              {/* Typography Stacked & Centered */}
              <text x="160" y="112" textAnchor="middle" fontFamily="'Space Grotesk', -apple-system, sans-serif" fontSize="24" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">
                Google Developer Group
              </text>
              <text x="160" y="136" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="11" fontWeight="600" fill="#4285F4" letterSpacing="0.08em">
                SOA ITER CHAPTER &bull; BHUBANESWAR
              </text>
              <text x="160" y="156" textAnchor="middle" fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif" fontSize="11" fontWeight="500" fill="var(--text-secondary)" letterSpacing="0.02em">
                Official Student Community &bull; Batch 2026&ndash;27
              </text>
            </svg>
          </div>
        </div>

        {/* Live Countdown Grid */}
        <CountdownTimer />

        {/* 6px Height Progress Bar */}
        <div className="highlight-divider-bar" aria-hidden="true">
          <div className="highlight-progress-fill" />
        </div>

        {/* Key Telemetry Metrics (2x2 Grid) */}
        <div className="telemetry-grid">
          <div className="telemetry-item">
            <span className="telemetry-value">₹2,50,000+</span>
            <span className="telemetry-label">Prize Pool</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-value">24 Hours</span>
            <span className="telemetry-label">Hack Sprint</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-value">30+</span>
            <span className="telemetry-label">Hands-On Labs</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-value">1,500+</span>
            <span className="telemetry-label">Student Builders</span>
          </div>
        </div>

        {/* Pass Footer Strip with Personalization / Download Triggers */}
        <div className="highlight-footer-note" style={{ flexWrap: 'wrap', gap: '8px' }}>
          <span className="highlight-host-tag font-mono-tag" style={{ fontSize: '11px' }}>
            PASS ID: <span>#GDG-ITER-2026</span>
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '4px 10px', fontSize: '11px', height: '28px' }}
              onClick={(e) => {
                e.stopPropagation();
                setIsCustomizing(!isCustomizing);
              }}
            >
              {isCustomizing ? 'Done' : 'Customize'}
            </button>
            <button
              type="button"
              className="btn-primary"
              style={{ padding: '4px 10px', fontSize: '11px', height: '28px' }}
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
              title="Download Badge as SVG"
            >
              <span>Download Pass</span>
              <span aria-hidden="true">&darr;</span>
            </button>
          </div>
        </div>

        {/* Inline Customizer Drawer */}
        {isCustomizing && (
          <div
            style={{
              padding: '12px 16px',
              background: 'var(--bg-surface-2)',
              borderTop: '1px solid var(--border-subtle)',
              borderRadius: '0 0 12px 12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                className="form-input"
                style={{ height: '36px', fontSize: '12px' }}
                placeholder="Enter Your Name"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
              />
              <select
                className="form-select"
                style={{ height: '36px', fontSize: '12px', width: 'auto' }}
                value={tier}
                onChange={(e) => setTier(e.target.value)}
              >
                <option value="STUDENT DEVELOPER PASS">Developer Pass</option>
                <option value="AI & CLOUD SPRINT BUILDER">Hackathon Pass</option>
                <option value="KRRAFTCODE 2026 FINALIST">Coding Finalist</option>
                <option value="SPECIALIZATION LABS FELLOW">Workshop Fellow</option>
              </select>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
