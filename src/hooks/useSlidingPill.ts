import { useState, useEffect, useRef, useCallback } from 'react';

export function useSlidingPill<T extends HTMLElement, K extends HTMLElement>(activeKey: string | number) {
  const containerRef = useRef<T>(null);
  const pillRef = useRef<K>(null);
  const [style, setStyle] = useState<{ transform: string; width: string }>({
    transform: 'translateX(0px)',
    width: '0px',
  });

  const updatePill = useCallback(() => {
    if (!containerRef.current) return;
    const activeEl = containerRef.current.querySelector<HTMLElement>('.active');
    if (activeEl) {
      setStyle({
        transform: `translateX(${activeEl.offsetLeft}px)`,
        width: `${activeEl.offsetWidth}px`,
      });
    }
  }, []);

  useEffect(() => {
    // Delay slightly to ensure fonts/layout have painted
    const timer = setTimeout(updatePill, 60);
    window.addEventListener('resize', updatePill);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePill);
    };
  }, [activeKey, updatePill]);

  return { containerRef, pillRef, style, updatePill };
}

