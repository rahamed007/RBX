import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Crown, Quote, Swords } from 'lucide-react';
import PageShell from '../components/PageShell';
import Particles from '../components/Particles';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import PlayerCard from '../components/PlayerCard';
import Magnetic from '../components/Magnetic';
import { XMark } from '../components/Logo';
import { players, recordSummary } from '../lib/data';

const filters = ['All', 'Attack', 'Stamina', 'Balance'] as const;

export default function Players() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = useMemo(
    () => players.filter((p) => filter === 'All' || p.type === filter),
    [filter]
  );
  const leadership = players.filter((p) => p.leadership);

  return (
    <PageShell>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-crimson/15 blur-[130px]" />
        <Particles className="absolute inset-0 h-full w-full" density={30} />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-20 pt-40 lg:px-10 lg:pt-48">
          <Reveal y={20}>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> Official Roster · Season 2026
            </p>
          </Reveal>
          <Reveal delay={0.1} y={40}>
            <h1 className="relative mt-6 font-display uppercase leading-[0.85]">
              <span className="text-stroke-faint absolute -top-6 left-0 select-none whitespace-nowrap text-[16vw] opacity-40 lg:text-[11rem]">
                RBX
              </span>
              <span className="relative block text-[17vw] text-bone sm:text-[13vw] lg:text-[10rem]">
                The <span className="text-glow-red text-crimson">Bladers</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
              Nine elite bladers from six divisions of Bangladesh — attackers, strategists and silent storms, all
              spinning under one crimson banner.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
              {[
                { v: players.length, l: 'Roster Bladers' },
                { v: recordSummary.totalPodiums, l: 'Combined Podiums' },
                { v: recordSummary.firstPlace, l: 'Titles Won' },
                { v: 6, l: 'Divisions Represented' },
              ].map((s) => (
                <div key={s.l} className="bg-void p-6 text-center">
                  <CountUp value={s.v} className="font-display text-4xl text-bone" />
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ash">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- official squad photo ---------- */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <Reveal y={40}>
            <div className="relative overflow-hidden border border-crimson/30 clip-card">
              <img
                src="/assets/team-photo.jpg"
                alt="The official Royal Bengal X squad — Captain CMX, Vice Captain Shadow SF and the full roster"
                className="max-h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/40" />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 lg:p-10">
                <div>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                    <XMark className="h-3 w-3 text-crimson" /> Official Squad Photo
                  </p>
                  <h3 className="mt-2 font-display text-2xl uppercase text-bone sm:text-4xl">
                    Captain CMX · Vice Captain Shadow SF · The Full Roster
                  </h3>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ash">Dhaka · Est. 2023</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- leadership ---------- */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading kicker="Command" title={<>Led by <span className="text-crimson">legends</span></>} />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {leadership.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.15} y={50}>
                <Link
                  to={`/players/${p.slug}`}
                  className="group relative grid overflow-hidden border border-gold/30 bg-graphite sm:grid-cols-[42%_58%] gold-edge clip-card"
                >
                  <div className="relative aspect-[3/4] overflow-hidden sm:aspect-auto">
                    <img
                      src={p.image}
                      alt={p.handle}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-graphite/90 sm:to-graphite" />
                  </div>
                  <div className="relative flex flex-col justify-center p-8 sm:p-10">
                    <div className="flex items-center gap-2 text-gold">
                      {p.leadership === 'Captain' ? <Crown className="h-4 w-4" /> : <Award className="h-4 w-4" />}
                      <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">{p.leadership}</span>
                    </div>
                    <h3 className="mt-3 font-display text-4xl uppercase leading-none text-bone transition-colors duration-300 group-hover:text-gold sm:text-5xl">
                      {p.handle}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-ash">{p.tagline}</p>
                    <Quote className="mt-6 h-5 w-5 text-crimson" />
                    <p className="mt-2 text-sm italic leading-relaxed text-bone/85">“{p.quote}”</p>
                    <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.25em] text-smoke">
                      <span className="flex items-center gap-1.5">
                        <Swords className="h-3.5 w-3.5 text-crimson" /> {p.signatureBey}
                      </span>
                    </div>
                    <span className="mt-6 inline-flex w-fit items-center gap-2 border border-gold/50 px-5 py-2.5 font-display text-[11px] uppercase tracking-[0.25em] text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-void">
                      View Profile
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- full grid ---------- */}
      <section className="relative border-t border-white/10 bg-carbon py-24 lg:py-32">
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-crimson/10 blur-[120px]" />
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading kicker="Full Squad" title={<>Every blade <span className="text-stroke-red">counts</span></>} />
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`border px-5 py-2.5 font-display text-xs uppercase tracking-[0.25em] transition-all duration-300 ${
                      filter === f
                        ? 'border-crimson bg-crimson text-white shadow-[0_0_25px_rgba(225,6,0,0.4)]'
                        : 'border-white/15 text-ash hover:border-crimson/60 hover:text-bone'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <PlayerCard player={p} index={i} />
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.1}>
            <div className="mt-16 border border-white/10 bg-graphite/60 p-8 text-center clip-card-sm">
              <p className="font-display text-2xl uppercase text-bone sm:text-3xl">
                Think you have what it takes to <span className="text-crimson">wear the tiger?</span>
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm text-ash">
                RBX Academy holds open trials in every division each season. Train hard, stay humble, spin loud.
              </p>
              <Magnetic className="mt-6">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 border border-crimson bg-crimson px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_0_50px_rgba(225,6,0,0.5)]"
                >
                  About The Academy
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
