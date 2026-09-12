import { useCounter } from '../../hooks/useCounter';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Animated stat counter that triggers when scrolled into view.
 * Props:
 *  - value   : target number (e.g. 500)
 *  - suffix  : string appended after number (e.g. 'K+')
 *  - label   : descriptive label below
 *  - className
 */
export default function StatCounter({ value, suffix = '', label = '', className = '' }) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const count = useCounter(value, 1800, isVisible);

  return (
    <div ref={ref} className={`flex flex-col gap-1 ${className}`}>
      <span className="text-3xl md:text-4xl font-bold text-[#0D0D12] leading-none">
        {count}
        {suffix}
      </span>
      {label && (
        <span className="text-xs text-[#6B7280] leading-snug max-w-[120px]">{label}</span>
      )}
    </div>
  );
}
