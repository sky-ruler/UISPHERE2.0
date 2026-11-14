import React from 'react';
import { BaseModal } from './BaseModal';
import { useModal } from '../../context/ModalContext';

export const SyllabusModal: React.FC = () => {
  const { openModal } = useModal();

  return (
    <BaseModal
      modalId="syllabus-modal"
      title="Technical Labs Syllabus"
      icon={
        <svg className="modal-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      }
      footer={
        <button
          type="button"
          className="btn-primary"
          style={{ padding: '10px 20px' }}
          onClick={() => openModal('register-modal')}
        >
          Register for Labs
        </button>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <strong style={{ color: 'var(--accent)' }}>1. Generative AI &amp; Machine Learning (Intermediate &middot; Lab 3)</strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>Hands-on development with Gemini 1.5 Pro, LangChain, vector retrieval (RAG), and model deployment on Google Cloud Vertex AI.</p>
        </div>
        <div>
          <strong style={{ color: '#34A853' }}>2. Full-Stack Web &amp; Cloud Architecture (Beginner &middot; Hall B)</strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>Next.js App Router, Server Actions, containerizing apps with Docker, and pushing directly to Google Cloud Run.</p>
        </div>
        <div>
          <strong style={{ color: '#FBBC04' }}>3. Mobile &amp; Cross-Platform Development (Beginner &middot; Lab 1)</strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>Building cross-platform apps with Flutter 3, state management, and real-time backend synchronization using Firebase Firestore.</p>
        </div>
        <div>
          <strong style={{ color: '#EA4335' }}>4. Open Source &amp; DevOps Engineering (Advanced &middot; Room 204)</strong>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>Infrastructure as Code with Terraform, Kubernetes cluster orchestration, and navigating global open-source codebases.</p>
        </div>
      </div>
    </BaseModal>
  );
};

