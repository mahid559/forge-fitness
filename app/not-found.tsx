import Link from 'next/link';
import { ArrowLeft, Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-950 px-6">
      <div className="grid-overlay" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/10 blur-[140px]" />

      <div className="relative z-10 text-center">
        <Flame className="mx-auto h-12 w-12 text-ember-500" aria-hidden />
        <p className="mt-6 font-display text-8xl font-bold uppercase tracking-tight text-white">
          4<span className="text-gradient">0</span>4
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-steel-200">
          This page missed its session
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-steel-400">
          Looks like you wandered off the gym floor. The forge is still open — let&apos;s get you
          back to training.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex h-12 items-center gap-2.5 rounded-full bg-ember-gradient px-7 text-sm font-semibold uppercase tracking-wider text-ink-950 shadow-glow transition-all duration-300 hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
          Back to home
        </Link>
      </div>
    </section>
  );
}