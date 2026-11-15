import { MapPin, Trophy } from 'lucide-react';
import { placementClasses, placementLabel, type Tournament } from '../lib/data';

export default function TournamentCard({ t }: { t: Tournament }) {
  return (
    <article className="group relative flex flex-col border border-white/10 bg-graphite/70 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/50 hover:bg-graphite hover:shadow-[0_0_40px_rgba(225,6,0,0.18)] clip-card-sm">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`grid h-14 w-14 shrink-0 place-items-center border font-display text-xl transition-transform duration-500 group-hover:scale-110 ${placementClasses[t.placement]}`}
        >
          {placementLabel(t.placement)}
        </span>
        <span className="border border-white/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-ash">
          {t.category}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl uppercase leading-tight text-bone transition-colors duration-300 group-hover:text-crimson sm:text-2xl">
        {t.name}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-smoke">
        <span className="text-gold">{t.year}</span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {t.location}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ash">{t.note}</p>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-bone">
          <Trophy className="h-3.5 w-3.5 text-gold" /> {t.winner}
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-smoke transition-colors group-hover:text-crimson">
          Podium finish
        </span>
      </div>
    </article>
  );
}
