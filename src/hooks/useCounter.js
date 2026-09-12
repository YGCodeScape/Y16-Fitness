import { useEffect, useState } from 'react';

/**
 * Animates a number from 0 to `target` over `duration` ms.
 * @param {number} target - Final value
 * @param {number} duration - Animation duration in ms
 * @param {boolean} active - Whether to start the animation
 */
export function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}
