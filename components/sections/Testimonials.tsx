'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { MoveHorizontal, Pause, Play, Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import type { Testimonial } from '@/lib/data/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="card group flex h-full flex-col p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ember-500/40 hover:shadow-card sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-ember-400 text-ember-400" aria-hidden />
          ))}
        </div>
        <Quote
          aria-hidden
          strokeWidth={1}
          className="h-7 w-7 shrink-0 text-ember-500/25 transition-colors duration-500 group-hover:text-ember-500/60"
        />
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-steel-200 md:text-[15px]">“{t.quote}”</p>

      <footer className="mt-6 flex items-center gap-3.5 border-t border-steel-800/70 pt-5">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-ember-500/40 transition-all duration-500 group-hover:ring-ember-500">
          <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-semibold uppercase tracking-wide text-white">{t.name}</p>
          <p className="truncate text-xs text-steel-400">{t.role}</p>
        </div>
        <span className="shrink-0 rounded-full border border-ember-500/30 bg-ember-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ember-400">
          {t.result}
        </span>
      </footer>
    </article>
  );
}

export function Testimonials() {
  // Gate UI preferences post-hydration: framer-motion's useReducedMotion resolves
  // synchronously on first client render, so branching on it directly would mismatch SSR.
  const [prefs, setPrefs] = useState({ reduce: false, coarse: false });
  const [manualPaused, setManualPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewportRef, { amount: 0.15, once: false });

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqCoarse = window.matchMedia('(pointer: coarse)');
    const update = () => setPrefs({ reduce: mqReduce.matches, coarse: mqCoarse.matches });
    update();
    mqReduce.addEventListener('change', update);
    mqCoarse.addEventListener('change', update);
    return () => {
      mqReduce.removeEventListener('change', update);
      mqCoarse.removeEventListener('change', update);
    };
  }, []);

  const { reduce, coarse } = prefs;
  const allowScroll = coarse || reduce;
  const running = !allowScroll && inView && !hovered && !manualPaused;
  const duration = Math.max(42, testimonials.length * 8);

  const unit = (t: Testimonial) => (
    <div key={t.id} className="mx-3 w-[320px] shrink-0 snap-start sm:w-[380px] lg:w-[420px]">
      <TestimonialCard t={t} />
    </div>
  );

  return (
    <section id="testimonials" className="section relative overflow-hidden bg-ink-950">
      <div className="grid-overlay" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[60vw] -translate-x-1/2 rounded-full bg-ember-500/[0.07] blur-[140px]"
      />

      <div className="container relative">
        <SectionHeading
          eyebrow="Member Stories"
          title={
            <>
              Real People. <span className="text-gradient">Real Results.</span>
            </>
          }
          description="8,500+ members, one shared story: showing up at the forge changes everything. Here's what they say."
        />

        {reduce ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 0.07}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div
            className="mt-14"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div ref={viewportRef} className="relative">
              {!allowScroll && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-ink-950 to-transparent md:block lg:w-24"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-ink-950 to-transparent md:block lg:w-24"
                  />
                </>
              )}

              <div
                className={cn(
                  'no-scrollbar snap-x overflow-x-auto touch-pan-x',
                  !allowScroll && 'md:overflow-hidden',
                )}
              >
                <div
                  className="flex w-max items-stretch md:animate-marquee"
                  style={
                    {
                      '--marquee-duration': `${duration}s`,
                      animationPlayState: running ? 'running' : 'paused',
                    } as CSSProperties
                  }
                >
                  <div className="flex">{testimonials.map(unit)}</div>
                  <div className="flex" aria-hidden>
                    {testimonials.map(unit)}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              {allowScroll ? (
                <p className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-steel-600">
                  <MoveHorizontal className="h-4 w-4 shrink-0 text-ember-500/80" aria-hidden />
                  {reduce ? 'Auto-scroll off · browse reviews' : 'Swipe to explore reviews'}
                </p>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setManualPaused((v) => !v)}
                    onFocus={() => setHovered(true)}
                    onBlur={() => setHovered(false)}
                    aria-pressed={manualPaused}
                    aria-label={manualPaused ? 'Resume auto-scrolling reviews' : 'Pause auto-scrolling reviews'}
                    className="inline-flex items-center gap-2.5 rounded-full border border-steel-700 bg-steel-950/60 px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-steel-200 backdrop-blur transition-colors duration-300 hover:border-ember-500 hover:text-ember-400"
                  >
                    {manualPaused ? (
                      <Play className="h-3.5 w-3.5" aria-hidden />
                    ) : (
                      <Pause className="h-3.5 w-3.5" aria-hidden />
                    )}
                    {manualPaused ? 'Resume' : 'Pause'}
                  </button>
                  <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-steel-600 lg:block">
                    Auto-scroll pauses on hover
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}