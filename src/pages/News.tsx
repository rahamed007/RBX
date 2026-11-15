import { useMemo, useState } from 'react';
import PageShell from '../components/PageShell';
import Particles from '../components/Particles';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import NewsCard from '../components/NewsCard';
import Marquee from '../components/Marquee';
import { XMark } from '../components/Logo';
import { news } from '../lib/data';

export default function News() {
  const featured = news.find((a) => a.featured) ?? news[0];
  const rest = news.filter((a) => a.slug !== featured.slug);
  const categories = useMemo(() => ['All', ...Array.from(new Set(news.map((a) => a.category)))], []);
  const [cat, setCat] = useState('All');
  const visible = cat === 'All' ? rest : rest.filter((a) => a.category === cat);

  return (
    <PageShell>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-crimson/15 blur-[130px]" />
        <Particles className="absolute inset-0 h-full w-full" density={26} />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-40 lg:px-10 lg:pt-48">
          <Reveal y={20}>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> RBX Media · Dispatches from the arena
            </p>
          </Reveal>
          <Reveal delay={0.1} y={40}>
            <h1 className="font-display text-[15vw] uppercase leading-[0.85] text-bone sm:text-[11vw] lg:text-[9.5rem]">
              The War <span className="text-glow-red text-crimson">Room</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
              Tournament reports, roster announcements, international dispatches and everything happening inside
              Bangladesh’s loudest beyblade organization.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={['Tournament Reports', 'Roster News', 'International Dispatches', 'Community Programs', 'RBX Media']}
        dark
      />

      {/* ---------- featured ---------- */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading kicker="Top Story" title={<>Latest <span className="text-crimson">announcement</span></>} />
          <Reveal delay={0.15} y={40} className="mt-12">
            <NewsCard article={featured} large />
          </Reveal>
        </div>
      </section>

      {/* ---------- archive ---------- */}
      <section className="border-t border-white/10 bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading kicker="Archive" title={<>All <span className="text-stroke-red">coverage</span></>} />
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
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

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.1} y={40}>
                <NewsCard article={a} />
              </Reveal>
            ))}
          </div>
          {visible.length === 0 && (
            <p className="mt-12 text-center text-sm uppercase tracking-[0.3em] text-smoke">No dispatches in this category yet.</p>
          )}
        </div>
      </section>
    </PageShell>
  );
}
