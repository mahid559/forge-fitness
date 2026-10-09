'use client';

import { stats } from '@/lib/data/stats';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';

export function Stats() {
  return (
    <section aria-label="Forge Fitness key statistics" className="relative overflow-hidden bg-ink-950 py-16 md:py-20">
      <div className="grid-overlay" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/[0.07] blur-[130px]" />

      <Reveal className="container relative">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className={`px-2 lg:px-10 ${i > 0 ? 'lg:border-l lg:border-steel-800/70' : ''}`}
            >
              <Counter
                value={stat.value}
                decimals={stat.decimals}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-display text-5xl font-semibold uppercase tracking-tight text-white md:text-6xl"
              />
              <p className="mt-3 font-display text-sm font-medium uppercase tracking-[0.22em] text-ember-400">
                {stat.label}
              </p>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-steel-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}