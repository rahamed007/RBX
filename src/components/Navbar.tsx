import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Instagram, Menu, Twitter, X, Youtube } from 'lucide-react';
import Logo from './Logo';
import { navLinks, socials } from '../lib/data';

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const html = document.documentElement;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) {
      document.body.style.overflow = 'hidden';
      html.classList.add('lenis-stopped');
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      html.classList.remove('lenis-stopped');
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      html.classList.remove('lenis-stopped');
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-white/10 bg-void/85 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 lg:px-10">
          <Logo />

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `group relative text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${
                    isActive ? 'text-crimson' : 'text-bone/80 hover:text-bone'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-crimson transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 md:flex">
              {socials.slice(0, 3).map((s) => {
                const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="grid h-9 w-9 place-items-center border border-white/15 text-bone/70 transition-all duration-300 hover:border-crimson hover:bg-crimson/10 hover:text-crimson hover:shadow-[0_0_18px_rgba(225,6,0,0.4)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center border border-white/15 text-bone transition-colors hover:border-crimson hover:text-crimson xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-void/97 backdrop-blur-2xl xl:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-crimson/20 blur-[120px]" />
            <div className="flex items-center justify-between px-5 py-5 lg:px-10">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center border border-white/15 text-bone transition-colors hover:border-crimson hover:text-crimson"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-4 border-b border-white/8 py-4 font-display text-4xl uppercase tracking-wide transition-colors sm:text-5xl ${
                        isActive ? 'text-crimson' : 'text-bone hover:text-crimson'
                      }`
                    }
                  >
                    <span className="font-body text-xs font-semibold tracking-[0.3em] text-gold">0{i + 1}</span>
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="flex items-center justify-between px-8 pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <p className="font-bengali text-sm text-ash">বাংলাদেশের প্রথম বেইব্লেড এক্স দল</p>
              <div className="flex items-center gap-3">
                {socials.slice(0, 3).map((s) => {
                  const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="grid h-10 w-10 place-items-center border border-white/15 text-bone/70 transition-all hover:border-crimson hover:text-crimson"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
