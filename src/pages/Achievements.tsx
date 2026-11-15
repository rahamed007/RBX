import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, Trophy } from 'lucide-react';
import PageShell from '../components/PageShell';
import Particles from '../components/Particles';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import TournamentCard from '../components/TournamentCard';
import Magnetic from '../components/Magnetic';
import { Link } from 'react-router-dom';
import { XMark } from '../components/Logo';
import {
  recordSummary,
  timeline,
  tournamentCategories,
  tournaments,
  type TournamentCategory,
} from '../lib/data';

gsap.registerPlugin(ScrollTrigger);

const cats: ('All' | TournamentCategory)[] = ['All', ...tournamentCategories];

export default function Achievements() {
  const [cat, setCat] = useState<'All' | TournamentCategory>('All');
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (cat === 'All' ? tournaments : tournaments.filter((t) => t.category === cat)),
    [cat]
  );
  const champions = useMemo(() => tournaments.filter((t) => t.placement === 1), []);
  const catCounts = useMemo(() => {
    const map = new Map<TournamentCategory, number>();
    tournaments.forEach((t) => map.set(t.category, (map.get(t.category) ?? 0) + 1));
    return map;
  }, []);

  /* -------- pinned horizontal scroll -------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const pin = pinRef.current;
      if (!track || !pin) return;
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => '+=' + distance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-crimson/15 blur-[130px]" />
        <Particles className="absolute inset-0 h-full w-full" density={30} />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-20 pt-40 lg:px-10 lg:pt-48">
          <Reveal y={20}>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> Competitive History · 2023 — 2026
            </p>
          </Reveal>
          <Reveal delay={0.1} y={40}>
            <h1 className="font-display text-[15vw] uppercase leading-[0.85] text-bone sm:text-[11vw] lg:text-[9.5rem]">
              The Trophy <span className="text-glow-red text-crimson">Room</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
              Ninety-two podiums. Thirty-four titles. Three nations. From parking-lot clashes in Dhanmondi to
              international finals in Kuala Lumpur — this is the competitive record of Royal Bengal X.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">
              {[
                { v: recordSummary.totalPodiums, l: 'Total Podiums' },
                { v: recordSummary.firstPlace, l: 'First Place' },
                { v: recordSummary.secondPlace, l: 'Second Place' },
                { v: recordSummary.thirdPlace, l: 'Third Place' },
                { v: recordSummary.tournaments, s: '+', l: 'Tournaments Played' },
                { v: recordSummary.categories, l: 'Tournament Classes' },
              ].map((s) => (
                <div key={s.l} className="bg-void p-6 text-center">
                  <CountUp value={s.v} suffix={s.s ?? ''} className="font-display text-3xl text-bone lg:text-4xl" />
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-ash">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- filterable grid ---------- */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading kicker="Results Archive" title={<>Every <span className="text-crimson">podium</span></>} />
            <Reveal delay={0.15}>
              <div className="flex max-w-2xl flex-wrap gap-2">
                {cats.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`border px-4 py-2.5 font-display text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                      cat === c
                        ? 'border-crimson bg-crimson text-white shadow-[0_0_25px_rgba(225,6,0,0.4)]'
                        : 'border-white/15 text-ash hover:border-crimson/60 hover:text-bone'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((t, i) => (
              <Reveal key={t.id} delay={Math.min(i, 8) * 0.05} y={36}>
                <TournamentCard t={t} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-[11px] uppercase tracking-[0.3em] text-smoke">
            Showing {filtered.length} podium finish{filtered.length === 1 ? '' : 'es'}
            {cat !== 'All' && ` in ${cat}`}
          </p>
        </div>
      </section>

      {/* ---------- horizontal title runs ---------- */}
      <section ref={pinRef} className="relative overflow-hidden bg-carbon">
        <div className="flex h-screen flex-col justify-center">
          <div className="mx-auto w-full max-w-[1600px] px-5 lg:px-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-crimson">
                  <Flame className="h-4 w-4" /> Title Runs
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-none text-bone sm:text-6xl">
                  Gold <span className="text-shimmer-gold">standard</span>
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-xs leading-relaxed text-ash md:block">
                Keep scrolling — the championship wall slides sideways through every first-place finish in RBX history.
              </p>
            </div>
          </div>

          <div ref={trackRef} className="mt-12 flex h-[46vh] items-center gap-6 px-5 lg:px-10">
            {champions.map((t, i) => (
              <div
                key={t.id}
                className="group relative flex h-[78%] w-[78vw] shrink-0 flex-col justify-between border border-gold/25 bg-graphite p-8 transition-colors duration-500 hover:border-gold/60 sm:w-[46vw] lg:w-[30vw] clip-card"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-6xl text-gold/25 transition-colors group-hover:text-gold/50 lg:text-8xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Trophy className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-crimson">{t.category}</span>
                  <h3 className="mt-2 font-display text-2xl uppercase leading-tight text-bone sm:text-3xl">{t.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-ash">
                    {t.year} · {t.location} · {t.winner}
                  </p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-gold/60 to-transparent" />
              </div>
            ))}
            <div className="w-[12vw] shrink-0" />
          </div>
        </div>
      </section>

      {/* ---------- category breakdown ---------- */}
      <section className="border-y border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading kicker="By Division" title={<>Nine arenas of <span className="text-crimson">war</span></>} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tournamentCategories.map((c, i) => {
              const count = catCounts.get(c) ?? 0;
              const wins = tournaments.filter((t) => t.category === c && t.placement === 1).length;
              return (
                <Reveal key={c} delay={(i % 3) * 0.08} y={30}>
                  <button
                    onClick={() => {
                      setCat(c);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group glass clip-card-sm flex w-full items-center justify-between p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:border-crimson/50"
                  >
                    <div>
                      <h3 className="font-display text-lg uppercase tracking-wide text-bone group-hover:text-crimson">{c}</h3>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-smoke">{wins} titles · {count} podiums</p>
                    </div>
                    <span className="font-display text-4xl text-crimson/40 transition-colors group-hover:text-crimson">
                      {String(count).padStart(2, '0')}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- timeline ---------- */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[640px] -translate-x-1/2 rounded-full bg-crimson/10 blur-[140px]" />
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <SectionHeading align="center" kicker="The Journey" title={<>Seasons of the <span className="text-crimson">tiger</span></>} />
          <div className="mt-16">
            <Timeline events={timeline} />
          </div>
          <Reveal delay={0.1}>
            <div className="mt-16 text-center">
              <Magnetic>
                <Link
                  to="/news"
                  className="group inline-flex items-center gap-3 border border-crimson bg-crimson px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_0_50px_rgba(225,6,0,0.5)]"
                >
                  Read The Match Reports
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
