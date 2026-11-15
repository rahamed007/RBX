import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Expand, Images } from 'lucide-react';
import PageShell from '../components/PageShell';
import Particles from '../components/Particles';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Lightbox, { type LightboxImage } from '../components/Lightbox';
import { XMark } from '../components/Logo';
import { galleryAlbums, galleryItems, type AlbumKey } from '../lib/data';

type Filter = 'All' | AlbumKey;

export default function Gallery() {
  const [album, setAlbum] = useState<Filter>('All');
  const [lightbox, setLightbox] = useState<{ items: LightboxImage[]; index: number } | null>(null);

  const visible = useMemo(
    () => (album === 'All' ? galleryItems : galleryItems.filter((g) => g.album === album)),
    [album]
  );

  const openAt = (i: number) => setLightbox({ items: visible.map((g) => ({ src: g.src, caption: g.caption })), index: i });

  return (
    <PageShell>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-crimson/15 blur-[130px]" />
        <Particles className="absolute inset-0 h-full w-full" density={26} />
        <div className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-40 lg:px-10 lg:pt-48">
          <Reveal y={20}>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> Visual Archive · 2023 — 2026
            </p>
          </Reveal>
          <Reveal delay={0.1} y={40}>
            <h1 className="font-display text-[15vw] uppercase leading-[0.85] text-bone sm:text-[11vw] lg:text-[9.5rem]">
              Frames of <span className="text-glow-red text-crimson">the Roar</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
              Team portraits, burst finishes, international stages and champions’ podiums — every frame of Royal Bengal X,
              captured in crimson and shadow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- album filters ---------- */}
      <section className="sticky top-[68px] z-30 border-b border-white/10 bg-void/90 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-5 lg:px-10">
          {(['All', ...galleryAlbums] as Filter[]).map((a) => {
            const count = a === 'All' ? galleryItems.length : galleryItems.filter((g) => g.album === a).length;
            return (
              <button
                key={a}
                onClick={() => setAlbum(a)}
                className={`flex items-center gap-2 border px-5 py-2.5 font-display text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  album === a
                    ? 'border-crimson bg-crimson text-white shadow-[0_0_25px_rgba(225,6,0,0.4)]'
                    : 'border-white/15 text-ash hover:border-crimson/60 hover:text-bone'
                }`}
              >
                {a === 'All' && <Images className="h-3.5 w-3.5" />}
                {a}
                <span className={album === a ? 'text-white/70' : 'text-smoke'}>{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ---------- masonry ---------- */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {visible.map((g, i) => (
              <motion.figure
                layout
                key={g.src + g.caption}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative mb-6 cursor-pointer break-inside-avoid overflow-hidden border border-white/10 bg-graphite clip-card-sm"
                onClick={() => openAt(i)}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 ${
                    g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-crimson/0 transition-colors duration-500 group-hover:bg-crimson/15" />
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/20 bg-void/70 text-bone opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">{g.album}</span>
                  <p className="mt-1 text-sm font-medium leading-snug text-bone">{g.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          <Reveal delay={0.1}>
            <p className="mt-6 text-center text-[11px] uppercase tracking-[0.3em] text-smoke">
              {visible.length} frames · tap any image to view full-screen
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-white/10 bg-carbon py-16">
        <div className="mx-auto max-w-[1600px] px-5 text-center lg:px-10">
          <SectionHeading align="center" kicker="Got footage?" title={<>Spin in front of our <span className="text-crimson">lenses</span></>} />
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-sm text-ash">
              RBX media crews cover every major local event. Tag your clips and they might feature in the next reel.
            </p>
          </Reveal>
        </div>
      </section>

      <Lightbox
        images={lightbox?.items ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onNavigate={(i) => setLightbox((lb) => (lb ? { ...lb, index: i } : lb))}
      />
    </PageShell>
  );
}
