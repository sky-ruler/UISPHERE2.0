import React, { useState } from 'react';
import { BaseModal } from './BaseModal';
import { useModal } from '../../context/ModalContext';
import { useToast } from '../../context/ToastContext';
import { RegistrationTrack } from '../../types';
import { registrationService, RegistrationRecord } from '../../services/registrationService';

export const RegistrationModal: React.FC = () => {
  const { closeModal } = useModal();
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [track, setTrack] = useState<RegistrationTrack>('hackathon');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedRecord, setConfirmedRecord] = useState<RegistrationRecord | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await registrationService.submitRegistration({
        name,
        email,
        college,
        track,
      });

      setConfirmedRecord(response.record);
      showToast(`Registration confirmed! Pass ID: ${response.record.id}`, 'success');
    } catch {
      showToast('Registration failed. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setConfirmedRecord(null);
      setName('');
      setEmail('');
      setCollege('');
      setTrack('hackathon');
    }, 300);
  };

  return (
    <BaseModal
      modalId="register-modal"
      title="Register for Tekno Krraft 2026"
      icon={
        <svg className="modal-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      }
      footer={
        <button
          type="button"
          className="btn-secondary"
          style={{ padding: '10px 20px' }}
          onClick={handleClose}
        >
          Close
        </button>
      }
    >
      {!confirmedRecord ? (
        <div id="register-form-container">
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Registration is <strong>100% free</strong> for verified students, research scholars, and builders courtesy of GDG ITER Chapter and our sponsors.
          </p>
          <form id="fest-registration-form" className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="reg-name" className="form-label">Full Name</label>
              <input
                type="text"
                id="reg-name"
                className="form-input"
                placeholder="e.g. Priyanshu Panda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="reg-email" className="form-label">College / Institutional Email</label>
              <input
                type="email"
                id="reg-email"
                className="form-input"
                placeholder="student@iter.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="reg-college" className="form-label">College / University Name</label>
              <input
                type="text"
                id="reg-college"
                className="form-input"
                placeholder="Institute of Technical Education &amp; Research"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="reg-track" className="form-label">Primary Interest / Event Arena</label>
              <select
                id="reg-track"
                className="form-select"
                value={track}
                onChange={(e) => setTrack(e.target.value as RegistrationTrack)}
                required
                disabled={isSubmitting}
              >
                <option value="hackathon">24-Hour AI/ML Hack Sprint (Oct 17)</option>
                <option value="gen-ai">Generative AI &amp; Multimodal Agents Lab (Oct 16)</option>
                <option value="web-cloud">Full-Stack Next.js &amp; Cloud Run Lab (Oct 16)</option>
                <option value="mobile-flutter">Mobile Apps with Flutter 3 &amp; Firebase (Oct 17)</option>
                <option value="coding-contest">KrraftCode 2026 Competitive Coding (Oct 18)</option>
                <option value="gaming">Tekno Gaming Night &amp; LAN Valorant (Oct 17)</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ marginTop: '8px' }}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Reserving Your Spot...' : 'Complete Free Registration'}</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </button>
          </form>
        </div>
      ) : (
        <div id="register-success-msg" className="form-success-banner" style={{ display: 'block' }}>
          <strong style={{ display: 'block', fontSize: '16px', marginBottom: '6px', color: 'var(--text-primary)' }}>
            🎉 Registration Confirmed!
          </strong>
          <div style={{
            background: 'var(--bg-surface-2)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            padding: '12px 14px',
            margin: '12px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'block' }}>ATTENDEE PASS CODE</span>
              <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--accent)' }}>
                #{confirmedRecord.id}
              </strong>
            </div>
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              background: 'rgba(52, 168, 83, 0.15)',
              color: '#34A853',
              padding: '3px 8px',
              borderRadius: '4px'
            }}>
              CONFIRMED
            </span>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Welcome, <strong>{confirmedRecord.name}</strong>! Your entry pass is stored and confirmed. A confirmation copy will be emailed to <strong>{confirmedRecord.email}</strong> with workshop setup guides 48 hours prior to Day 1.
          </span>
        </div>
      )}
    </BaseModal>
  );
};
