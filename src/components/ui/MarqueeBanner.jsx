/**
 * Infinite horizontal marquee banner.
 * Props:
 *  - items    : array of strings to display
 *  - separator: JSX element between items
 *  - speed    : animation duration in seconds (default 20)
 *  - className: extra classes on wrapper
 *  - dark     : dark background variant
 */
export default function MarqueeBanner({
  items = [],
  separator,
  speed = 20,
  className = '',
  dark = false,
}) {
  // Duplicate items so the seamless loop works
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden py-4 ${dark ? 'bg-[#0D0D12]' : 'bg-[#F0EFEB]'} ${className}`}
    >
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center gap-4 px-6 font-semibold text-xl md:text-2xl tracking-wide whitespace-nowrap ${
              dark ? 'text-white/80' : 'text-[#0D0D12]/60'
            }`}
          >
            {item}
            {separator || (
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  dark ? 'bg-white/40' : 'bg-[#0D0D12]/30'
                }`}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
