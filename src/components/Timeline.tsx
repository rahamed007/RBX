import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { XMark } from './Logo';
import type { TimelineEvent } from '../lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: { trigger: wrapRef.current, start: 'top 70%', end: 'bottom 60%', scrub: true },
          }
        );
      }
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />
      <div
        ref={lineRef}
        className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-crimson via-crimson to-gold md:left-1/2 md:-translate-x-px"
      />
      <div className="space-y-14">
        {events.map((e, i) => (
          <div key={i} className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'}`}>
            <span
              className={`absolute left-4 top-1 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center border border-crimson/60 bg-void ${
                i % 2 === 0 ? 'md:left-auto md:-translate-x-1/2 md:right-0' : 'md:-translate-x-1/2 md:left-0'
              }`}
            >
              <XMark className="h-3 w-3 text-crimson" />
            </span>
            <div className={`glass clip-card-sm p-6 transition-all duration-500 hover:border-crimson/50 ${i % 2 === 0 ? 'md:mr-0' : ''}`}>
              <span className="font-display text-3xl text-crimson">{e.year}</span>
              <h4 className="mt-1 font-display text-xl uppercase tracking-wide text-bone">{e.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ash">{e.body}</p>
              <span className="mt-3 inline-block border border-gold/40 bg-gold/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold">
                {e.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
