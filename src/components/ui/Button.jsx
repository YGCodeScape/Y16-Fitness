import { motion } from 'framer-motion';

/**
 * Button component with primary / secondary / ghost variants.
 * Props:
 *  - variant  : 'primary' | 'secondary' | 'ghost' | 'outline'
 *  - size     : 'sm' | 'md' | 'lg'
 *  - children : content
 *  - icon     : icon element (right side)
 *  - onClick  : handler
 *  - className: extra classes
 *  - href     : if set, renders as anchor
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  onClick,
  className = '',
  href,
  type = 'button',
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'contact-btn text-base',
  };

  const variants = {
    primary:
      'bg-[#0D0D12] text-white hover:bg-[#1a1a2e] shadow-lg hover:shadow-xl',
    secondary:
      'bg-[#3B7BF6] text-white hover:bg-[#2b6be6] shadow-md hover:shadow-blue-300/40',
    ghost:
      'bg-transparent text-[#0D0D12] hover:bg-black/5',
    outline:
      'bg-transparent border border-[#0D0D12]/20 text-[#0D0D12] hover:bg-black/5',
    'outline-blue':
      'bg-transparent border border-[#3B7BF6] text-[#3B7BF6] hover:bg-[#3B7BF6]/10',
  };

  const base = `inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={base}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
