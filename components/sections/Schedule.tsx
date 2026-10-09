'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, MapPin, Users } from 'lucide-react';
import { schedule, levelStyles } from '@/lib/data/schedule';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Schedule() {
  const [active, setActive] = useState(0);
  const day = schedule[active];

  return (
    <section id="schedule" className="section relative overflow-hidden bg-ink-900">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-ember-500/10 blur-[150px]" />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Weekly Schedule"
            title={
              <>
                120 Classes. <span className="text-gradient">Every Week.</span>
              </>
            }
            description="Strength at sunrise, conditioning at lunch, combat at night — there's a slot built around your day. Book through the member app."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="#join" variant="outline" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Book A Class
            </Button>
          </Reveal>
        </div>

        {/* Day tabs */}
        <Reveal delay={0.05} className="mt-12">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Day of the week">
            {schedule.map((d, i) => {
              const selected = active === i;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={selected}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'relative shrink-0 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors',
                    selected ? 'text-ink-950' : 'border border-steel-700 text-steel-300 hover:border-ember-500/60 hover:text-ember-400',
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="schedule-pill"
                      className="absolute inset-0 rounded-full bg-ember-gradient shadow-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{d.short}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Class list */}
        <Reveal delay={0.1} className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-3xl border border-steel-800 bg-steel-950/60"
            >
              <div className="flex items-center justify-between border-b border-steel-800/80 bg-steel-900/50 px-5 py-4 sm:px-7">
                <p className="flex items-center gap-2.5 font-display text-lg font-semibold uppercase tracking-wide text-white">
                  <CalendarDays className="h-5 w-5 text-ember-400" aria-hidden />
                  {day.label}
                </p>
                <span className="text-xs uppercase tracking-[0.18em] text-steel-500">
                  {day.classes.length} classes
                </span>
              </div>

              <ul className="divide-y divide-steel-800/70">
                {day.classes.map((c) => (
                  <li key={`${day.id}-${c.time}`}>
                    <div className="group grid grid-cols-[64px_1fr] items-center gap-4 px-5 py-4 transition-colors hover:bg-steel-900/60 sm:grid-cols-[90px_1fr_auto_80px_110px_auto] sm:px-7">
                      <div className="flex flex-col items-start">
                        <span className="font-display text-lg font-semibold uppercase tracking-tight text-white sm:text-xl">
                          {c.time}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-steel-500">
                          <Clock className="h-3 w-3" aria-hidden />
                          {c.duration} min
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-display text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
                          {c.title}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-steel-400 sm:text-sm">
                          <MapPin className="h-3 w-3 shrink-0 text-ember-400" aria-hidden />
                          {c.coach}
                        </p>
                      </div>

                      <span className="hidden lg:block">
                        <span className={cn('rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider', levelStyles[c.level])}>
                          {c.level}
                        </span>
                      </span>

                      <div className="hidden sm:block">
                        <div className="flex items-center gap-1.5 text-xs text-steel-400">
                          <Users className="h-3.5 w-3.5 text-ember-400" aria-hidden />
                          {20 - c.spots} booked
                        </div>
                        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-steel-800">
                          <div
                            className="h-full rounded-full bg-ember-gradient"
                            style={{ width: `${((20 - c.spots) / 20) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="col-span-2 flex items-center justify-between gap-3 sm:col-span-1 sm:justify-end">
                        <span
                          className={cn(
                            'rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:hidden',
                            levelStyles[c.level],
                          )}
                        >
                          {c.level}
                        </span>
                        <a
                          href="#join"
                          className="inline-flex items-center gap-1.5 rounded-full border border-steel-700 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-steel-200 transition-all hover:border-ember-500 hover:text-ember-400"
                        >
                          Book
                          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-steel-600">
            Times shown in PT · Book up to 7 days ahead · 24h cancellation free
          </p>
        </Reveal>
      </div>
    </section>
  );
}