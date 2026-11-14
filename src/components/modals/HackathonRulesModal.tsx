import React from 'react';
import { BaseModal } from './BaseModal';
import { useModal } from '../../context/ModalContext';

export const HackathonRulesModal: React.FC = () => {
  const { closeModal } = useModal();

  return (
    <BaseModal
      modalId="rules-modal"
      title="Hack Sprint Rulebook"
      icon={
        <svg className="modal-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      }
      footer={
        <button
          type="button"
          className="btn-primary"
          style={{ padding: '10px 20px' }}
          onClick={closeModal}
        >
          Understood
        </button>
      }
    >
      <p>
        <strong>24-Hour AI &amp; Cloud Hack Sprint Rules:</strong>
      </p>
      <ul className="modal-list" style={{ marginTop: '12px' }}>
        <li><strong>Team Size:</strong> Teams must consist of 2 to 4 members. Solo builders may participate or pair up during the Day 1 matchmaking mixer.</li>
        <li><strong>Fresh Code:</strong> All code and project assets must be created during the official 24-hour sprint window. Pre-built projects will be disqualified.</li>
        <li><strong>Open Source &amp; Libraries:</strong> Use of open-source libraries, public SDKs, and pre-trained foundation models (such as Gemini 1.5 Pro) is encouraged.</li>
        <li><strong>Submission &amp; Demo:</strong> Teams must submit a public GitHub repository and present a working live demo to the jury. Slide-only submissions are not eligible for cash prizes.</li>
      </ul>
    </BaseModal>
  );
};

