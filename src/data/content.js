export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Coach', href: '#coach' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Events', href: '#events' },
];

export const HERO = {
  badge: 'PERFECT FITNESS PATH',
  headline: ['Perfect', 'Fitness Path', 'With'],
  brand: 'Y16',
  subtext:
    'Unlock your full potential with tailored training programs, all crafted to help you achieve and exceed your fitness goals every day.',
  cta_primary: 'Get Started',
  cta_secondary: 'Join Community',
  stats: [
    { value: 500, suffix: 'K+', label: 'Personalized training programs achieved' },
    { value: 10, suffix: 'K+', label: 'Achieving monthly results' },
  ],
};

export const HEALTH_METRICS = {
  badge: 'SELECT YOUR NEEDS',
  headline: 'Personalize Your Health Journey',
  subtext:
    '"Choose your focus area and get tailored recommendations for nutrition, exercise, and wellness all in one place." We go beyond fitness by empowering you with insights and guidance to boost your blood cell production, enhance circulation, and improve heart health.',
  categories: [
    { id: 1, icon: '🫀', label: 'Heart Health', color: '#FF6B8A', bg: '#FFF0F3' },
    { id: 2, icon: '🧠', label: 'Brain Power', color: '#7B61FF', bg: '#F3F0FF' },
    { id: 3, icon: '🫁', label: 'Lung Capacity', color: '#3D7BFF', bg: '#F0F4FF' },
    { id: 4, icon: '🦴', label: 'Bone Strength', color: '#FF9F43', bg: '#FFF6ED' },
    { id: 5, icon: '💪', label: 'Muscle Growth', color: '#10B981', bg: '#ECFDF5' },
    { id: 6, icon: '⚖️', label: 'Weight Balance', color: '#F59E0B', bg: '#FFFBEB' },
  ],
};

export const NUTRITION = {
  badge: 'BALANCED MEALS',
  headline: ['Fit your body with', 'balanced meals'],
  subtext:
    'With options for every dietary preference including vegan, non-vegan, and allergy-friendly choices our meal plans are designed to help you stay delicious, nutritious meals while achieving your health goals.',
  calories: {
    value: 2095,
    unit: 'Kcal',
    label: 'Daily Intake',
    breakdown: [
      { name: 'Protein', pct: 30, color: '#FF6B8A' },
      { name: 'Carbs', pct: 45, color: '#3D7BFF' },
      { name: 'Fats', pct: 25, color: '#FF9F43' },
    ],
  },
};

export const YOGA_STYLES = [
  { id: 1, title: 'Muscle Stretch', image: '/public/Muscle-Stretch-yoga.png ', tag: 'Beginner' },
  { id: 2, title: 'Relaxation Stretch', image: '/public/relaxing-yoga.png', tag: 'Intermediate' },
  { id: 3, title: 'Balance Booster', image: '/public/Balance-booster-yoga.png', tag: 'Advanced' },
  { id: 4, title: 'Flexibility Enhancer', image: 'Flexibility-yoga.png', tag: 'Beginner' },
  { id: 5, title: 'Full Body Stretch', image: '/public/backbend-posture-yoga.png', tag: 'Intermediate' },
  { id: 6, title: 'Strength Flow', image: 'Strength-flow-yoga.png', tag: 'Advanced' },
];

export const EVENTS = [
  {
    id: '01',
    title: 'Y16 Wellness Expo',
    date: 'Sat, May 3 03 2025',
    venue: 'Dairema Stadium',
  },
  {
    id: '02',
    title: 'Mind Balance Retreat',
    date: 'Sun, Jun 08 03 2025',
    venue: 'Dairema Stadium',
  },
  {
    id: '03',
    title: 'Training Workshop',
    date: 'Sunday Workshop 14, 2025 Dairema Stadium',
    venue: 'Dairema Stadium',
  },
  {
    id: '04',
    title: 'Meal Planning Seminar',
    date: 'Sunday Seminar Oct 3rd, 2025',
    venue: 'Dairema Stadium',
  },
];
