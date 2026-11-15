import { XMark } from './Logo';

interface MarqueeProps {
  items: string[];
  className?: string;
  dark?: boolean;
}

export default function Marquee({ items, className = '', dark = false }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div
      className={`relative flex overflow-hidden border-y py-4 ${
        dark ? 'border-white/10 bg-carbon text-bone' : 'border-crimson/30 bg-crimson text-white'
      } ${className}`}
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap pr-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-sm uppercase tracking-[0.25em]">
            {item}
            <XMark className={`h-3.5 w-3.5 ${dark ? 'text-crimson' : 'text-white/90'}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
