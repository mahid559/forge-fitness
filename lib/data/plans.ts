export type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  yearly: number; // per month, billed annually
  featured?: boolean;
  cta: string;
  features: string[];
  excluded?: string[];
};

export type Perk = {
  id: string;
  title: string;
  description: string;
};

export const plans: Plan[] = [
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'Everything you need to start strong.',
    monthly: 49,
    yearly: 39,
    cta: 'Start Essential',
    features: [
      'Full gym & equipment access',
      '4 group classes per week',
      'Locker room & showers',
      'Member app with workout plans',
      'Free fitness assessment',
    ],
    excluded: ['Coach programming', 'Sauna & recovery lounge', 'Guest passes'],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Our most popular all-access membership.',
    monthly: 89,
    yearly: 69,
    featured: true,
    cta: 'Start Pro',
    features: [
      'Everything in Essential',
      'Unlimited group classes',
      'Personalized coach programming',
      'Quarterly body composition scan',
      'Recovery lounge & sauna',
      '2 guest passes / month',
      'Priority class booking',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Full coaching, zero limits.',
    monthly: 149,
    yearly: 119,
    cta: 'Start Elite',
    features: [
      'Everything in Pro',
      '2 personal training sessions / week',
      'Custom nutrition plan',
      'Monthly 1-on-1 coach review',
      'Unlimited guest passes',
      '24/7 facility access',
    ],
  },
];

export const perks: Perk[] = [
  { id: 'freeze', title: 'Pause Anytime', description: 'Freeze your membership on holiday with one tap — no fees, no fuss.' },
  { id: 'guarantee', title: '30-Day Body Guarantee', description: 'Feel the difference in 30 days or your first month is on us.' },
  { id: 'no-contract', title: 'No Lock-In Contracts', description: 'Monthly or annual billing, cancel whenever you like.' },
  { id: 'insurance', title: 'Insurance Friendly', description: 'Gympass & corporate memberships accepted across all plans.' },
];