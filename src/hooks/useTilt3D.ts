import { useRef, useEffect, useState } from 'react';

export function useTilt3D(maxTilt = 15) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const [isIdle, setIsIdle] = useState(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    const emblem = emblemRef.current;
    if (!wrapper || !card) return;

    let animId: number | null = null;
    let idleResumeTimer: ReturnType<typeof setTimeout> | null = null;
    let isHovering = false;

    const applyTilt = (clientX: number, clientY: number) => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = Math.max(-maxTilt, Math.min(maxTilt, -((y - centerY) / centerY) * maxTilt));
      const rotateY = Math.max(-maxTilt, Math.min(maxTilt, ((x - centerX) / centerX) * maxTilt));

      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        card.style.setProperty('--glare-x', `${x}px`);
        card.style.setProperty('--glare-y', `${y}px`);
        if (emblem) {
          emblem.style.transform = `translateZ(65px) rotateX(${(rotateX * 0.25).toFixed(2)}deg) rotateY(${(rotateY * 0.25).toFixed(2)}deg)`;
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      applyTilt(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (idleResumeTimer) clearTimeout(idleResumeTimer);
      setIsIdle(false);
      card.style.transition = 'transform 80ms ease-out, border-color var(--transition-fast)';
      if (emblem) emblem.style.transition = 'transform 80ms ease-out';
    };

    const handleMouseLeave = () => {
      isHovering = false;
      if (animId) cancelAnimationFrame(animId);
      card.style.transition = 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), border-color var(--transition-fast)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      if (emblem) {
        emblem.style.transition = 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)';
        emblem.style.transform = 'translateZ(65px) rotateX(0deg) rotateY(0deg)';
      }

      if (idleResumeTimer) clearTimeout(idleResumeTimer);
      idleResumeTimer = setTimeout(() => {
        if (!isHovering) {
          card.style.transform = '';
          card.style.transition = '';
          if (emblem) {
            emblem.style.transform = '';
            emblem.style.transition = '';
          }
          setIsIdle(true);
        }
      }, 450);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right && touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
          setIsIdle(false);
          applyTilt(touch.clientX, touch.clientY);
        }
      }
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('touchmove', handleTouchMove, { passive: true });
    card.addEventListener('touchend', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('touchmove', handleTouchMove);
      card.removeEventListener('touchend', handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
      if (idleResumeTimer) clearTimeout(idleResumeTimer);
    };
  }, [maxTilt]);

  return { wrapperRef, cardRef, emblemRef, isIdle };
}
