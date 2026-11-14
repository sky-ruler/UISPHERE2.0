import React from 'react';
import { useModal } from '../../context/ModalContext';
import { ModalType } from '../../types';

interface BaseModalProps {
  modalId: NonNullable<ModalType>;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  modalId,
  title,
  icon,
  children,
  footer,
}) => {
  const { activeModal, closeModal } = useModal();
  const isOpen = activeModal === modalId;

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="modal-backdrop active"
      id={modalId}
      role="dialog"
      aria-modal="true"
      aria-hidden="false"
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog">
        <div className="modal-header">
          <div className="modal-title-row">
            {icon}
            <h3 className="modal-title">{title}</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close modal"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

