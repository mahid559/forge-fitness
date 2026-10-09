'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { navLinks, site } from '@/lib/data/site';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[55] flex flex-col bg-ink-950/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid-overlay" aria-hidden />

          <div className="relative flex items-center justify-between px-5 py-5 sm:px-8">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-steel-700 text-steel-200 transition-colors hover:border-ember-500 hover:text-ember-400"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto px-5 pb-8 sm:px-8">
            <ul className="flex flex-col divide-y divide-steel-800/80">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="font-display text-3xl font-medium uppercase tracking-tight text-steel-100 transition-colors group-hover:text-ember-400">
                      {link.label}
                    </span>
                    <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-steel-600">
                      0{i + 1}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-4"
            >
              <Button href="#membership" onClick={onClose} size="lg" fullWidth icon={<ArrowRight className="h-4 w-4" />}>
                Start Free Trial
              </Button>
              <p className="text-center text-sm text-steel-500">
                {site.phoneDisplay} · {site.email}
              </p>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}