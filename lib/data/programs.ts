import { Dumbbell, Flame, Zap, Swords, PersonStanding, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export type Program = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
  level: string;
  duration: string;
  features: string[];
  tag?: string;
};

export const programs: Program[] = [
  {
    id: 'strength',
    title: 'Strength & Power',
    category: 'Strength',
    description:
      'Own the barbell. Progressive overload, coached compound lifts and powerlifting technique that builds a body that performs.',
    image: IMAGES.programs.strength,
    icon: Dumbbell,
    level: 'Intermediate',
    duration: '60 min',
    tag: 'Most booked',
    features: ['Barbell & powerlifting coaching', 'Progressive overload programming', 'Strength testing every 6 weeks'],
  },
  {
    id: 'hiit',
    title: 'HIIT & Conditioning',
    category: 'Conditioning',
    description:
      'Torch calories and build an engine that never quits. Short, brutal intervals balanced with smart mobility work.',
    image: IMAGES.programs.conditioning,
    icon: Flame,
    level: 'All levels',
    duration: '45 min',
    features: ['Heart-rate tuned intervals', 'Sleds, ropes & air bikes', 'Scalable for every level'],
  },
  {
    id: 'crosstraining',
    title: 'CrossTraining',
    category: 'Functional',
    description:
      'Community-driven WODs that blend Olympic lifting, gymnastics and monostructural cardio into one high-energy hour.',
    image: IMAGES.programs.crossTraining,
    icon: Zap,
    level: 'Advanced',
    duration: '50 min',
    features: ['Coach-led daily WOD', 'Olympic lifting technique', 'Performance tracking & PR wall'],
  },
  {
    id: 'boxing',
    title: 'Boxing & Combat',
    category: 'Combat',
    description:
      'Technique-first striking for every level. Heavy bags, footwork drills and pad work that build real confidence.',
    image: IMAGES.programs.boxing,
    icon: Swords,
    level: 'Intermediate',
    duration: '55 min',
    tag: 'New',
    features: ['Pad work & heavy bag rounds', 'Footwork and defensive drills', 'Sparring optional — always gloves up'],
  },
  {
    id: 'yoga',
    title: 'Yoga & Mobility',
    category: 'Recovery',
    description:
      'Restore range of motion and accelerate recovery with structured mobility flows, deep stretching and breathwork.',
    image: IMAGES.programs.yoga,
    icon: PersonStanding,
    level: 'All levels',
    duration: '60 min',
    features: ['Recovery-focused mobility flows', 'Breathwork & injury prevention', 'Active recovery programming'],
  },
  {
    id: 'personal',
    title: 'Personal Training',
    category: '1-on-1',
    description:
      'Your coach, your plan. Fully custom programming built around your body, your goals and your schedule.',
    image: IMAGES.programs.personal,
    icon: Users,
    level: 'All levels',
    duration: '1:1',
    features: ['Fully custom programming', 'Nutrition & habit coaching', 'Weekly progress check-ins'],
  },
];

export const programCategories = ['All', 'Strength', 'Conditioning', 'Functional', 'Combat', 'Recovery', '1-on-1'];