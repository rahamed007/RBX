import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(onDone, 2200);
    const interval = setInterval(() => setProgress((p) => Math.min(100, p + Math.random() * 15)), 150);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative">
        <div className="absolute inset-0 -z-10 animate-pulse-red blur-3xl">
          <div className="h-40 w-40 rounded-full bg-crimson/40" />
        </div>
        <motion.img
          src="/assets/rbx-logo.jpg"
          alt="RBX"
          className="h-32 w-32 object-contain mix-blend-screen"
          initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <motion.p
        className="mt-8 font-display text-2xl uppercase tracking-[0.3em] text-bone"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Royal Bengal <span className="text-crimson">X</span>
      </motion.p>
      <div className="mt-6 h-px w-56 overflow-hidden bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-crimson to-gold"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>
      <p className="mt-3 font-bengali text-xs tracking-widest text-ash">বাংলাদেশের প্রথম বেইব্লেড এক্স দল</p>
    </motion.div>
  );
}
