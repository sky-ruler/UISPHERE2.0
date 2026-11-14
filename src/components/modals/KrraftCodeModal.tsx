import React from 'react';
import { BaseModal } from './BaseModal';
import { useModal } from '../../context/ModalContext';

export const KrraftCodeModal: React.FC = () => {
  const { closeModal } = useModal();

  return (
    <BaseModal
      modalId="cp-modal"
      title="KrraftCode 2026 Finals Format"
      icon={
        <svg className="modal-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      }
      footer={
        <button
          type="button"
          className="btn-primary"
          style={{ padding: '10px 20px' }}
          onClick={closeModal}
        >
          Close
        </button>
      }
    >
      <p>
        <strong>Contest Overview:</strong> The KrraftCode finals bring together the top 50 qualifying programmers across participating institutions for an intense 3-hour algorithmic challenge.
      </p>
      <ul className="modal-list" style={{ marginTop: '12px' }}>
        <li><strong>Format:</strong> 6 competitive programming problems spanning greedy algorithms, dynamic programming, and graph theory.</li>
        <li><strong>Supported Languages:</strong> C++20 (GCC 12), Java 17, and Python 3.10 with PyPy3 optimization.</li>
        <li><strong>Scoring:</strong> ICPC-style scoring rules with penalty points for erroneous submissions prior to problem acceptance.</li>
        <li><strong>Prizes:</strong> ₹50,000 top cash pool, trophies, and direct interviews with engineering sponsors.</li>
      </ul>
    </BaseModal>
  );
};

