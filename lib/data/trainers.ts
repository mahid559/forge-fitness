import { IMAGES } from '@/lib/images';

export type Trainer = {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialties: string[];
  bio: string;
  certifications: string;
  color: string; // tailwind gradient classes for card accents
};

export const trainers: Trainer[] = [
  {
    id: 'marcus',
    name: 'Marcus Cole',
    role: 'Head Strength Coach',
    image: IMAGES.trainers.marcus,
    experience: '18 yrs',
    specialties: ['Powerlifting', 'Olympic Lifting', 'Strength Screens'],
    bio: 'Former national-level powerlifter who has coached 40+ athletes to podium finishes. Marcus believes strength is the foundation of everything.',
    certifications: 'CSCS · USAW L2 · Precision Nutrition L1',
    color: 'from-ember-500 to-embergold-400',
  },
  {
    id: 'elena',
    name: 'Elena Rossi',
    role: 'HIIT & Conditioning Lead',
    image: IMAGES.trainers.elena,
    experience: '10 yrs',
    specialties: ['HIIT', 'Endurance', 'Athletic Development'],
    bio: 'A competitive OCR athlete who builds conditioning programs that are equal parts brutal and sustainable — and always fun.',
    certifications: 'NASM-CPT · FRC Mobility Specialist',
    color: 'from-ember-600 to-ember-400',
  },
  {
    id: 'andre',
    name: 'Andre Bennett',
    role: 'Head CrossTraining Coach',
    image: IMAGES.trainers.andre,
    experience: '12 yrs',
    specialties: ['WOD Programming', 'Gymnastics', 'Olympic Lifting'],
    bio: 'Andre programmed for 200+ athletes and ran one of the region’s best competitive boxes before joining Forge. Be ready to move.',
    certifications: 'CF-L3 · USAW L1 · Mobility WOD',
    color: 'from-ember-500 to-ember-300',
  },
  {
    id: 'priya',
    name: 'Priya Raman',
    role: 'Yoga & Mobility Specialist',
    image: IMAGES.trainers.priya,
    experience: '9 yrs',
    specialties: ['Mobility', 'Recovery', 'Breathwork'],
    bio: 'Priya blends modern mobility science with classical movement practice to help lifters move better, recover faster and stay pain-free.',
    certifications: 'RYT-500 · FRCms · Pn2',
    color: 'from-ember-500 to-embergold-400',
  },
  {
    id: 'diego',
    name: 'Diego Morales',
    role: 'Boxing & Combat Coach',
    image: IMAGES.trainers.diego,
    experience: '15 yrs',
    specialties: ['Striking', 'Boxing Fitness', 'Defense'],
    bio: 'A 25-bout amateur record and a decade of cornering fighters, Diego brings sharp technique and relentless energy to every session.',
    certifications: 'USAB Certified Coach · NSCA-CPT',
    color: 'from-ember-600 to-ember-500',
  },
  {
    id: 'sofia',
    name: 'Sofia Larsen',
    role: 'Personal Training Director',
    image: IMAGES.trainers.sofia,
    experience: '11 yrs',
    specialties: ['Body Composition', 'Nutrition', 'Habit Coaching'],
    bio: 'Sofia has guided 500+ clients through transformations with a systems-first approach — training, nutrition and mindset in one plan.',
    certifications: 'ACE-CPT · Precision Nutrition L2',
    color: 'from-ember-500 to-ember-400',
  },
];