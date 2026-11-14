import { useState, useEffect } from 'react';

export interface CountdownValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function useCountdown(targetIsoDate: string): CountdownValues {
  const calculateRemaining = (): CountdownValues => {
    const target = new Date(targetIsoDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownValues>(calculateRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetIsoDate]);

  return timeLeft;
}

