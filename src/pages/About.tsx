import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Coins, Globe2, HeartHandshake, Trophy, Users } from 'lucide-react';
import PageShell from '../components/PageShell';
import Particles from '../components/Particles';
import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import ParallaxImage from '../components/ParallaxImage';
import Magnetic from '../components/Magnetic';
import Marquee from '../components/Marquee';
import { Emblem, XMark } from '../components/Logo';
import { players, recordSummary, timeline } from '../lib/data';

export default function About() {
  const captain = players[0];
  const founder = players[1];

  return (
    <PageShell>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="h-full w-full scale-110 object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/50 to-void" />
        </div>
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-crimson/20 blur-[150px]" />
        <Particles className="absolute inset-0 h-full w-full" density={40} />
        <div className="absolute inset-0 bg-grid opacity-50" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-40 lg:px-10">
          <Reveal y={24}>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> Our Story · Est. 2023
            </p>
          </Reveal>
          <Reveal delay={0.1} y={50}>
            <h1 className="mt-6 font-display text-[13vw] uppercase leading-[0.88] text-bone sm:text-[9vw] lg:text-[8.5rem]">
              From Dhaka
              <br />
              to the <span className="text-glow-red text-crimson">world</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
              Royal Bengal X is more than a team — it’s a movement proving that Bangladesh belongs on the international
              beyblade stage. <span className="font-bengali text-bone/80">ঢাকা থেকে বিশ্বমঞ্চ।</span>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex items-center gap-6">
              <Emblem className="h-16 w-16 animate-float-y" />
              <p className="max-w-sm text-xs uppercase leading-relaxed tracking-[0.2em] text-smoke">
                Bangladesh’s first-ever Beyblade X national team — nine bladers, one roar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee
        dark
        items={['Compete', 'Community', 'Access', 'Represent Bangladesh', 'RBX Academy', 'Tiger Starter Kit']}
      />

      {/* ================= ORIGINS ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading kicker="Origins" title={<>Born in a garage, <span className="text-crimson">raised by roaring crowds</span></>} />
            <Reveal delay={0.15}>
              <p className="mt-8 leading-relaxed text-ash">
                In the summer of 2023, Shadow SF and CMX turned a rented Dhanmondi garage into a training hall: one
                stadium, three tops, and a hand-painted Bengal tiger on the wall. Word spread. Rooftop battles became
                parking-lot tournaments; tournaments became leagues; leagues became a national team.
              </p>
              <p className="mt-4 leading-relaxed text-ash">
                Today RBX is Bangladesh’s first official Beyblade X national team — nine athletes across six divisions,
                with a mission that runs deeper than trophies: <span className="text-bone">to build the infrastructure,
                community and affordability that lets any kid in Bangladesh pick up a launcher and dream international.</span>
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, t: '92', l: 'Career podiums' },
                  { icon: Globe2, t: '3', l: 'Countries competed' },
                  { icon: Users, t: '1,200+', l: 'Academy bladers' },
                  { icon: Coins, t: '½ price', l: 'Starter kits' },
                ].map((s) => (
                  <div key={s.l} className="glass clip-card-sm p-6 transition-all duration-500 hover:border-crimson/50">
                    <s.icon className="h-5 w-5 text-crimson" />
                    <p className="mt-3 font-display text-3xl text-bone">{s.t}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-ash">{s.l}</p>
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
            <Reveal delay={0.3} className="absolute -bottom-6 -right-3 sm:-right-6">
              <div className="glass gold-edge clip-card-sm px-6 py-4">
                <p className="font-display text-xl text-gold">One Roar</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ash">Nine blades · One nation</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= CAPTAIN & FOUNDER ================= */}
      <section className="border-y border-white/10 bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] space-y-16 px-5 lg:px-10">
          {/* captain */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal y={50}>
              <ParallaxImage src={captain.image} alt="Captain CMX" speed={0.08} className="clip-card red-edge aspect-[4/5] max-h-[560px]" />
            </Reveal>
            <div>
              <SectionHeading kicker="The Captain" title={<>CMX — <span className="text-crimson">The Tiger’s Edge</span></>} />
              <Reveal delay={0.15}>
                <blockquote className="mt-8 border-l-2 border-crimson pl-6">
                  <p className="font-display text-2xl uppercase leading-snug text-bone sm:text-3xl">
                    “We don’t chase storms. <span className="text-crimson">We are the storm.</span>”
                  </p>
                </blockquote>
                <p className="mt-6 leading-relaxed text-ash">
                  Mehedi Hasan Chowdhury — known to every arena as CMX — co-founded RBX and captains it with a
                  left-spin attack game that has terrified national brackets since 2023. Two national Open titles,
                  back-to-back G1 Ranking crowns and a SEA Open silver medal carry his record.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ash">
                  {['2× Bangladesh National Open Champion', '2× G1 National Ranking Champion', 'SEA Beyblade X Open Silver · KL 2026', 'Signature blade: Rogue Fang Xodus-9'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <XMark className="h-3 w-3 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/players/${captain.slug}`}
                  className="mt-8 inline-flex items-center gap-2 border border-crimson px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-crimson transition-all duration-300 hover:bg-crimson hover:text-white"
                >
                  Full Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* founder */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeading kicker="The Founder" title={<>Shadow SF — <span className="text-shimmer-gold">The Silent Storm</span></>} />
              <Reveal delay={0.15}>
                <blockquote className="mt-8 border-l-2 border-gold pl-6">
                  <p className="font-display text-2xl uppercase leading-snug text-bone sm:text-3xl">
                    “The blade remembers <span className="text-gold">what the hand forgets.</span>”
                  </p>
                </blockquote>
                <p className="mt-6 leading-relaxed text-ash">
                  Shahriar Farhan built everything behind the jersey: the training system, the league formats, the
                  academy, the affordable starter kits — then stepped onto the podium himself to win Individual League
                  S1. As founder and vice-captain he runs RBX’s community engine from Dhaka to the divisions.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ash">
                  {['Founder & Vice Captain of RBX', 'Individual League S1 Champion', 'Architect of the RBX Academy program', 'Signature blade: Shade Serpent Surge-0'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <XMark className="h-3 w-3 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/players/${founder.slug}`}
                  className="mt-8 inline-flex items-center gap-2 border border-gold/60 px-6 py-3 font-display text-xs uppercase tracking-[0.25em] text-gold transition-all duration-300 hover:bg-gold hover:text-void"
                >
                  Full Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal y={50} className="order-1 lg:order-2">
              <ParallaxImage src={founder.image} alt="Founder Shadow SF" speed={0.1} className="clip-card gold-edge aspect-[4/5] max-h-[560px]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= ROSTER ================= */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading kicker="Complete Roster" title={<>Nine blades, <span className="text-crimson">one banner</span></>} />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} y={26}>
                <Link
                  to={`/players/${p.slug}`}
                  className="group flex items-center gap-5 border border-white/10 bg-graphite/60 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-crimson/60 hover:bg-graphite"
                >
                  <img src={p.image} alt={p.handle} loading="lazy" className="h-16 w-16 shrink-0 border border-white/10 object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-lg uppercase text-bone transition-colors group-hover:text-crimson">
                      {p.handle}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-ash">
                      {p.role} · {p.type}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-smoke transition-all duration-300 group-hover:translate-x-1 group-hover:text-crimson" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL ================= */}
      <section className="relative overflow-hidden border-y border-white/10 bg-carbon py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-crimson/15 blur-[140px]" />
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading kicker="International" title={<>Carrying the flag — <span className="text-crimson">including Malaysia</span></>} />
            <Reveal delay={0.15}>
              <p className="mt-8 leading-relaxed text-ash">
                RBX made history as the first Bangladeshi beyblade squad to podium abroad — bronze at the MYBX
                Invitational in Kuala Lumpur (2025), then silver at the SEA Beyblade X Open (2026). Back home, the team
                hosted the Dhaka Dawn International, bringing world-class competition to Bangladeshi soil for the first
                time.
              </p>
              <p className="mt-4 leading-relaxed text-ash">
                The 2027 calendar adds Thailand and Indonesia, with a World Beyblade X Invitational qualification already
                secured. Every jersey worn abroad carries the same message: <span className="text-bone">Bangladesh spins with the best.</span>
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Malaysia · KL', 'Thailand · 2027', 'Indonesia · 2027', 'World Invitational · Qualified'].map((c) => (
                  <span key={c} className="border border-gold/40 bg-gold/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <Reveal y={40}>
              <ParallaxImage src="/assets/events/malaysia.jpg" alt="Kuala Lumpur" speed={0.08} className="clip-card aspect-[3/4]" />
            </Reveal>
            <Reveal delay={0.12} y={40}>
              <ParallaxImage src="/assets/events/flag.jpg" alt="Bangladesh flag" speed={0.12} className="clip-card mt-10 aspect-[3/4]" />
            </Reveal>
            <Reveal delay={0.2} className="absolute -bottom-5 left-1/2 -translate-x-1/2">
              <div className="glass red-edge clip-card-sm px-6 py-4 text-center">
                <p className="font-display text-2xl text-crimson">{recordSummary.countries}</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-ash">Nations represented</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY / ACCESS / TOURNAMENTS ================= */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-crimson/10 blur-[140px]" />
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <SectionHeading
            kicker="Giving Back"
            title={<>More than a team — a <span className="text-crimson">movement</span></>}
            sub="RBX invests in the grass beneath the sport: coaching, affordability and the tournaments that keep the community spinning."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                t: 'RBX Academy',
                d: 'Free weekly clinics across all eight divisions, run by roster players. 1,200+ young bladers trained, with a scholarship track for the most dedicated.',
              },
              {
                icon: Coins,
                t: 'Affordable Access',
                d: 'The Tiger Starter Kit — stadium, two tops, launcher and rulebook — assembled locally at under half the import price, with kits donated to academy graduates.',
              },
              {
                icon: HeartHandshake,
                t: 'Tournament Support',
                d: 'RBX staff, formats, equipment and seeding expertise support grassroots organizers so local leagues can run year-round in every division.',
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.12} y={44}>
                <div className="group glass clip-card-sm h-full p-8 transition-all duration-500 hover:-translate-y-2 hover:border-crimson/50">
                  <c.icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-5 font-display text-2xl uppercase text-bone">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
              {[
                { v: 1200, s: '+', l: 'Bladers trained' },
                { v: 40, s: '+', l: 'Free clinics' },
                { v: 300, s: '+', l: 'Kits donated' },
                { v: 8, s: '', l: 'Divisions served' },
              ].map((s) => (
                <div key={s.l} className="bg-void p-8 text-center">
                  <CountUp value={s.v} suffix={s.s} className="font-display text-4xl text-crimson lg:text-5xl" />
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ash">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="border-t border-white/10 bg-carbon py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <SectionHeading align="center" kicker="Milestones" title={<>The Bengal <span className="text-crimson">chronicle</span></>} />
          <div className="mt-16">
            <Timeline events={timeline} />
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="absolute inset-0">
          <img src="/assets/events/crowd.jpg" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/70 to-void" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-10">
          <Reveal y={30}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">The Vision</p>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[1.02] text-bone sm:text-6xl">
              “To stand on any arena on earth and hear the crowd roar for <span className="text-glow-red text-crimson">Bangladesh.</span>”
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-ash">
              RBX exists to turn a garage dream into a national legacy — world titles, grassroots arenas in every
              division, and a launcher in the hands of every kid who dares to spin.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Link
                  to="/players"
                  className="group inline-flex items-center gap-3 border border-crimson bg-crimson px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_0_50px_rgba(225,6,0,0.5)]"
                >
                  Meet The Bladers <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 border border-white/20 px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-bone transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  See The Frames
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
