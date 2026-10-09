export type Feature = {
  id: string;
  title: string;
  description: string;
};

export const aboutFeatures: Feature[] = [
  {
    id: 'coaching',
    title: 'Coach-led everything',
    description: 'Every program is written, coached and corrected by certified specialists — never left to guesswork.',
  },
  {
    id: 'equipment',
    title: 'Pro competition equipment',
    description: 'Eleiko, Rogue and Assault hardware across 24,000 sq ft of purpose-built training space.',
  },
  {
    id: 'recovery',
    title: 'Recovery built in',
    description: 'Sauna, contrast showers, mobility studio and dedicated recovery coaching included with membership.',
  },
  {
    id: 'community',
    title: 'A team, not a crowd',
    description: 'Small classes, capped sessions and a no-ego culture where everyone knows your name.',
  },
];

export const ctaPerks: Feature[] = [
  { id: 'c1', title: 'Free 7-day trial', description: 'Train every class, use every zone — no card required.' },
  { id: 'c2', title: 'Free assessment', description: 'Movement screen + goal session with a senior coach.' },
  { id: 'c3', title: 'No joining fee', description: 'Straightforward pricing. First month from $39.' },
];