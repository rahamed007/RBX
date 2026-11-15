import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Coins,
  Facebook,
  Globe2,
  HeartHandshake,
  Instagram,
  MapPin,
  Trophy,
  Twitter,
  Users,
  Youtube,
} from 'lucide-react';
import Particles from '../components/Particles';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import Magnetic from '../components/Magnetic';
import PlayerCard from '../components/PlayerCard';
import NewsCard from '../components/NewsCard';
import TournamentCard from '../components/TournamentCard';
import ParallaxImage from '../components/ParallaxImage';
import { Emblem, XMark } from '../components/Logo';
import { news, players, recordSummary, socials, tournaments } from '../lib/data';
import { boot } from '../lib/boot';

gsap.registerPlugin(ScrollTrigger);

const socialIcons = { facebook: Facebook, instagram: Instagram, youtube: Youtube, twitter: Twitter };

const slideshow = [
  { src: '/assets/podium.jpg', caption: 'Team League Bangladesh S2 — Champions’ Podium · Dhaka 2026' },
  { src: '/assets/battle.jpg', caption: 'Burst finish at the SEA Beyblade X Open · Kuala Lumpur 2026' },
  { src: '/assets/events/team-huddle.jpg', caption: 'Nine blades, one spin — the squad before battle' },
  { src: '/assets/events/stadium.jpg', caption: 'Lights up for the Bangladesh National Open' },
  { src: '/assets/events/malaysia.jpg', caption: 'Kuala Lumpur — RBX on the international stage' },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  /* ---------------- hero entrance ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = (el: HTMLElement) => {
        const text = el.textContent ?? '';
        el.textContent = '';
        const frag = document.createDocumentFragment();
        for (const ch of text) {
          const s = document.createElement('span');
          s.className = 'inline-block will-change-transform';
          s.textContent = ch === ' ' ? '\u00A0' : ch;
          frag.appendChild(s);
        }
        el.appendChild(frag);
        return Array.from(el.querySelectorAll('span'));
      };

      const l1 = document.getElementById('hero-line-1');
      const l2 = document.getElementById('hero-line-2');
      const chars1 = l1 ? split(l1) : [];
      const chars2 = l2 ? split(l2) : [];

      const base = boot.done ? 0.15 : 2.35;
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.fromTo('#hero-emblem', { scale: 0.2, opacity: 0, rotate: -14 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: 'elastic.out(1, 0.55)' }, base)
        .fromTo('#hero-kicker', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, base + 0.5)
        .fromTo(chars1, { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.028 }, base + 0.65)
        .fromTo(chars2, { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.028 }, base + 0.95)
        .fromTo('#hero-sub', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, base + 1.35)
        .fromTo('#hero-ctas > *', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 }, base + 1.5)
        .fromTo('#hero-stats > *', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, base + 1.7)
        .fromTo('#hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, base + 2);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* ---------------- hero mouse parallax ---------------- */
  const onHeroMove = (e: React.MouseEvent) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dx = (e.clientX - w / 2) / w;
    const dy = (e.clientY - h / 2) / h;
    gsap.to(bgRef.current, { x: dx * -34, y: dy * -22, duration: 1.4, ease: 'power3.out' });
    gsap.to(contentRef.current, { x: dx * 16, y: dy * 10, duration: 1.4, ease: 'power3.out' });
  };

  /* ---------------- slideshow ---------------- */
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slideshow.length), 5200);
    return () => clearInterval(id);
  }, []);

  const featured = tournaments.filter((t) => ['t15', 't17', 't3'].includes(t.id));
  const featuredPlayers = players.filter((p) => p.featured);

  return (
    <>
      {/* ================= HERO ================= */}
      <section ref={heroRef} onMouseMove={onHeroMove} className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 scale-110">
          <img src="/assets/hero-bg.jpg" alt="RBX arena" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/40 to-void" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-transparent to-void/70" />
        </div>
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-crimson/25 blur-[160px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-crimson-deep/30 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <Particles className="absolute inset-0 h-full w-full" density={54} />

        {/* side rails */}
        <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 items-center gap-3 lg:flex">
          <span className="h-px w-16 bg-crimson" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-ash">Est. 2023 — Dhaka</span>
        </div>
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-3 lg:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-ash">National Beyblade X Team</span>
          <span className="h-px w-16 bg-crimson" />
        </div>

        <div ref={contentRef} className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center justify-center px-5 pb-28 pt-36 text-center lg:px-10">
          <div id="hero-emblem" className="relative">
            <div className="absolute inset-0 -z-10 scale-150 animate-pulse-red rounded-full bg-crimson/25 blur-3xl" />
            <Emblem className="h-24 w-24 sm:h-32 sm:w-32" />
          </div>

          <p id="hero-kicker" className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.5em] text-gold">
            <XMark className="h-3 w-3 text-crimson" />
            Bangladesh’s First-Ever Beyblade X National Team
            <XMark className="h-3 w-3 text-crimson" />
          </p>

          <h1 className="mt-6 font-display uppercase leading-[0.88] tracking-tight">
            <span id="hero-line-1" className="block text-[15vw] text-bone sm:text-[11vw] lg:text-[9.5rem]">
              Bangladesh.
            </span>
            <span id="hero-line-2" className="text-glow-red block text-[15vw] text-crimson sm:text-[11vw] lg:text-[9.5rem]">
              Unleashed.
            </span>
          </h1>

          <p id="hero-sub" className="mt-8 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
            Nine bladers. One roar. Royal Bengal X carries the flag of Bangladesh onto the world beyblade stage —
            <span className="ml-1 font-bengali text-bone/80">বাংলাদেশের গর্ব, স্পিনে বিশ্বজয়</span>
          </p>

          <div id="hero-ctas" className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                to="/players"
                className="group inline-flex items-center gap-3 border border-crimson bg-crimson px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-white shadow-[0_0_40px_rgba(225,6,0,0.35)] transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_0_60px_rgba(225,6,0,0.55)]"
              >
                Explore The Team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/achievements"
                className="group inline-flex items-center gap-3 border border-gold/60 px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
              >
                <Trophy className="h-4 w-4" />
                Our Achievements
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* hero stats strip */}
        <div id="hero-stats" className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-void/70 backdrop-blur-md">
          <div className="mx-auto grid max-w-[1600px] grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {[
              { v: recordSummary.totalPodiums, s: '', l: 'Team Podiums' },
              { v: recordSummary.firstPlace, s: '', l: 'Tournament Titles' },
              { v: players.length, s: '', l: 'National Bladers' },
              { v: recordSummary.countries, s: '', l: 'Countries Represented' },
            ].map((stat) => (
              <div key={stat.l} className="px-6 py-6 text-center">
                <CountUp value={stat.v} suffix={stat.s} className="font-display text-3xl text-bone sm:text-4xl" />
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ash">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="hero-scroll" className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ash lg:flex">
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-crimson" />
        </div>
      </section>

      <Marquee
        items={[
          'Royal Bengal X',
          'Bangladesh’s First Beyblade X National Team',
          'Est. 2023 Dhaka',
          '92 Podiums · 34 Titles',
          'Representing Bangladesh Worldwide',
        ]}
      />

      {/* ================= TEAM INTRO ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-crimson/10 blur-[120px]" />
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading
              kicker="The Team"
              title={
                <>
                  A squad forged in <span className="text-crimson">spin</span>,
                  <br />
                  crowned by <span className="text-shimmer-gold">will</span>
                </>
              }
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl leading-relaxed text-ash">
                In 2023, two bladers turned a rented Dhanmondi garage into the birthplace of a movement. Today Royal
                Bengal X is Bangladesh’s first national Beyblade X team — nine athletes from six divisions, united by
                one belief: <span className="text-bone">the delta’s roar belongs on the world stage.</span>
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-ash">
                From local ranked clashes in Dhaka to international podiums in Kuala Lumpur, RBX competes, coaches, and
                builds the infrastructure that Bangladesh’s beyblade community always deserved.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { icon: Trophy, t: 'Compete', d: 'World-stage ambition' },
                  { icon: HeartHandshake, t: 'Community', d: 'Clinics in 8 divisions' },
                  { icon: Coins, t: 'Access', d: 'Affordable kits for all' },
                ].map((p) => (
                  <div key={p.t} className="group glass clip-card-sm p-5 transition-all duration-500 hover:border-crimson/50">
                    <p.icon className="h-6 w-6 text-crimson transition-transform duration-500 group-hover:scale-110" />
                    <h4 className="mt-3 font-display text-sm uppercase tracking-[0.15em] text-bone">{p.t}</h4>
                    <p className="mt-1 text-xs text-ash">{p.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative" data-parallax-wrap>
            <ParallaxImage
              src="/assets/team-photo.jpg"
              alt="The official Royal Bengal X squad photo"
              speed={0.1}
              className="clip-card red-edge aspect-[4/3]"
            />
            <Reveal delay={0.25} className="absolute -bottom-8 -left-4 sm:-left-8">
              <div className="glass red-edge clip-card-sm px-6 py-5">
                <p className="font-display text-3xl text-gold">2023</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ash">Founded in Dhaka</p>
              </div>
            </Reveal>
            <Reveal delay={0.35} className="absolute -right-3 -top-6 hidden sm:block">
              <div className="animate-float-y glass gold-edge clip-card-sm px-5 py-4">
                <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                  <MapPin className="h-3 w-3" /> Dhaka → Kuala Lumpur
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PLAYERS ================= */}
      <section className="relative border-y border-white/10 bg-carbon py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[720px] -translate-x-1/2 rounded-full bg-crimson/10 blur-[140px]" />
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading kicker="The Roster" title={<>Meet the <span className="text-crimson">Bladers</span></>} />
            <Reveal delay={0.2}>
              <Link
                to="/players"
                className="group inline-flex items-center gap-2 border border-white/15 px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-bone transition-all duration-300 hover:border-crimson hover:text-crimson"
              >
                Full Squad
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPlayers.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1} y={60}>
                <PlayerCard player={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS SHOWCASE ================= */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-stripes opacity-40" />
        <div className="relative mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading
            kicker="Championship DNA"
            title={<>Built on <span className="text-stroke-red">podiums</span></>}
            sub="Ninety-two podiums across nine tournament categories — from Dhanmondi parking-lot clashes to international finals in Malaysia."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.12} y={50}>
                <TournamentCard t={t} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
              {[
                { v: recordSummary.totalPodiums, l: 'Total Podiums' },
                { v: recordSummary.firstPlace, l: 'First-Place Victories' },
                { v: recordSummary.secondPlace, l: 'Second-Place Finishes' },
                { v: recordSummary.thirdPlace, l: 'Third-Place Finishes' },
              ].map((s) => (
                <div key={s.l} className="group bg-void p-8 text-center transition-colors duration-500 hover:bg-graphite">
                  <CountUp value={s.v} className="font-display text-5xl text-bone transition-colors group-hover:text-crimson lg:text-6xl" />
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ash">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <Magnetic>
                <Link
                  to="/achievements"
                  className="group inline-flex items-center gap-3 border border-crimson bg-crimson/10 px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-crimson transition-all duration-300 hover:bg-crimson hover:text-white hover:shadow-[0_0_50px_rgba(225,6,0,0.4)]"
                >
                  Full Championship History
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= LATEST NEWS ================= */}
      <section className="relative border-y border-white/10 bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading kicker="War Room" title={<>Latest <span className="text-crimson">Dispatch</span></>} />
            <Reveal delay={0.2}>
              <Link
                to="/news"
                className="group inline-flex items-center gap-2 border border-white/15 px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-bone transition-all duration-300 hover:border-crimson hover:text-crimson"
              >
                All News
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {news.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1} y={50}>
                <NewsCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CINEMATIC SLIDESHOW ================= */}
      <section className="relative h-[70vh] overflow-hidden lg:h-[85vh]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          >
            <img src={slideshow[slide].src} alt="" className="h-full w-full animate-kenburns object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-void/60" />
        <div className="absolute inset-0 bg-stripes opacity-20" />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 pb-12 lg:flex-row lg:items-end lg:justify-between lg:px-10">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
                <span className="animate-ticker-dot inline-block h-1.5 w-1.5 rounded-full bg-crimson" />
                Cinematic Reel · {String(slide + 1).padStart(2, '0')} / {String(slideshow.length).padStart(2, '0')}
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={slide}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 max-w-xl font-display text-2xl uppercase leading-tight text-bone sm:text-3xl"
                >
                  {slideshow[slide].caption}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2">
              {slideshow.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 transition-all duration-500 ${i === slide ? 'w-12 bg-crimson' : 'w-6 bg-white/25 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-crimson/10 blur-[130px]" />
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div className="relative order-2 lg:order-1" data-parallax-wrap>
            <ParallaxImage
              src="/assets/events/malaysia.jpg"
              alt="Kuala Lumpur international stage"
              speed={0.1}
              className="clip-card gold-edge aspect-[4/3]"
            />
            <Reveal delay={0.3} className="absolute -bottom-6 right-6">
              <div className="glass gold-edge clip-card-sm px-6 py-4">
                <p className="font-display text-2xl text-gold">2nd</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ash">SEA Open · KL 2026</p>
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading kicker="International" title={<>The world <span className="text-crimson">stage</span></>} />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl leading-relaxed text-ash">
                RBX doesn’t just compete at home. The team has represented Bangladesh at invitationals and opens across
                Southeast Asia — flying the crimson flag from Kuala Lumpur’s arenas to regional SEA circuits, with
                Thailand and Indonesia dates locked for 2027.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-8 space-y-4">
                {[
                  { year: '2025', event: 'MYBX Invitational — Bronze · Kuala Lumpur, Malaysia' },
                  { year: '2026', event: 'SEA Beyblade X Open — Silver · Kuala Lumpur, Malaysia' },
                  { year: '2026', event: 'Dhaka Dawn International — Bronze · Hosted in Bangladesh' },
                  { year: '2027', event: 'World Beyblade X Invitational — Qualified · TBD' },
                ].map((row) => (
                  <li key={row.event} className="group flex items-center gap-5 border-b border-white/10 pb-4">
                    <span className="font-display text-xl text-gold">{row.year}</span>
                    <span className="flex-1 text-sm text-bone transition-colors group-hover:text-crimson">{row.event}</span>
                    <Globe2 className="h-4 w-4 text-smoke transition-colors group-hover:text-crimson" />
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Bangladesh', 'Malaysia', 'Thailand · 2027', 'Indonesia · 2027'].map((c, i) => (
                  <span
                    key={c}
                    className={`border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${
                      i === 0 ? 'border-crimson/60 bg-crimson/10 text-crimson' : 'border-white/15 text-ash'
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0">
          <img src="/assets/community.jpg" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void" />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-5 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            kicker="Community Impact"
            title={<>The roar gives <span className="text-crimson">back</span></>}
            sub="RBX Academy runs free weekly clinics across all eight divisions of Bangladesh, and the Tiger Starter Kit keeps the sport affordable for every family."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Users, t: 'RBX Academy', d: 'Free weekly coaching clinics for bladers aged 10–18, run by roster players in every division.' },
              { icon: Coins, t: 'Tiger Starter Kit', d: 'A regulation stadium, two tops and a launcher — locally assembled at half the import price.' },
              { icon: Trophy, t: 'Arena Support', d: 'RBX staff, formats and equipment support local organizers running grassroots tournaments.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.12} y={44}>
                <div className="group glass clip-card-sm h-full p-7 transition-all duration-500 hover:-translate-y-2 hover:border-crimson/50">
                  <c.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" />
                  <h4 className="mt-4 font-display text-xl uppercase text-bone">{c.t}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
              {[
                { v: 1200, s: '+', l: 'Young bladers trained' },
                { v: 40, s: '+', l: 'Free clinics held' },
                { v: 300, s: '+', l: 'Starter kits donated' },
                { v: 8, s: '', l: 'Divisions reached' },
              ].map((s) => (
                <div key={s.l} className="bg-void/90 p-8 text-center">
                  <CountUp value={s.v} suffix={s.s} className="font-display text-4xl text-crimson lg:text-5xl" />
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ash">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= SOCIAL ================= */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading kicker="Connected" title={<>Follow the <span className="text-crimson">roar</span></>} sub="Every burst, every podium, every clinic — live across all platforms." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((s, i) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <Reveal key={s.name} delay={i * 0.08} y={44}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group glass clip-card-sm flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-2 hover:border-crimson/60 hover:shadow-[0_0_45px_rgba(225,6,0,0.25)]"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-bone transition-colors duration-300 group-hover:text-crimson" />
                      <ArrowUpRight className="h-4 w-4 text-smoke transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-crimson" />
                    </div>
                    <p className="mt-6 font-display text-3xl text-bone">{s.followers}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ash">Followers</p>
                    <p className="mt-4 text-sm font-semibold text-gold">{s.handle}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-smoke">{s.name}</p>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="relative mt-20 overflow-hidden border border-crimson/40 bg-gradient-to-r from-crimson-deep/40 via-carbon to-crimson-deep/40 px-8 py-16 text-center clip-card">
              <Particles className="absolute inset-0 h-full w-full" density={26} />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">The roar is only getting louder</p>
              <h3 className="relative mt-4 font-display text-4xl uppercase leading-none text-bone sm:text-6xl">
                Bangladesh. <span className="text-glow-red text-crimson">Unleashed.</span>
              </h3>
              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                  <Link to="/about" className="group inline-flex items-center gap-3 border border-crimson bg-crimson px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-crimson-deep">
                    Our Story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/gallery" className="inline-flex items-center gap-3 border border-white/20 px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-bone transition-all duration-300 hover:border-gold hover:text-gold">
                    View Gallery
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
