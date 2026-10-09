'use client';

import Image from 'next/image';
import { Flame } from 'lucide-react';
import { useState } from 'react';
import { BLUR_DATA_URL } from '@/lib/images';
import { cn } from '@/lib/utils';

type SmartImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect class controlling the box, e.g. `aspect-[4/5]` */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  quality?: number;
};

/**
 * Resilient image wrapper:
 *  - `next/image` optimization (AVIF/WebP) with a shared blur placeholder
 *  - shimmer skeleton while decoding
 *  - branded gradient fallback on error — never a broken image
 */
export function SmartImage({
  src,
  alt,
  aspect = 'aspect-video',
  sizes,
  priority,
  className,
  imgClassName,
  objectPosition = 'center',
  quality = 80,
}: SmartImageProps) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={cn('relative overflow-hidden bg-steel-900', aspect, className)}>
      {state === 'loading' && (
        <div aria-hidden className="absolute inset-0 overflow-hidden bg-steel-900">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute inset-0 bg-grid-lines bg-grid opacity-30" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className={cn(
          'transition-opacity duration-700 ease-out',
          state === 'loaded' ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
        style={{ objectFit: 'cover', objectPosition }}
        onLoad={() => setState('loaded')}
        onError={() => setState('error')}
      />

      {state === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ember-gradient opacity-90">
          <Flame className="h-8 w-8 text-ink-950" aria-hidden />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-ink-950">
            Forge Fitness
          </span>
        </div>
      )}
    </div>
  );
}