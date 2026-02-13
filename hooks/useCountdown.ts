
import { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

export const useCountdown = (targetDate: Date): TimeLeft => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    // Use absolute difference to handle both future and past dates (time since or time until)
    // The prompt implies we're tracking time since a milestone.
    const difference = Math.abs(targetDate.getTime() - now.getTime());

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};
