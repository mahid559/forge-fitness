'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { site } from '@/lib/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const goalOptions = [
  'Build strength & muscle',
  'Lose fat & get lean',
  'Improve conditioning',
  'Learn to lift properly',
  'Competitive training',
  'Just exploring',
];

const inputClass =
  'w-full rounded-xl border border-steel-700 bg-steel-900/60 px-4 py-3.5 text-sm text-steel-100 placeholder:text-steel-500 transition-colors focus:border-ember-500 focus:outline-none focus:ring-2 focus:ring-ember-500/25';

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section relative overflow-hidden bg-ink-900">
      <div className="grid-overlay" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-ember-500/10 blur-[150px]" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Contact & Location"
          title={
            <>
              Find Your Way <span className="text-gradient">To The Forge</span>
            </>
          }
          description="Questions, tours or a free trial — our team answers within one business hour. Or just swing by the gym floor."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Info */}
          <Reveal className="space-y-6 lg:col-span-2">
            <div className="card p-7">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-ember-500/30 bg-ember-500/10">
                    <MapPin className="h-5 w-5 text-ember-400" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">Visit us</p>
                    <p className="mt-1 text-sm leading-relaxed text-steel-400">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-ember-500/30 bg-ember-500/10">
                    <Phone className="h-5 w-5 text-ember-400" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">Call us</p>
                    <a href={site.phoneHref} className="mt-1 block text-sm text-steel-400 transition-colors hover:text-ember-400">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-ember-500/30 bg-ember-500/10">
                    <Mail className="h-5 w-5 text-ember-400" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">Email us</p>
                    <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-steel-400 transition-colors hover:text-ember-400">
                      {site.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card p-7">
              <p className="flex items-center gap-2.5 font-display text-sm font-semibold uppercase tracking-wide text-white">
                <Clock className="h-4 w-4 text-ember-400" aria-hidden />
                Opening hours
              </p>
              <dl className="mt-5 space-y-3">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex items-baseline justify-between gap-4 border-b border-steel-800/70 pb-3 text-sm last:border-0 last:pb-0">
                    <dt className="text-steel-400">{h.day}</dt>
                    <dd className="font-medium text-steel-100">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-ember-400">Members: 24/7 access</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-steel-800">
              <iframe
                title="Forge Fitness location map"
                src={site.maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 opacity-90 grayscale-[0.35] contrast-more:grayscale-0"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card p-7 sm:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-ember-gradient shadow-glow">
                    <CheckCircle2 className="h-10 w-10 text-ink-950" aria-hidden />
                  </span>
                  <h3 className="display-lg text-3xl">Message Received</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-steel-400">
                    Thanks for reaching out — a Forge coach will get back to you within one
                    business hour. Check your inbox for a confirmation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-400 hover:text-ember-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <p className="font-display text-xl font-semibold uppercase tracking-tight text-white sm:text-2xl">
                    Book Your Free Session
                  </p>
                  <p className="mt-2 text-sm text-steel-400">
                    Tell us where you are and we&apos;ll design your first week on us.
                  </p>

                  <form
                    className="mt-8 grid gap-5 sm:grid-cols-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-steel-300">
                        Full name
                      </label>
                      <input id="contact-name" name="name" required placeholder="Alex Morgan" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-steel-300">
                        Email
                      </label>
                      <input id="contact-email" name="email" type="email" required placeholder="alex@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-steel-300">
                        Phone <span className="text-steel-600">(optional)</span>
                      </label>
                      <input id="contact-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-goal" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-steel-300">
                        Your goal
                      </label>
                      <select id="contact-goal" name="goal" defaultValue={goalOptions[0]} className={cn(inputClass, 'appearance-none')}>
                        {goalOptions.map((g) => (
                          <option key={g} value={g} className="bg-steel-900">
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-steel-300">
                        Anything else?
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your training history, goals or questions…"
                        className={cn(inputClass, 'resize-none')}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-ember-gradient px-9 text-sm font-semibold uppercase tracking-wider text-ink-950 shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        Request Free Trial
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden />
                      </button>
                      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-steel-500">
                        <Instagram className="h-3.5 w-3.5" aria-hidden />
                        Prefer DM? We&apos;re <span className="text-steel-300">@forgefitness</span> on Instagram.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}