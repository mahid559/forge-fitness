import Image from 'next/image';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { IMAGES, BLUR_DATA_URL } from '@/lib/images';
import { site } from '@/lib/data/site';
import { ctaPerks } from '@/lib/data/features';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section id="join" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cta.background}
          alt="Member training with a kettlebell at Forge Fitness"
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover object-center"
        />
        <div className="scrim absolute inset-0" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        <div className="ember-tint absolute inset-0" aria-hidden />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span aria-hidden className="h-px w-8 bg-current" />
              Your first session is on us
              <span aria-hidden className="h-px w-8 bg-current" />
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display-lg mt-5">
              Ready To <span className="text-gradient">Forge Yourself?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-steel-200 md:text-lg">
              Claim a free 7-day trial, a full movement assessment and zero joining fees. Walk in
              with nothing but the will — we handle the rest.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <ul className="mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {ctaPerks.map((perk) => (
                <li key={perk.id} className="flex items-center gap-2.5 text-sm text-steel-200">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-ember-gradient">
                    <Check className="h-3.5 w-3.5 text-ink-950" strokeWidth={3} aria-hidden />
                  </span>
                  {perk.title}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Start Free Trial
            </Button>
            <Button href={site.phoneHref} size="lg" variant="outline" iconLeft={<Phone className="h-4 w-4" aria-hidden />}>
              {site.phoneDisplay}
            </Button>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-7 text-xs uppercase tracking-[0.2em] text-steel-500">
              No card required · Pause anytime · 30-day money-back
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}