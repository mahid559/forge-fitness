import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconLeft?: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold tracking-wide transition-all duration-300 ease-out will-change-transform select-none whitespace-nowrap active:scale-[0.98]';

const variants: Record<Variant, string> = {
  primary:
    'bg-ember-gradient text-ink-950 shadow-glow hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(246,91,21,0.45),0_22px_60px_-18px_rgba(246,91,21,0.75)]',
  outline:
    'border border-steel-600 bg-transparent text-steel-100 hover:-translate-y-0.5 hover:border-ember-500 hover:text-ember-400',
  ghost: 'bg-transparent text-steel-100 hover:text-ember-400',
  light: 'bg-white text-ink-950 hover:-translate-y-0.5 hover:bg-steel-200',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-xs uppercase tracking-wider',
  md: 'h-12 px-7 text-sm uppercase tracking-wider',
  lg: 'h-14 px-9 text-sm uppercase tracking-wider',
};

function Sheen({ variant }: { variant: Variant }) {
  if (variant !== 'primary') return null;
  return (
    <span
      aria-hidden
      className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40 blur-md opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
    />
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconLeft,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        <Sheen variant={variant} />
        {iconLeft}
        <span>{children}</span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <Sheen variant={variant} />
      {iconLeft}
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
}