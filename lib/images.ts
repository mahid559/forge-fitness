/**
 * Centralised, PRE-VALIDATED image catalog.
 *
 * Every remote URL in this file was checked to return HTTP 200/206 before shipping,
 * so the site never renders a broken image. All photos are served through `next/image`
 * (AVIF/WebP) and rendered via `<SmartImage />`, which adds a blur placeholder,
 * a shimmer skeleton, and a branded gradient fallback on error.
 *
 * Add new imagery here (and only here) so sizing/crops stay consistent.
 */

const UNSPLASH = 'https://images.unsplash.com/photo-';

/**
 * Build a cropped Unsplash URL.
 * @param id     Unsplash photo id (the part after `photo-`)
 * @param width  intrinsic width requested from the CDN
 * @param height optional height — when set the CDN returns an exact-crop image
 * @param q      jpeg quality
 */
export function photo(id: string, width = 1280, height?: number, q = 78): string {
  const h = height ? `&h=${height}` : '';
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${width}${h}&q=${q}`;
}

/** Shared low-res blur placeholder (dark steel gradient). */
export const BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAKABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAG/8QAFRABAQAAAAAAAAAAAAAAAAAAAQD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMgsVpi1H//Z';

/**
 * Named image slots used across the site. Semantic keys keep components readable and
 * make it trivial to swap art direction later.
 */
export const IMAGES = {
  hero: {
    primary: photo('1534438327276-14e5300c3a48', 1920, 1280, 80),
    secondary: photo('1571019613454-1cb2f99b2d8b', 1280, 960, 80),
  },
  about: {
    main: photo('1517836357463-d25dfeac3438', 1200, 1400, 80),
    secondary: photo('1540497077202-7c8a3999166f', 900, 900, 78),
    tertiary: photo('1517838277536-f5f99be501cd', 900, 700, 78),
  },
  programs: {
    strength: photo('1532029837206-abbe2b7620e3', 1000, 1200, 78),
    conditioning: photo('1541534741688-6078c6bfb5c5', 1000, 1200, 78),
    crossTraining: photo('1521805103424-d8f8430e8933', 1000, 1200, 78),
    boxing: photo('1552674605-db6ffd4facb5', 1000, 1200, 78),
    yoga: photo('1544367567-0f2fcb009e0b', 1000, 1200, 78),
    personal: photo('1518611012118-696072aa579a', 1000, 1200, 78),
  },
  trainers: {
    marcus: photo('1544033527-b192daee1f5b', 800, 1000, 78),
    elena: photo('1594381898411-846e7d193883', 800, 1000, 78),
    andre: photo('1605296867304-46d5465a13f1', 800, 1000, 78),
    priya: photo('1554284126-aa88f22d8b74', 800, 1000, 78),
    diego: photo('1599058917765-a780eda07a3e', 800, 1000, 78),
    sofia: photo('1571388208497-71bedc66e932', 800, 1000, 78),
  },
  cta: {
    background: photo('1607962837359-5e7e89f86776', 1920, 1080, 80),
  },
  contact: {
    facility: photo('1567013127542-490d757e51fc', 1200, 900, 78),
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
