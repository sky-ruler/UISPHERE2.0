import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgressBar: React.FC = () => {
  const { progress } = useScrollProgress();

  return (
    <div
      id="scroll-progress-bar"
      className="scroll-progress-bar"
      aria-hidden="true"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};

