import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Award, MapPin, Medal, Quote, Swords, CalendarDays } from 'lucide-react';
import PageShell from '../components/PageShell';
import Particles from '../components/Particles';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import ParallaxImage from '../components/ParallaxImage';
import Magnetic from '../components/Magnetic';
import { XMark } from '../components/Logo';
import { players, placementLabel, placementClasses } from '../lib/data';

gsap.registerPlugin(ScrollTrigger);

const statColors: Record<string, string> = {
  attack: 'from-crimson-deep to-crimson',
  burst: 'from-crimson-deep to-gold',
  stamina: 'from-crimson-deep to-crimson',
  control: 'from-crimson-deep to-gold-soft',
};

export default function PlayerProfile() {
  const { slug } = useParams<{ slug: string }>();
  const player = players.find((p) => p.slug === slug);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barsRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-bar').forEach((bar) => {
        const target = bar.dataset.value ?? '0';
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${target}%`,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: bar, start: 'top 90%', once: true },
          }
        );
      });
    }, barsRef);
    return () => ctx.revert();
  }, [slug]);

  if (!player) {
    return (
      <PageShell>
        <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
          <p className="font-display text-6xl text-crimson">404</p>
          <h1 className="mt-4 font-display text-3xl uppercase text-bone">Blader not found</h1>
          <Link to="/players" className="mt-8 border border-crimson px-8 py-4 font-display text-xs uppercase tracking-[0.3em] text-crimson transition-colors hover:bg-crimson hover:text-white">
            Back to the roster
          </Link>
        </section>
      </PageShell>
    );
  }

  const idx = players.findIndex((p) => p.slug === slug);
  const prev = players[(idx - 1 + players.length) % players.length];
  const next = players[(idx + 1) % players.length];
  const totalPodiums = player.podium.first + player.podium.second + player.podium.third;

  return (
    <PageShell>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={player.image} alt={player.handle} className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-transparent to-void/60" />
        </div>
        <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-crimson/25 blur-[150px]" />
        <Particles className="absolute inset-0 h-full w-full" density={36} />
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-44 lg:px-10">
          <Reveal y={24}>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> RBX Roster · {player.role}
            </p>
          </Reveal>
          <Reveal delay={0.1} y={50}>
            <h1 className="mt-4 font-display text-[16vw] uppercase leading-[0.85] text-bone sm:text-[11vw] lg:text-[9rem]">
              {player.handle}
              <span className="text-crimson">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 font-display text-lg uppercase tracking-[0.3em] text-ash sm:text-2xl">“{player.tagline}”</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-px border border-white/10 bg-white/10 backdrop-blur-sm md:grid-cols-4">
              {[
                { l: 'Real Name', v: player.realName },
                { l: 'Age', v: `${player.age} yrs` },
                { l: 'Hometown', v: player.city },
                { l: 'With RBX Since', v: player.joined },
              ].map((m) => (
                <div key={m.l} className="bg-void/85 p-5">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-smoke">{m.l}</p>
                  <p className="mt-1 text-sm font-semibold text-bone">{m.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="border border-crimson/60 bg-crimson/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-crimson">
                {player.type} Type
              </span>
              <span className="flex items-center gap-2 border border-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-bone">
                <Swords className="h-3.5 w-3.5 text-gold" /> {player.signatureBey}
              </span>
              <span className="flex items-center gap-2 border border-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-bone">
                <MapPin className="h-3.5 w-3.5 text-crimson" /> {player.city}, Bangladesh
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STATS + PODIUM ================= */}
      <section className="border-b border-white/10 bg-carbon py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading kicker="Competitive Stats" title={<>Numbers don’t <span className="text-crimson">lie</span></>} />
            <div ref={barsRef} className="mt-12 space-y-7">
              {(
                [
                  { k: 'attack', l: 'Attack Power' },
                  { k: 'burst', l: 'Burst Finishing' },
                  { k: 'stamina', l: 'Stamina / Endurance' },
                  { k: 'control', l: 'Control & Composure' },
                ] as const
              ).map((s) => (
                <div key={s.k}>
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em]">
                    <span className="text-bone">{s.l}</span>
                    <span className="text-gold">{player.stats[s.k]}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden border border-white/10 bg-void">
                    <div
                      data-value={player.stats[s.k]}
                      className={`stat-bar h-full bg-gradient-to-r ${statColors[s.k]}`}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading kicker="Career Podiums" title={<>Stands of <span className="text-shimmer-gold">glory</span></>} />
            <div className="mt-12 grid grid-cols-3 gap-4">
              {(
                [
                  { v: player.podium.first, l: 'First Place', cls: 'text-gold border-gold/50 bg-gold/10', iconColor: 'text-gold' },
                  { v: player.podium.second, l: 'Second Place', cls: 'text-zinc-200 border-zinc-300/40 bg-zinc-300/10', iconColor: 'text-zinc-200' },
                  { v: player.podium.third, l: 'Third Place', cls: 'text-amber-600 border-amber-600/40 bg-amber-600/10', iconColor: 'text-amber-600' },
                ] as const
              ).map((p) => (
                <div key={p.l} className={`clip-card-sm border p-5 text-center transition-transform duration-500 hover:-translate-y-1.5 ${p.cls}`}>
                  <Medal className={`mx-auto h-6 w-6 ${p.iconColor}`} />
                  <CountUp value={p.v} className="mt-3 block font-display text-4xl lg:text-5xl" />
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] opacity-80">{p.l}</p>
                </div>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="glass clip-card-sm mt-6 flex items-center justify-between p-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-smoke">Total Career Podiums</p>
                  <p className="mt-1 font-display text-3xl text-bone">{totalPodiums}</p>
                </div>
                <Award className="h-10 w-10 text-crimson" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="mt-6 border-l-2 border-crimson pl-6">
                <Quote className="h-5 w-5 text-crimson" />
                <p className="mt-3 font-display text-xl uppercase leading-snug text-bone sm:text-2xl">“{player.quote}”</p>
                <footer className="mt-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                  — {player.handle}, {player.role}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= BIO ================= */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-crimson/10 blur-[120px]" />
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          <div>
            <SectionHeading kicker="The Story" title={<>Beyond the <span className="text-crimson">blade</span></>} />
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-1 text-[10px] uppercase tracking-[0.3em] text-smoke">
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5 text-crimson" /> Age {player.age} · {player.city}
                </p>
                <p className="flex items-center gap-2">
                  <Award className="h-3.5 w-3.5 text-gold" /> {totalPodiums} career podiums
                </p>
              </div>
            </Reveal>
          </div>
          <div>
            {player.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.12} y={30}>
                <p className={`mt-5 leading-relaxed text-ash ${i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-crimson' : ''}`}>
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOURNAMENT HISTORY ================= */}
      <section className="border-y border-white/10 bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading
            kicker="Tournament History"
            title={<>The <span className="text-crimson">record</span> book</>}
            sub={`Every documented podium finish for ${player.handle} in RBX colors.`}
          />
          <div className="mt-12 space-y-3">
            {player.tournaments.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05} y={24}>
                <div className="group flex flex-wrap items-center gap-4 border border-white/10 bg-graphite/60 px-5 py-4 transition-all duration-500 hover:border-crimson/50 hover:bg-graphite sm:gap-6 sm:px-7">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center border font-display text-sm ${placementClasses[t.place]}`}
                  >
                    {placementLabel(t.place)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-lg uppercase text-bone transition-colors group-hover:text-crimson sm:text-xl">
                      {t.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-smoke">
                      {t.location} · {t.year}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold">{player.handle}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PHOTOS ================= */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading kicker="In Frame" title={<>Featured <span className="text-stroke-red">shots</span></>} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal y={40}>
              <ParallaxImage src={player.image} alt={`${player.handle} portrait`} speed={0.08} className="clip-card red-edge aspect-[3/4]" />
            </Reveal>
            <Reveal delay={0.1} y={40}>
              <ParallaxImage src="/assets/beystadium.jpg" alt="Battle stadium" speed={0.12} className="clip-card aspect-[3/4] lg:mt-12" />
            </Reveal>
            <Reveal delay={0.2} y={40}>
              <ParallaxImage src="/assets/battle.jpg" alt="Burst clash" speed={0.06} className="clip-card aspect-[3/4]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PREV / NEXT ================= */}
      <section className="border-t border-white/10">
        <div className="grid sm:grid-cols-2">
          <Link
            to={`/players/${prev.slug}`}
            className="group flex items-center gap-5 border-r border-white/10 px-6 py-10 transition-colors hover:bg-graphite lg:px-12"
          >
            <ArrowLeft className="h-6 w-6 shrink-0 text-crimson transition-transform duration-300 group-hover:-translate-x-2" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-smoke">Previous Blader</p>
              <p className="mt-1 font-display text-2xl uppercase text-bone transition-colors group-hover:text-crimson">{prev.handle}</p>
            </div>
          </Link>
          <Link
            to={`/players/${next.slug}`}
            className="group flex items-center justify-end gap-5 px-6 py-10 text-right transition-colors hover:bg-graphite lg:px-12"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-smoke">Next Blader</p>
              <p className="mt-1 font-display text-2xl uppercase text-bone transition-colors group-hover:text-crimson">{next.handle}</p>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 text-crimson transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* back link */}
      <div className="py-10 text-center">
        <Magnetic>
          <Link
            to="/players"
            className="inline-flex items-center gap-3 border border-white/15 px-8 py-4 font-display text-xs uppercase tracking-[0.3em] text-bone transition-all duration-300 hover:border-crimson hover:text-crimson"
          >
            <ArrowLeft className="h-4 w-4" /> Full Roster
          </Link>
        </Magnetic>
      </div>
    </PageShell>
  );
}
