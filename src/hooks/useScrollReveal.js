import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and boolean indicating if the element is in viewport.
 * @param {number} threshold - Percentage of element visible to trigger (0-1)
 * @param {string} rootMargin - CSS margin for intersection observer root
 */
export function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // only trigger once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
