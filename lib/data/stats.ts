export type Stat = {
  id: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
};

export const stats: Stat[] = [
  {
    id: 'members',
    value: 8500,
    suffix: '+',
    label: 'Active Members',
    description: 'A community that trains, competes and grows together.',
  },
  {
    id: 'coaches',
    value: 42,
    suffix: '',
    label: 'Elite Coaches',
    description: 'Certified specialists across strength, mobility and conditioning.',
  },
  {
    id: 'classes',
    value: 120,
    suffix: '+',
    label: 'Weekly Classes',
    description: 'From sunrise strength to late-night conditioning sessions.',
  },
  {
    id: 'rating',
    value: 4.9,
    decimals: 1,
    suffix: '/5',
    label: 'Member Rating',
    description: 'Rated across 2,400+ verified member reviews.',
  },
];
