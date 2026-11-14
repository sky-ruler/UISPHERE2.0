import React, { useState, useEffect } from 'react';

export const TerminalPreloader: React.FC = () => {
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLine1(true), 50);
    const t2 = setTimeout(() => setLine2(true), 300);
    const t3 = setTimeout(() => setLine3(true), 600);
    const t4 = setTimeout(() => {
      setHidden(true);
      document.body.classList.add('loaded');
    }, 900);
    const t5 = setTimeout(() => {
      setUnmounted(true);
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (unmounted) return null;

  return (
    <div
      id="preloader"
      className={hidden ? 'preloader-hidden' : ''}
      style={{ pointerEvents: hidden ? 'none' : 'auto' }}
      role="status"
      aria-live="polite"
      aria-hidden={hidden}
    >
      <div className="preloader-terminal-box">
        <div className="preloader-terminal-header">
          <span className="preloader-header-tag">&gt; SYSTEM BOOT</span>
          <span className="preloader-pulse-dot" aria-hidden="true" />
        </div>
        <div className="preloader-terminal-content">
          <div className={`preloader-line ${line1 ? 'show' : ''}`} id="preload-line-1">
            <span>&gt; INITIALIZING_PORTAL...</span>
          </div>
          <div className={`preloader-line ${line2 ? 'show' : ''}`} id="preload-line-2">
            <span>&gt; LOADING_ASSETS</span>
            <span className="preloader-line-status">[OK]</span>
          </div>
          <div className={`preloader-line ${line3 ? 'show' : ''}`} id="preload-line-3">
            <span>&gt; READY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

