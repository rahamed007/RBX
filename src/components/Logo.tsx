import { Link } from 'react-router-dom';

export function Emblem({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <img
      src="/assets/rbx-logo.jpg"
      alt="Royal Bengal X emblem"
      className={`${className} object-contain mix-blend-screen drop-shadow-[0_0_18px_rgba(225,6,0,0.45)]`}
      draggable={false}
    />
  );
}

export function XMark({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 2 L10 10 L4.5 22 L9 22 L12 15 L15 22 L19.5 22 L14 10 L20 2 L15.5 2 L12 8.5 L8.5 2 Z" />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Royal Bengal X home">
      <Emblem className="h-11 w-11 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-lg tracking-[0.12em] text-bone">
            ROYAL BENGAL <span className="text-crimson">X</span>
          </span>
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.5em] text-gold">
            Beyblade X · Bangladesh
          </span>
        </span>
      )}
    </Link>
  );
}
