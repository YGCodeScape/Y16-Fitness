import { motion } from 'framer-motion';

/**
 * Reusable glassmorphism card component.
 * Props:
 *  - children       : content
 *  - className      : extra Tailwind classes
 *  - hover          : enable hover tilt + glow (default true)
 *  - dark           : use dark glass variant
 *  - delay          : framer-motion entrance delay (seconds)
 *  - onClick        : click handler
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  dark = false,
  delay = 0,
  onClick,
}) {
  const base = dark ? 'glass-dark' : 'glass';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={
        hover
          ? {
              scale: 1.03,
              rotateX: -2,
              rotateY: 2,
              boxShadow: '0 16px 48px rgba(59,123,246,0.18)',
            }
          : {}
      }
      onClick={onClick}
      style={{ borderRadius: '1.25rem', transformStyle: 'preserve-3d' }}
      className={`${base} rounded-2xl overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
