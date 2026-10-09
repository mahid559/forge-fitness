import { Flame } from 'lucide-react';
import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

type MarqueeProps = {
  words: string[];
  className?: string;
  reverse?: boolean;
  duration?: number;
};

/** Infinite keyword ticker. Pure CSS — cheap and smooth. */
export function Marquee({
  words,
  className,
  reverse = false,
  duration = 42,
}: MarqueeProps) {
  const row = [...words, ...words];

  return (
    <div
      className={cn(
        'mask-fade-x relative flex overflow-hidden border-y border-steel-800/70 bg-ink-900/60 py-5',
        className,
      )}
      style={{ ['--marquee-duration' as string]: `${duration}s` } as CSSProperties}
    >
      <div
        className={cn(
          'flex w-max shrink-0 items-center',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
      >
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center">
            <span className="font-display text-2xl uppercase tracking-[0.12em] text-steel-200/90 md:text-3xl">
              {word}
            </span>
            <Flame className="mx-10 h-4 w-4 shrink-0 text-ember-500" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}