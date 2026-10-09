'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Dumbbell, Flame, Handshake, HeartPulse, Users } from 'lucide-react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import { aboutFeatures } from '@/lib/data/features';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const featureIcons = {
  coaching: Users,
  equipment: Dumbbell,
  recovery: HeartPulse,
  community: Handshake,
} as const;

export function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduce) return;
      gsap.to('[data-parallax-main]', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
      gsap.to('[data-parallax-float]', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="about" className="section relative overflow-hidden bg-ink-900">
      <div className="grid-overlay" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-ember-500/10 blur-[140px]" />

      <div className="container relative grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Visual collage */}
        <div className="relative">
          <span
            aria-hidden
            className="stroke-text pointer-events-none absolute -top-10 left-0 font-display text-8xl font-bold uppercase leading-none opacity-40"
          >
            Forge
          </span>

          <Reveal className="relative z-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-steel-800">
              <div data-parallax-main className="absolute -inset-y-8 inset-x-0">
                <Image
                  src={IMAGES.about.main}
                  alt="Member training with dumbbells inside Forge Fitness"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="absolute -bottom-10 right-2 z-20 hidden w-2/5 sm:block md:-right-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-ink-900 shadow-card">
              <div data-parallax-float className="absolute -inset-y-6 inset-x-0">
                <Image
                  src={IMAGES.about.secondary}
                  alt="Coach guiding a barbell session"
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="absolute -top-6 left-4 z-20 md:-left-8">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/80 px-5 py-4 shadow-card backdrop-blur-xl">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember-gradient">
                <Flame className="h-5 w-5 text-ink-950" aria-hidden />
              </span>
              <div>
                <p className="font-display text-xl font-semibold uppercase leading-none">12+ years</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-steel-400">Forging strength daily</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span aria-hidden className="h-px w-8 bg-current" /> About Forge Fitness
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display-lg mt-4">
              More Than A Gym.
              <br />
              A <span className="text-gradient">Forge</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-steel-400">
              Forge Fitness was built on a simple idea: strength changes everything. For over a
              decade we&apos;ve paired elite coaching with world-class equipment to help 8,500+ members
              build bodies that perform — and minds that don&apos;t quit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-steel-400">
              From your first assessment to every PR after it, our coaches engineer the process.
              You bring the will. We handle everything else.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {aboutFeatures.map((f, i) => {
              const Icon = featureIcons[f.id as keyof typeof featureIcons];
              return (
                <Reveal key={f.id} delay={0.08 * i} className="flex gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-ember-500/30 bg-ember-500/10">
                    <Icon className="h-5 w-5 text-ember-400" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold uppercase tracking-wide text-white">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel-400">{f.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="#trainers" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Meet The Coaches
            </Button>
            <div className="flex items-center gap-3">
              <Image
                src="https://i.pravatar.cc/80?img=59"
                alt="Marcus Cole, founder of Forge Fitness"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full border border-ember-500/40 object-cover"
              />
              <div>
                <p className="font-display text-base font-semibold uppercase tracking-wide">Marcus Cole</p>
                <p className="text-xs text-steel-500">Founder · Head Coach</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}