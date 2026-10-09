'use client';

import { useEffect, useState } from 'react';
import { Award, Menu, Phone } from 'lucide-react';
import { navLinks, site } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Announcement strip — collapses on scroll */}
        <div
          className={cn(
            'overflow-hidden bg-ember-gradient transition-all duration-500 ease-out-expo',
            scrolled ? 'max-h-0' : 'max-h-12',
          )}
        >
          <div className="container flex items-center justify-center gap-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-950 sm:text-xs">
            <Award className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="truncate">Voted #1 strength gym in San Francisco — free 7-day trial</span>
            <a href={site.phoneHref} className="hidden shrink-0 items-center gap-1.5 underline-offset-4 hover:underline md:flex">
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div
          className={cn(
            'transition-all duration-500 ease-out-expo',
            scrolled
              ? 'border-b border-steel-800/80 bg-ink-950/85 backdrop-blur-xl'
              : 'border-b border-transparent bg-transparent',
          )}
        >
          <nav
            aria-label="Primary"
            className="container flex h-[var(--nav-height)] items-center justify-between gap-6"
          >
            <Logo />

            <ul className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative py-2 text-sm font-medium uppercase tracking-wider text-steel-200 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ember-gradient transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Button href="#membership" size="sm" className="hidden sm:inline-flex">
                Join Now
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="grid h-11 w-11 place-items-center rounded-full border border-steel-700 text-steel-100 transition-colors hover:border-ember-500 hover:text-ember-400 lg:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}