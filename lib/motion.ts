import type { Variants } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Standard viewport config so reveals fire slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Reveal on scroll wrapper props (without motion component type coupling). */
export const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportOnce,
} as const;
