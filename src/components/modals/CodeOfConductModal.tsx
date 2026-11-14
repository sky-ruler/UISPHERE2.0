import React from 'react';
import { BaseModal } from './BaseModal';
import { useModal } from '../../context/ModalContext';

export const CodeOfConductModal: React.FC = () => {
  const { closeModal } = useModal();

  return (
    <BaseModal
      modalId="conduct-modal"
      title="GDG Community Code of Conduct"
      icon={
        <svg className="modal-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      }
      footer={
        <button
          type="button"
          className="btn-primary"
          style={{ padding: '10px 20px' }}
          onClick={closeModal}
        >
          I Understand &amp; Agree
        </button>
      }
    >
      <p>
        <strong>Tekno Krraft 2026</strong>, organized by GDG ITER Chapter, is dedicated to providing a harassment-free event experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, race, or religion.
      </p>
      <p style={{ marginTop: '12px' }}><strong>Our Standards:</strong></p>
      <ul className="modal-list">
        <li>Be welcoming, respectful, and inclusive to all attendees, speakers, and student volunteers.</li>
        <li>Focus on collaborative learning, constructive feedback, and ethical coding practices.</li>
        <li>Harassment, offensive verbal comments, deliberate intimidation, or disruptive behavior will not be tolerated.</li>
        <li>If you notice any violations or feel unsafe, please reach out immediately to any volunteer wearing a GDG badge or email <strong>gdg@iter.ac.in</strong>.</li>
      </ul>
    </BaseModal>
  );
};

