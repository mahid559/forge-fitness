'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown, KeyRound, PlayCircle, Star } from 'lucide-react';
import Image from 'next/image';
import { IMAGES, BLUR_DATA_URL } from '@/lib/images';
import { Button } from '@/components/ui/Button';

const trustAvatars = [
  { src: 'https://i.pravatar.cc/80?img=12', alt: 'Forge member' },
  { src: 'https://i.pravatar.cc/80?img=5', alt: 'Forge member' },
  { src: 'https://i.pravatar.cc/80?img=26', alt: 'Forge member' },
  { src: 'https://i.pravatar.cc/80?img=44', alt: 'Forge member' },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '[data-hero-bg]',
        { scale: 1.14, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' },
      )
        .fromTo(
          '[data-hero-badge]',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.9',
        )
        .fromTo(
          '[data-hero-line]',
          { yPercent: 112 },
          { yPercent: 0, duration: 0.85, stagger: 0.14 },
          '-=0.35',
        )
        .fromTo(
          '[data-hero-fade]',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.12 },
          '-=0.5',
        )
        .fromTo(
          '[data-hero-card]',
          { y: 40, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.12 },
          '-=0.5',
        )
        .fromTo(
          '[data-hero-strip]',
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.35',
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
      <div data-hero-bg className="absolute inset-0">
        <Image
          src={IMAGES.hero.primary}
          alt="An athlete training with heavy dumbbells inside the Forge Fitness facility"
          fill
          priority
          quality={82}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover object-center"
        />
        <div className="scrim-full absolute inset-0" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        <div className="ember-tint absolute inset-0" aria-hidden />
      </div>

      <div className="container relative z-10 pt-32 pb-16 sm:pt-36 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div data-hero-badge className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-2 pl-3 pr-4 backdrop-blur-md">
              <span className="flex items-center gap-1 rounded-full bg-ember-gradient px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-ink-950">
                <Star className="h-3 w-3 fill-current" aria-hidden /> 4.9
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-steel-100">
                San Francisco&apos;s #1 Strength Facility
              </span>
            </div>

            <h1 className="display-xl">
              <span className="block overflow-hidden pb-1">
                <span data-hero-line className="block">Forge Your</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span data-hero-line className="block">
                  Strongest <span className="text-gradient">Self</span>
                </span>
              </span>
            </h1>

            <p data-hero-fade className="mt-6 max-w-xl text-base leading-relaxed text-steel-200/90 md:text-lg">
              Elite coaching, pro-grade equipment and a community that shows up. Train with
              purpose at Forge Fitness — where strength, conditioning and discipline are built,
              every single day.
            </p>

            <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#join" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
                Start Free Trial
              </Button>
              <Button href="#programs" size="lg" variant="outline" icon={<PlayCircle className="h-4 w-4" aria-hidden />}>
                Explore Programs
              </Button>
            </div>

            <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {trustAvatars.map((a) => (
                  <Image
                    key={a.src}
                    src={a.src}
                    alt={a.alt}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-ink-950 object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-steel-300">
                <span className="font-semibold text-white">8,500+ members</span> forging their
                best selves — join them.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:gap-6">
            <div data-hero-card className="animate-float w-full max-w-xs rounded-3xl border border-white/10 bg-ink-950/55 p-5 backdrop-blur-xl" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ember-gradient shadow-glow">
                  <KeyRound className="h-6 w-6 text-ink-950" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold uppercase tracking-wide">24/7 Access</p>
                  <p className="text-xs text-steel-400">Unlock the gym anytime, on any plan</p>
                </div>
              </div>
            </div>

            <div data-hero-card className="animate-float w-full max-w-xs rounded-3xl border border-white/10 bg-ink-950/55 p-4 backdrop-blur-xl" style={{ animationDelay: '1.1s' }}>
              <div className="flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={IMAGES.hero.secondary}
                    alt="Barbell bench press class"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-semibold uppercase tracking-wide">06:00 Strength</p>
                  <p className="text-xs text-steel-400">Coach Marcus · 60 min</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-[11px] text-steel-400">
                      <span>3 spots left</span>
                      <span>86%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-steel-800">
                      <div className="h-full w-[86%] rounded-full bg-ember-gradient" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-hero-strip className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-7 sm:mt-20">
          {[
            { value: '2013', label: 'Established' },
            { value: '120+', label: 'Weekly classes' },
            { value: '24k', label: 'Sq ft of iron' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl font-semibold uppercase tracking-tight text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-steel-400 sm:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-steel-400 transition-colors hover:text-ember-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}