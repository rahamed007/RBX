import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  sub?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ kicker, title, sub, align = 'left', className = '' }: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      <Reveal y={24}>
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-10 bg-crimson" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">{kicker}</span>
          <span className="h-px w-10 bg-crimson" />
        </div>
      </Reveal>
      <Reveal delay={0.08} y={34}>
        <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-bone sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16} y={24}>
          <p className={`mt-5 max-w-2xl text-sm leading-relaxed text-ash sm:text-base ${align === 'center' ? 'mx-auto' : ''}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
