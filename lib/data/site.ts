export const site = {
  name: 'Forge Fitness',
  shortName: 'FORGE',
  logoAccent: 'FITNESS',
  tagline: 'Forge your strongest self.',
  description:
    'Forge Fitness is a premium strength & conditioning facility pairing elite coaching, world-class equipment and a community that shows up. Built for every body.',
  established: 2013,
  phoneDisplay: '+1 (415) 555-0142',
  phoneHref: 'tel:+14155550142',
  email: 'hello@forgefitness.com',
  address: {
    line1: '218 Ironworks Avenue',
    line2: 'SoMa, San Francisco, CA 94107',
  },
  maps: {
    embed:
      'https://www.google.com/maps?q=218+Ironworks+Ave+San+Francisco+CA&z=14&output=embed',
    link: 'https://www.google.com/maps/search/?api=1&query=218+Ironworks+Ave+San+Francisco+CA',
  },
  hours: [
    { day: 'Monday – Friday', time: '5:00 AM – 11:00 PM' },
    { day: 'Saturday', time: '6:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 8:00 PM' },
    { day: 'Coaching hours', time: '6:00 AM – 9:00 PM' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' as const },
    { label: 'X', href: 'https://x.com', icon: 'twitter' as const },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' as const },
    { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' as const },
  ],
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
];

export const marqueeWords = [
  'Strength',
  'Conditioning',
  'Hypertrophy',
  'Mobility',
  'Power',
  'Recovery',
  'Community',
  'Discipline',
];
