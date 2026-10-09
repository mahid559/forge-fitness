export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: 5;
  result: string;
};

const av = (img: number) => `https://i.pravatar.cc/160?img=${img}`;

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Twelve months at Forge and I have the strongest, most confident version of myself. The coaching is on another level — they actually care about your technique, not just your membership.',
    name: 'Jordan Ellis',
    role: 'Member since 2022 · Down 26 kg',
    avatar: av(12),
    rating: 5,
    result: '26 kg lost',
  },
  {
    id: 't2',
    quote:
      'I walked in as a complete beginner and never once felt judged. The coaches scaled everything, and now I’m deadlifting 140 kg. This place genuinely builds people up.',
    name: 'Aisha Thompson',
    role: 'Member since 2023',
    avatar: av(5),
    rating: 5,
    result: '140 kg deadlift',
  },
  {
    id: 't3',
    quote:
      'The 6 AM sessions with Marcus rewired my discipline. Strength training is the only habit I’ve kept for 3 years running — Forge makes it easy because it feels like family.',
    name: 'Daniel Okafor',
    role: 'Pro member · 3 years',
    avatar: av(26),
    rating: 5,
    result: '3-year streak',
  },
  {
    id: 't4',
    quote:
      'Priya’s mobility classes fixed the back pain three physios couldn’t. I’m lifting pain-free and moving better at 38 than I did at 28. Worth every penny.',
    name: 'Marta Kowalski',
    role: 'Member since 2021',
    avatar: av(44),
    rating: 5,
    result: 'Back pain gone',
  },
  {
    id: 't5',
    quote:
      'Elena’s conditioning classes are brutal in the best way. I’ve done OCR races, two marathons and a Spartan trifecta since joining. The engine Forge built is real.',
    name: 'Chris Nguyen',
    role: 'Conditioning athlete',
    avatar: av(15),
    rating: 5,
    result: '2 marathons done',
  },
  {
    id: 't6',
    quote:
      'Elite membership with Sofia changed my career and my body. Structured coaching, nutrition and weekly check-ins — I’ve never been this consistent in my life.',
    name: 'Rachel Bennett',
    role: 'Elite member · 18 months',
    avatar: av(32),
    rating: 5,
    result: '18 months consistent',
  },
];