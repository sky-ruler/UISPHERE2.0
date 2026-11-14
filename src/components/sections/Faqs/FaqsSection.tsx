import React, { useState } from 'react';
import { faqsData } from '../../../data/faqs';

export const FaqsSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(() => {
    const defaultItem = faqsData.find((f) => f.defaultOpen);
    return defaultItem ? defaultItem.id : null;
  });

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="faqs-section" aria-labelledby="faqs-heading">
      <div className="events-container">
        <div className="section-header-block">
          <div className="section-overline font-mono-tag">
            <span>QUESTIONS &amp; ANSWERS</span>
          </div>
          <h2 id="faqs-heading" className="section-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-subtext">
            Straight answers on registration, team sizes, eligibility, and what to bring.
          </p>
        </div>

        <div className="accordion-group">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="accordion-header"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(faq.id)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className="accordion-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="accordion-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

