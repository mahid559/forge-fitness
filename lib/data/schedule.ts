export type ScheduleClass = {
  time: string;
  title: string;
  coach: string;
  duration: string;
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  spots: number;
};

export type ScheduleDay = {
  id: string;
  label: string;
  short: string;
  classes: ScheduleClass[];
};

export const schedule: ScheduleDay[] = [
  {
    id: 'monday',
    label: 'Monday',
    short: 'Mon',
    classes: [
      { time: '06:00', title: 'Sunrise Strength', coach: 'Marcus Cole', duration: '60', level: 'All Levels', spots: 9 },
      { time: '08:30', title: 'CrossTraining WOD', coach: 'Andre Bennett', duration: '50', level: 'Intermediate', spots: 14 },
      { time: '12:15', title: 'Boxing Fundamentals', coach: 'Diego Morales', duration: '55', level: 'Beginner', spots: 13 },
      { time: '18:00', title: 'HIIT & Conditioning', coach: 'Elena Rossi', duration: '45', level: 'All Levels', spots: 7 },
      { time: '19:30', title: 'Mobility Reset', coach: 'Priya Raman', duration: '45', level: 'All Levels', spots: 11 },
    ],
  },
  {
    id: 'tuesday',
    label: 'Tuesday',
    short: 'Tue',
    classes: [
      { time: '06:00', title: 'Powerlifting Club', coach: 'Marcus Cole', duration: '75', level: 'Advanced', spots: 10 },
      { time: '09:00', title: 'Yoga & Mobility', coach: 'Priya Raman', duration: '60', level: 'All Levels', spots: 15 },
      { time: '12:30', title: 'Sweat & Sculpt', coach: 'Sofia Larsen', duration: '45', level: 'All Levels', spots: 8 },
      { time: '17:30', title: 'CrossTraining WOD', coach: 'Andre Bennett', duration: '50', level: 'All Levels', spots: 12 },
      { time: '19:00', title: 'Boxing Sparring Prep', coach: 'Diego Morales', duration: '60', level: 'Intermediate', spots: 6 },
    ],
  },
  {
    id: 'wednesday',
    label: 'Wednesday',
    short: 'Wed',
    classes: [
      { time: '06:00', title: 'Sunrise Strength', coach: 'Marcus Cole', duration: '60', level: 'All Levels', spots: 9 },
      { time: '08:30', title: 'HIIT & Conditioning', coach: 'Elena Rossi', duration: '45', level: 'Intermediate', spots: 13 },
      { time: '12:15', title: 'CrossTraining WOD', coach: 'Andre Bennett', duration: '50', level: 'Intermediate', spots: 14 },
      { time: '18:00', title: 'Strength & Technique', coach: 'Sofia Larsen', duration: '60', level: 'Beginner', spots: 10 },
      { time: '19:30', title: 'Evening Flow Yoga', coach: 'Priya Raman', duration: '60', level: 'All Levels', spots: 16 },
    ],
  },
  {
    id: 'thursday',
    label: 'Thursday',
    short: 'Thu',
    classes: [
      { time: '06:00', title: 'Powerlifting Club', coach: 'Marcus Cole', duration: '75', level: 'Advanced', spots: 11 },
      { time: '09:00', title: 'Mobility & Core', coach: 'Priya Raman', duration: '45', level: 'All Levels', spots: 12 },
      { time: '12:30', title: 'Boxing Fundamentals', coach: 'Diego Morales', duration: '55', level: 'Beginner', spots: 9 },
      { time: '17:30', title: 'HIIT & Conditioning', coach: 'Elena Rossi', duration: '45', level: 'All Levels', spots: 7 },
      { time: '19:00', title: 'CrossTraining WOD', coach: 'Andre Bennett', duration: '50', level: 'All Levels', spots: 14 },
    ],
  },
  {
    id: 'friday',
    label: 'Friday',
    short: 'Fri',
    classes: [
      { time: '06:00', title: 'Sunrise Strength', coach: 'Marcus Cole', duration: '60', level: 'All Levels', spots: 8 },
      { time: '08:30', title: 'Yoga & Mobility', coach: 'Priya Raman', duration: '60', level: 'All Levels', spots: 15 },
      { time: '12:15', title: 'Sweat & Sculpt', coach: 'Sofia Larsen', duration: '45', level: 'All Levels', spots: 9 },
      { time: '17:30', title: 'Boxing Technique', coach: 'Diego Morales', duration: '55', level: 'Intermediate', spots: 10 },
      { time: '18:45', title: 'Friday Night WOD', coach: 'Andre Bennett', duration: '60', level: 'All Levels', spots: 18 },
    ],
  },
  {
    id: 'saturday',
    label: 'Saturday',
    short: 'Sat',
    classes: [
      { time: '07:00', title: 'Team Strength', coach: 'Marcus Cole', duration: '75', level: 'All Levels', spots: 16 },
      { time: '09:00', title: 'CrossTraining WOD', coach: 'Andre Bennett', duration: '60', level: 'All Levels', spots: 15 },
      { time: '10:30', title: 'Boxing Sparring Prep', coach: 'Diego Morales', duration: '60', level: 'Intermediate', spots: 6 },
      { time: '12:00', title: 'Recovery Yoga', coach: 'Priya Raman', duration: '60', level: 'All Levels', spots: 17 },
    ],
  },
  {
    id: 'sunday',
    label: 'Sunday',
    short: 'Sun',
    classes: [
      { time: '07:30', title: 'Slow-Sunday Strength', coach: 'Sofia Larsen', duration: '60', level: 'All Levels', spots: 14 },
      { time: '09:30', title: 'Breath & Mobility', coach: 'Priya Raman', duration: '60', level: 'All Levels', spots: 18 },
      { time: '11:00', title: 'Open Gym Coaching Hour', coach: 'Team Forge', duration: '60', level: 'All Levels', spots: 20 },
    ],
  },
];

export const levelStyles: Record<ScheduleClass['level'], string> = {
  'All Levels': 'bg-steel-800/80 text-steel-200',
  Beginner: 'bg-emerald-500/10 text-emerald-400',
  Intermediate: 'bg-ember-500/10 text-ember-400',
  Advanced: 'bg-ember-500/20 text-ember-300',
};