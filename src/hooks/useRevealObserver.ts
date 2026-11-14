import { useEffect } from 'react';

export function useRevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal-ready');

    const revealTargets = document.querySelectorAll(
      '.section-header-block, .stat-tile, .pillar-card, .bento-card, .schedule-row-card, .speaker-card, .sponsor-card-item, .sponsor-cta-banner, .accordion-item'
    );

    revealTargets.forEach((el) => {
      el.classList.add('reveal-item');
    });

    const gridContainers = document.querySelectorAll(
      '.stats-grid-4, .pillars-grid, .bento-grid, .schedule-list, .speakers-grid, .sponsors-grid-partners, .accordion-group'
    );

    gridContainers.forEach((container) => {
      const siblings = Array.from(container.children).filter((c) => c.classList.contains('reveal-item'));
      siblings.forEach((sibling, idx) => {
        (sibling as HTMLElement).style.setProperty('--stagger-idx', String(idx));
      });
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.willChange = 'transform, opacity';
            target.classList.add('is-revealed');
            obs.unobserve(target);

            const handleTransitionEnd = (e: TransitionEvent) => {
              if (e.target === target && (e.propertyName === 'transform' || e.propertyName === 'opacity')) {
                target.style.willChange = '';
                target.removeEventListener('transitionend', handleTransitionEnd as any);
              }
            };
            target.addEventListener('transitionend', handleTransitionEnd as any);

            setTimeout(() => {
              target.style.willChange = '';
            }, 550);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealTargets.forEach((el) => observer.observe(el));

    // Pointer down ripple effect
    const handlePointerDown = (e: PointerEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const target = (e.target as HTMLElement).closest(
        '.btn-primary, .btn-secondary, .bento-action-btn, .btn-schedule-action, .events-tab, .schedule-day-btn, .speaker-social-btn, .modal-close-btn, .nav-hamburger, .theme-toggle-btn'
      ) as HTMLElement | null;
      if (!target) return;

      target.classList.add('ripple-surface');
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.6;
      const clickX = e.clientX - rect.left - size / 2;
      const clickY = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      const isDarkRipple =
        target.classList.contains('btn-secondary') ||
        target.classList.contains('btn-schedule-action') ||
        target.classList.contains('events-tab') ||
        target.classList.contains('nav-hamburger') ||
        target.classList.contains('theme-toggle-btn');

      ripple.className = 'click-ripple' + (isDarkRipple ? ' ripple-dark' : '');
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${clickX}px`;
      ripple.style.top = `${clickY}px`;

      target.appendChild(ripple);

      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
      setTimeout(() => {
        if (ripple.parentNode) ripple.remove();
      }, 380);
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      observer.disconnect();
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);
}

