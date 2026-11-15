import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface LightboxImage {
  src: string;
  caption: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && index !== null) onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft' && index !== null) onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col bg-void/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-5 lg:px-10">
            <span className="font-display text-sm uppercase tracking-[0.3em] text-ash">
              {index + 1} <span className="text-crimson">/</span> {images.length}
            </span>
            <button
              onClick={onClose}
              className="grid h-12 w-12 place-items-center border border-white/20 text-bone transition-colors hover:border-crimson hover:text-crimson"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onNavigate((index - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-void/60 text-bone backdrop-blur transition-colors hover:border-crimson hover:text-crimson sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                className="max-h-full"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={images[index].src}
                  alt={images[index].caption}
                  className="max-h-[74vh] w-auto max-w-full border border-white/10 object-contain shadow-[0_0_80px_rgba(225,6,0,0.25)]"
                />
                <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-ash sm:text-sm">
                  {images[index].caption}
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <button
              onClick={() => onNavigate((index + 1) % images.length)}
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-void/60 text-bone backdrop-blur transition-colors hover:border-crimson hover:text-crimson sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
