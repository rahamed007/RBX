import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { players, type Player } from '../lib/data';

export default function PlayerCard({ player, index }: { player: Player; index: number }) {
  const total = player.podium.first + player.podium.second + player.podium.third;
  return (
    <Link
      to={`/players/${player.slug}`}
      className="group relative block overflow-hidden border border-white/10 bg-graphite transition-all duration-500 hover:-translate-y-2 hover:border-crimson/60 hover:shadow-[0_0_50px_rgba(225,6,0,0.25)] clip-card-sm"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={player.image}
          alt={player.handle}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
        <div className="absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover:bg-crimson/10" />

        {/* scanline */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-crimson/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 flex items-center gap-3">
          <span className="font-display text-2xl text-white/25">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <span className="absolute right-4 top-4 border border-gold/50 bg-void/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
          {player.type}
        </span>

        {player.leadership && (
          <span className="absolute left-4 top-14 border border-crimson/60 bg-crimson/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-crimson backdrop-blur-sm">
            {player.leadership}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">{player.role}</p>
          <h3 className="mt-1 font-display text-3xl uppercase leading-none text-bone transition-colors duration-300 group-hover:text-crimson sm:text-4xl">
            {player.handle}
          </h3>
          <p className="mt-1.5 text-xs uppercase tracking-[0.2em] text-ash">{player.tagline}</p>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-smoke">
              {total} Podiums · {player.city}
            </span>
            <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-crimson opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function playerBySlug(slug: string): Player | undefined {
  return players.find((p) => p.slug === slug);
}
