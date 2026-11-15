import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, clipPath: 'inset(0 0 10% 0)', scale: 1.015 }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)', scale: 1 }}
      exit={{ opacity: 0, clipPath: 'inset(10% 0 0 0)' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
