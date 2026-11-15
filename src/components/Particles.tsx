import { useEffect, useRef } from 'react';

interface ParticlesProps {
  density?: number;
  className?: string;
  goldRatio?: number;
}

interface Ember {
  x: number;
  y: number;
  r: number;
  vy: number;
  drift: number;
  phase: number;
  alpha: number;
  gold: boolean;
}

export default function Particles({ density = 42, className = '', goldRatio = 0.18 }: ParticlesProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const parts: Ember[] = Array.from({ length: density }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      r: 0.6 + Math.random() * 1.9,
      vy: -(0.15 + Math.random() * 0.55),
      drift: 0.2 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.25 + Math.random() * 0.6,
      gold: Math.random() < goldRatio,
    }));

    let t = 0;
    const loop = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y += p.vy;
        p.x += Math.sin(t * p.drift + p.phase) * 0.35;
        if (p.y < -12) {
          p.y = h + 12;
          p.x = Math.random() * w;
        }
        const flicker = 0.55 + 0.45 * Math.sin(t * 3 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x % (w + 20), p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(212,175,55,${(p.alpha * flicker).toFixed(3)})`
          : `rgba(225,6,0,${(p.alpha * flicker).toFixed(3)})`;
        ctx.shadowColor = p.gold ? 'rgba(212,175,55,0.8)' : 'rgba(225,6,0,0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [density, goldRatio]);

  return <canvas ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true" />;
}
