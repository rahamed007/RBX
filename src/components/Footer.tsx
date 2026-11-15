import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Logo, { XMark } from './Logo';
import { navLinks, players, socials } from '../lib/data';

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-carbon">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-crimson/10 blur-[140px]" />

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-5 py-14 lg:flex-row lg:items-center lg:px-10">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> The roar is growing
            </p>
            <h3 className="mt-3 font-display text-4xl uppercase leading-none text-bone sm:text-5xl">
              Join the <span className="text-crimson">Roar</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 border border-crimson bg-crimson px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-crimson-deep hover:shadow-[0_0_30px_rgba(225,6,0,0.5)]"
            >
              About RBX
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={toTop}
              className="group inline-flex items-center gap-2 border border-white/20 px-7 py-4 font-display text-sm uppercase tracking-[0.2em] text-bone transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ash">
            Bangladesh’s first-ever Beyblade X national team. Founded in Dhaka, feared everywhere the spin takes us.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center border border-white/15 text-bone/70 transition-all duration-300 hover:-translate-y-1 hover:border-crimson hover:bg-crimson/10 hover:text-crimson"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.3em] text-gold">Explore</h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="group flex items-center gap-2 text-sm text-ash transition-colors hover:text-bone">
                  <span className="h-px w-0 bg-crimson transition-all duration-300 group-hover:w-4" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.3em] text-gold">The Bladers</h4>
          <ul className="mt-5 space-y-3">
            {players.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link to={`/players/${p.slug}`} className="group flex items-center gap-2 text-sm text-ash transition-colors hover:text-bone">
                  <span className="h-px w-0 bg-crimson transition-all duration-300 group-hover:w-4" />
                  {p.handle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.3em] text-gold">Stay in the loop</h4>
          <p className="mt-5 text-sm text-ash">Tournament alerts, roster news, and academy openings — straight to your inbox.</p>
          {subscribed ? (
            <p className="mt-4 border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
              Welcome to the roar. Check your inbox.
            </p>
          ) : (
            <form
              className="mt-4 flex"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-white/15 bg-void px-4 py-3 text-sm text-bone placeholder:text-smoke focus:border-crimson focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 border border-crimson bg-crimson px-5 font-display text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-crimson-deep"
              >
                Join
              </button>
            </form>
          )}
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-smoke">HQ · Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative select-none overflow-hidden border-t border-white/10 py-6">
        <p className="whitespace-nowrap text-center font-display text-[11vw] uppercase leading-none tracking-tight text-stroke-faint opacity-60">
          Royal Bengal X — Roar Of The Delta
        </p>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-smoke sm:flex-row lg:px-10">
          <p>© 2026 Royal Bengal X (RBX). Bangladesh’s First Beyblade X National Team.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse-red rounded-full bg-crimson" />
            Spinning since 2023 · <span className="font-bengali">ঢাকা</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
