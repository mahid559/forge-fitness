import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stats } from '@/components/sections/Stats';
import { Programs } from '@/components/sections/Programs';
import { Trainers } from '@/components/sections/Trainers';
import { Pricing } from '@/components/sections/Pricing';
import { Gallery } from '@/components/sections/Gallery';
import { Schedule } from '@/components/sections/Schedule';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';
import { Marquee } from '@/components/ui/Marquee';
import { marqueeWords } from '@/lib/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee words={marqueeWords} duration={38} />
      <About />
      <Stats />
      <Programs />
      <Trainers />
      <Pricing />
      <Gallery />
      <Marquee words={marqueeWords} reverse duration={46} className="border-y-0" />
      <Schedule />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}