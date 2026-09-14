import { useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor
 * ─────────────────────────────────────────────────────────────────────
 *  • Outer ring  — thin 1.5px #3B7BF6 border, large, slow spring follow
 *  • Inner dot   — small solid #3B7BF6 fill, fast spring follow
 * ─────────────────────────────────────────────────────────────────────
 */
export default function CustomCursor() {
  // Raw mouse position
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Outer ring — sluggish spring (feels heavy/airy)
  const outerX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.6 });
  const outerY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.6 });

  // Inner dot — snappy spring (feels precise)
  const innerX = useSpring(mouseX, { stiffness: 300, damping: 28, mass: 0.4 });
  const innerY = useSpring(mouseY, { stiffness: 300, damping: 28, mass: 0.4 });

  // Track mouse
  const onMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    innerX.set(e.clientX);
    innerY.set(e.clientY);
  }, [mouseX, mouseY, innerX, innerY]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return (
    <>
      {/* ── Outer ring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
          width: 42,
          height: 42,
          borderRadius: '50%',
          border: '1.5px solid #3B7BF6',
          willChange: 'transform',
        }}
      />

      {/* ── Inner dot ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: innerX,
          y: innerY,
          translateX: -5,
          translateY: -5,
          width: 10,
          height: 10,
          borderRadius: 999,
          backgroundColor: '#3B7BF6',
          willChange: 'transform, width, height, border-radius',
          mixBlendMode: 'multiply',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      />
    </>
  );
}
