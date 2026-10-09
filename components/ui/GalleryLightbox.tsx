'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { gallery, galleryCategories, galleryFull } from '@/lib/data/gallery';
import type { GalleryCategory } from '@/lib/data/gallery';
import { cn } from '@/lib/utils';
import { SmartImage } from '@/components/ui/SmartImage';
import { SectionHeading } from '@/components/ui/SectionHeading';

const spanClasses = {
  normal: 'aspect-[4/5]',
  tall: 'aspect-[3/4]',
  wide: 'aspect-[4/3]',
} as const;

export function GalleryLightbox() {
  const [category, setCategory] = useState<GalleryCategory | 'All'>('All');
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (category === 'All' ? gallery : gallery.filter((g) => g.category === category)),
    [category],
  );

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setIndex((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length));
    },
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, step]);

  const current = index !== null ? items[index] : null;

  return (
    <div className="container relative">
      <SectionHeading
        eyebrow="Inside The Forge"
        title={
          <>
            Take A Look <span className="text-gradient">Around</span>
          </>
        }
        description="24,000 square feet of iron, sweat and everything in between. Filter your favourite training floors and tap any shot for a closer look."
      />

      {/* Category filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((cat) => {
          const active = category === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => {
                setCategory(cat.id);
                setIndex(null);
              }}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300',
                active ? 'text-ink-950' : 'border border-steel-700 text-steel-300 hover:border-ember-500/60 hover:text-ember-400',
              )}
            >
              {active && (
                <motion.span
                  layoutId="gallery-pill"
                  className="absolute inset-0 rounded-full bg-ember-gradient shadow-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <motion.div
        key={category}
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        className="mt-12 columns-2 gap-4 md:columns-3 xl:columns-4"
      >
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            variants={{
              hidden: { opacity: 0, y: 18, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${item.title}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-steel-800/80 text-left focus-visible:border-ember-500"
          >
            <div className={cn('relative overflow-hidden', spanClasses[item.span])}>
              <SmartImage
                src={item.src}
                alt={item.title}
                aspect="h-full w-full"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-ink-950/65 px-3 py-1 font-display text-[10px] font-medium uppercase tracking-[0.16em] text-steel-200 backdrop-blur-sm">
                {item.category}
              </span>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-base font-semibold uppercase tracking-wide text-white">{item.title}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-ember-400">View photo</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 translate-y-2 place-items-center rounded-full bg-ember-gradient text-ink-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.93, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-3xl border border-steel-700 shadow-card">
                <SmartImage
                  key={current.id}
                  src={galleryFull(current.src)}
                  alt={current.title}
                  aspect="aspect-[16/10]"
                  sizes="90vw"
                  priority
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-semibold uppercase tracking-wide text-white">{current.title}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-ember-400">
                    {current.category} · {String(index! + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="grid h-11 w-11 place-items-center rounded-full border border-steel-700 text-steel-200 transition-colors hover:border-ember-500 hover:text-ember-400"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="grid h-11 w-11 place-items-center rounded-full bg-ember-gradient text-ink-950 shadow-glow transition-transform hover:scale-105"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close lightbox"
                    className="grid h-11 w-11 place-items-center rounded-full border border-steel-700 text-steel-200 transition-colors hover:border-ember-500 hover:text-ember-400"
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}