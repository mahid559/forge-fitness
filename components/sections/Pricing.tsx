'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Check, Snowflake, ShieldCheck, Sparkles, Unlock, X } from 'lucide-react';
import { plans, perks } from '@/lib/data/plans';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const perkIcons = {
  freeze: Snowflake,
  guarantee: ShieldCheck,
  'no-contract': Unlock,
  insurance: BadgeCheck,
} as const;

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="membership" className="section relative overflow-hidden bg-ink-900">
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-ember-500/10 blur-[150px]" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Membership & Pricing"
          title={
            <>
              Pricing Forged <span className="text-gradient">Around You</span>
            </>
          }
          description="No lock-in contracts. No hidden fees. Just straightforward plans that scale with your commitment — pause, switch or cancel anytime."
        />

        {/* Billing toggle */}
        <Reveal delay={0.05} className="mt-10 flex justify-center">
          <div className="relative flex items-center rounded-full border border-steel-700 bg-steel-950/80 p-1.5">
            {(['monthly', 'annual'] as const).map((mode) => {
              const active = annual === (mode === 'annual');
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setAnnual(mode === 'annual')}
                  aria-pressed={active}
                  className={cn(
                    'relative z-10 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors md:px-7',
                    active ? 'text-ink-950' : 'text-steel-300 hover:text-white',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ember-gradient shadow-glow"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  {mode === 'annual' ? 'Annual' : 'Monthly'}
                </button>
              );
            })}
          </div>
        </Reveal>

        {annual && (
          <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-ember-400">
            Annual memberships save up to 20%
          </p>
        )}

        {/* Plans */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => {
            const price = annual ? plan.yearly : plan.monthly;
            return (
              <Reveal key={plan.id} delay={i * 0.08} className="h-full">
                <article
                  className={cn(
                    'relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 ease-out',
                    plan.featured
                      ? 'border-ember-500/60 bg-steel-950 shadow-glow lg:-translate-y-4 lg:hover:-translate-y-6'
                      : 'border-steel-800 bg-steel-950/60 hover:-translate-y-2 hover:border-steel-700',
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ember-gradient px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-950 shadow-glow">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden /> Most Popular
                    </span>
                  )}

                  <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">{plan.name}</h3>
                  <p className="mt-1.5 text-sm text-steel-400">{plan.tagline}</p>

                  <div className="mt-7 flex items-end gap-2">
                    <span className="font-display text-6xl font-semibold uppercase tracking-tight text-white">
                      ${price}
                    </span>
                    <span className="pb-2 text-sm text-steel-500">/mo</span>
                  </div>
                  <p className="mt-1 text-xs text-steel-500">
                    {annual ? `Billed $${price * 12}/year` : 'Billed monthly · no contract'}
                  </p>

                  <ul className="mt-8 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-steel-200">
                        <span className={cn('mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full', plan.featured ? 'bg-ember-gradient' : 'bg-ember-500/15')}>
                          <Check className={cn('h-3 w-3', plan.featured ? 'text-ink-950' : 'text-ember-400')} strokeWidth={3} aria-hidden />
                        </span>
                        {feature}
                      </li>
                    ))}
                    {(plan.excluded ?? []).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-steel-600">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-steel-800">
                          <X className="h-3 w-3" aria-hidden />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#join"
                    fullWidth
                    variant={plan.featured ? 'primary' : 'outline'}
                    className="mt-9"
                    icon={<ArrowRight className="h-4 w-4" aria-hidden />}
                  >
                    {plan.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Perks */}
        <div className="mt-14 grid gap-5 rounded-3xl border border-steel-800 bg-steel-950/50 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {perks.map((perk, i) => {
            const Icon = perkIcons[perk.id as keyof typeof perkIcons];
            return (
              <Reveal key={perk.id} delay={i * 0.06}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-ember-500/30 bg-ember-500/10">
                    <Icon className="h-5 w-5 text-ember-400" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-white">{perk.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-steel-400">{perk.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}