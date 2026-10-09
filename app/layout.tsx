import type { Metadata, Viewport } from 'next';
import { Inter, Oswald } from 'next/font/google';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/lib/images';
import { site } from '@/lib/data/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://forgefitness.example.com'),
  title: {
    default: `${site.name} — Strength, Conditioning & Community in San Francisco`,
    template: `%s | ${site.name}`,
  },
  description:
    'Forge Fitness is San Francisco’s #1 strength & conditioning facility. Elite coaching, pro-grade equipment, 120+ weekly classes and a community that shows up. Start your free 7-day trial.',
  keywords: [
    'gym San Francisco',
    'strength training',
    'personal training',
    'HIIT classes',
    'crossfit gym',
    'boxing gym SF',
    'membership',
    'forge fitness',
  ],
  authors: [{ name: 'Forge Fitness' }],
  creator: 'Forge Fitness',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://forgefitness.example.com',
    siteName: site.name,
    title: 'Forge Fitness — Forge Your Strongest Self',
    description:
      'Elite coaching, pro-grade equipment and 120+ weekly classes. Start your free 7-day trial at San Francisco’s #1 strength facility.',
    images: [{ url: IMAGES.hero.primary, width: 1600, height: 1067, alt: 'Training at Forge Fitness' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Fitness — Forge Your Strongest Self',
    description: 'San Francisco’s #1 strength & conditioning facility. Start your free trial.',
    images: [IMAGES.hero.primary],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07070a',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn('dark', inter.variable, oswald.variable)}>
      <body>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}