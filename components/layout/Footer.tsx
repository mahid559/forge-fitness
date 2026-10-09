import Link from 'next/link';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import { navLinks, site } from '@/lib/data/site';
import { programs } from '@/lib/data/programs';
import { Logo } from '@/components/ui/Logo';
import { NewsletterForm } from './NewsletterForm';

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-steel-800/80 bg-ink-900">
      <div className="grid-overlay" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80vw] -translate-x-1/2 rounded-full bg-ember-500/10 blur-[120px]"
      />

      <div className="container relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-400">{site.description}</p>
          <div className="mt-6 flex items-center gap-3">
            {site.social.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-steel-700 text-steel-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-500 hover:text-ember-400"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-steel-500">Explore</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-steel-300 transition-colors hover:text-white"
                >
                  <span aria-hidden className="h-px w-0 bg-ember-500 transition-all duration-300 group-hover:w-3" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-steel-500">Programs</p>
          <ul className="mt-5 space-y-3">
            {programs.map((p) => (
              <li key={p.id}>
                <a
                  href="#programs"
                  className="group inline-flex items-center gap-2 text-sm text-steel-300 transition-colors hover:text-white"
                >
                  <span aria-hidden className="h-px w-0 bg-ember-500 transition-all duration-300 group-hover:w-3" />
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-steel-500">Visit the forge</p>
          <ul className="mt-5 space-y-4 text-sm text-steel-300">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" aria-hidden />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-ember-500" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-ember-500" aria-hidden />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" aria-hidden />
              <span>
                Mon–Fri: 5 AM – 11 PM
                <br />
                Weekends: 6 AM – 10 PM
              </span>
            </li>
          </ul>

          <p className="mt-6 font-display text-sm uppercase tracking-[0.25em] text-steel-500">
            Forge newsletter
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="relative border-t border-steel-800/70">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-steel-500 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <Link href="#top" className="transition-colors hover:text-steel-200">Privacy</Link>
            <Link href="#top" className="transition-colors hover:text-steel-200">Terms</Link>
            <span className="hidden items-center gap-1.5 sm:flex">
              Built in the forge · <span className="text-ember-500">SF, CA</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}