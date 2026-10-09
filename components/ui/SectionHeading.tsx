import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h2' | 'h3';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center mx-auto max-w-2xl',
        align === 'left' && 'items-start max-w-2xl',
        className,
      )}
    >
      <span className="eyebrow">
        <span aria-hidden className="h-px w-8 bg-current" />
        {eyebrow}
        {align === 'center' && <span aria-hidden className="h-px w-8 bg-current" />}
      </span>
      <Heading className="display-lg">{title}</Heading>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-steel-400">{description}</p>
      )}
    </Reveal>
  );
}