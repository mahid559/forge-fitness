import { ArrowUpRight, Check, Clock, Gauge } from 'lucide-react';
import { programs } from '@/lib/data/programs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';

export function Programs() {
  return (
    <section id="programs" className="section relative overflow-hidden bg-ink-900">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-ember-500/10 blur-[150px]" />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Training Programs"
            title={
              <>
                Six Ways To <span className="text-gradient">Get Stronger</span>
              </>
            }
            description="Coach-led programs for every goal — from your first barbell to your next podium. Every session is structured, tracked and corrected."
          />
          <Reveal delay={0.1} className="shrink-0">
            <p className="flex items-center gap-2 text-sm text-steel-400">
              <Gauge className="h-4 w-4 text-ember-400" aria-hidden />
              <span>New members: free movement assessment</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <Reveal key={program.id} delay={(i % 3) * 0.08} className="h-full">
                <article className="group card flex h-full flex-col transition-all duration-500 ease-out hover:-translate-y-2 hover:border-ember-500/50 hover:shadow-card">
                  <div className="relative overflow-hidden">
                    <SmartImage
                      src={program.image}
                      alt={`${program.title} training at Forge Fitness`}
                      aspect="aspect-[16/10]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" aria-hidden />

                    {program.tag && (
                      <span className="absolute right-3 top-3 rounded-full bg-ember-gradient px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-950">
                        {program.tag}
                      </span>
                    )}

                    <span className="absolute bottom-3 left-3 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-ink-950/70 backdrop-blur-md transition-all duration-500 group-hover:bg-ember-gradient group-hover:shadow-glow">
                      <Icon className="h-6 w-6 text-ember-400 transition-colors duration-500 group-hover:text-ink-950" aria-hidden />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-steel-400">
                      <span className="text-ember-400">{program.category}</span>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-steel-600" />
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden />{program.duration}</span>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-steel-600" />
                      <span>{program.level}</span>
                    </div>

                    <h3 className="mt-3 font-sans text-xl font-semibold uppercase tracking-wide text-white transition-colors group-hover:text-ember-400">
                      {program.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-steel-400">{program.description}</p>

                    <ul className="mt-5 space-y-2.5">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-steel-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" aria-hidden />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#membership"
                      className="group/link mt-auto flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-wider text-steel-200 transition-colors hover:text-ember-400"
                    >
                      Join this program
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}