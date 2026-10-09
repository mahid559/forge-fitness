import { Medal, ArrowRight } from 'lucide-react';
import { trainers } from '@/lib/data/trainers';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { cn } from '@/lib/utils';

export function Trainers() {
  return (
    <section id="trainers" className="section relative overflow-hidden bg-ink-950">
      <div className="grid-overlay" aria-hidden />

      <div className="container relative">
        <SectionHeading
          eyebrow="The Coaching Team"
          title={
            <>
              Trainers Who <span className="text-gradient">Forge Champions</span>
            </>
          }
          description="Certified specialists with real competition history. They write your plan, correct your form and hold you accountable — every rep of the way."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <Reveal key={trainer.id} delay={(i % 3) * 0.08}>
              <article className="group relative overflow-hidden rounded-3xl border border-steel-800 bg-steel-950">
                <SmartImage
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role} at Forge Fitness`}
                  aspect="aspect-[3/4]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className={cn(
                    'absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent transition-opacity duration-500',
                  )}
                />

                {/* Experience chip */}
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-steel-200 backdrop-blur-md">
                  <Medal className="h-3.5 w-3.5 text-ember-400" aria-hidden />
                  {trainer.experience}
                </span>

                {/* Always-visible info */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">
                    {trainer.name}
                  </h3>
                  <p className={cn('mt-1 bg-ember-gradient bg-clip-text font-display text-sm font-medium uppercase tracking-[0.18em] text-transparent')}>
                    {trainer.role}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {trainer.specialties.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-wider text-steel-300 backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                    {trainer.specialties.length > 2 && (
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-wider text-steel-300">
                        +{trainer.specialties.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bio overlay — reveals on desktop; always visible on touch */}
                <div className="absolute inset-0 flex translate-y-0 flex-col justify-end bg-ink-950/95 p-5 opacity-100 transition-all duration-500 ease-out lg:translate-y-[103%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">{trainer.name}</h3>
                  <p className={cn('mt-1 bg-ember-gradient bg-clip-text font-display text-sm font-medium uppercase tracking-[0.18em] text-transparent')}>
                    {trainer.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel-300">{trainer.bio}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-steel-500">{trainer.certifications}</p>
                  <a
                    href="#join"
                    className="group/link mt-5 inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-wider text-ember-400 transition-colors hover:text-ember-300"
                  >
                    Train with {trainer.name.split(' ')[0]}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}