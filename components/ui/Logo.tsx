import Link from 'next/link';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact }: LogoProps) {
  return (
    <Link
      href="#top"
      aria-label="Forge Fitness — back to top"
      className={cn('group flex items-center gap-3', className)}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-ember-gradient shadow-glow transition-transform duration-300 group-hover:scale-105">
        <span aria-hidden className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
        <Flame className="h-5 w-5 text-ink-950" strokeWidth={2.75} aria-hidden />
      </span>
      {!compact && (
        <span className="font-display text-xl font-semibold uppercase leading-none tracking-tight md:text-2xl">
          Forge
          <span className="text-gradient"> Fitness</span>
        </span>
      )}
    </Link>
  );
}