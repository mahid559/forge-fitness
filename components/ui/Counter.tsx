'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CounterProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/** Animated statistic digit. Runs once when scrolled into view. */
export function Counter({ value, decimals = 0, prefix = '', suffix = '', className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.textContent = prefix + format(0) + suffix;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.textContent = prefix + format(value) + suffix;
      return;
    }

    const state = { v: 0 };
    const tween = gsap.to(state, {
      v: value,
      duration: 1.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = prefix + format(state.v) + suffix;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimals, prefix, suffix]);

  const format = (n: number) =>
    new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(n);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(0)}
      {suffix}
    </span>
  );
}