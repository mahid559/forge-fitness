import { GalleryLightbox } from '@/components/ui/GalleryLightbox';

export function Gallery() {
  return (
    <section id="gallery" className="section relative overflow-hidden bg-ink-950">
      <div className="grid-overlay" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-ember-500/[0.08] blur-[150px]" />

      <div className="relative">
        <GalleryLightbox />
      </div>
    </section>
  );
}