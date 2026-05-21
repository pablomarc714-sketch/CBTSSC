export type Therapist = {
  slug: string;
  name: string;
  credentials: string;
  pronouns?: string;
  city: string;
  region: "Los Angeles" | "Orange County" | "San Diego" | "Inland Empire" | "Ventura / Santa Barbara";
  specialties: string[];
  populations: string[];
  insurance: string[];
  telehealth: boolean;
  acceptingNewPatients: boolean;
  bio: string;
  photo: string;
};

export const SPECIALTY_OPTIONS = [
  "Anxiety",
  "Depression",
  "OCD",
  "PTSD & Trauma",
  "Panic Disorder",
  "Social Anxiety",
  "Eating Disorders",
  "Insomnia (CBT-I)",
  "Health Anxiety",
  "Perinatal Mental Health",
  "ADHD (adult)",
] as const;

export const INSURANCE_OPTIONS = [
  "Aetna",
  "Anthem Blue Cross",
  "Blue Shield of California",
  "Cigna",
  "Kaiser Permanente",
  "Medicare",
  "Out-of-network only",
] as const;

export const REGION_OPTIONS = [
  "Los Angeles",
  "Orange County",
  "San Diego",
  "Inland Empire",
  "Ventura / Santa Barbara",
] as const;

export const THERAPISTS: Therapist[] = [
  {
    slug: "elena-rivera",
    name: "Elena Rivera",
    credentials: "PhD",
    pronouns: "she/her",
    city: "Santa Monica",
    region: "Los Angeles",
    specialties: ["Anxiety", "OCD", "Panic Disorder"],
    populations: ["Adults"],
    insurance: ["Aetna", "Blue Shield of California", "Out-of-network only"],
    telehealth: true,
    acceptingNewPatients: true,
    bio: "Cognitive behavioral therapy with a focus on exposure-based treatment for anxiety and OCD spectrum conditions.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "michael-chen",
    name: "Michael Chen",
    credentials: "PsyD",
    pronouns: "he/him",
    city: "Pasadena",
    region: "Los Angeles",
    specialties: ["Depression", "Insomnia (CBT-I)", "Health Anxiety"],
    populations: ["Adults", "Older adults"],
    insurance: ["Anthem Blue Cross", "Cigna", "Medicare"],
    telehealth: true,
    acceptingNewPatients: false,
    bio: "Brief, structured CBT for mood disorders, sleep difficulties, and health-related anxiety in adult and geriatric populations.",
    photo:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "amelia-thompson",
    name: "Amelia Thompson",
    credentials: "LMFT",
    pronouns: "she/her",
    city: "Long Beach",
    region: "Los Angeles",
    specialties: ["PTSD & Trauma", "Anxiety", "Perinatal Mental Health"],
    populations: ["Adults"],
    insurance: ["Kaiser Permanente", "Out-of-network only"],
    telehealth: true,
    acceptingNewPatients: true,
    bio: "Trauma-focused CBT and Cognitive Processing Therapy for adults navigating post-traumatic stress and perinatal mood concerns.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "david-okafor",
    name: "David Okafor",
    credentials: "LCSW",
    pronouns: "he/him",
    city: "Irvine",
    region: "Orange County",
    specialties: ["Social Anxiety", "Depression", "ADHD (adult)"],
    populations: ["Adolescents", "Adults"],
    insurance: ["Aetna", "Anthem Blue Cross", "Blue Shield of California"],
    telehealth: false,
    acceptingNewPatients: true,
    bio: "In-person CBT for late adolescents and adults with social anxiety, mood difficulties, and executive functioning concerns.",
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "rachel-goldstein",
    name: "Rachel Goldstein",
    credentials: "PhD",
    pronouns: "she/her",
    city: "San Diego",
    region: "San Diego",
    specialties: ["Eating Disorders", "Anxiety", "Depression"],
    populations: ["Adolescents", "Adults"],
    insurance: ["Out-of-network only"],
    telehealth: true,
    acceptingNewPatients: true,
    bio: "Enhanced CBT (CBT-E) for adolescents and adults with eating disorders, along with co-occurring anxiety and mood concerns.",
    photo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "thomas-nguyen",
    name: "Thomas Nguyen",
    credentials: "PsyD",
    pronouns: "he/him",
    city: "Riverside",
    region: "Inland Empire",
    specialties: ["PTSD & Trauma", "Depression", "Anxiety"],
    populations: ["Adults", "Veterans"],
    insurance: ["Medicare", "Kaiser Permanente", "Out-of-network only"],
    telehealth: true,
    acceptingNewPatients: true,
    bio: "Prolonged Exposure and Cognitive Processing Therapy for adults, with experience treating veterans and first responders.",
    photo:
      "https://images.unsplash.com/photo-1559548331-f9cb98280344?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "maya-patel",
    name: "Maya Patel",
    credentials: "PhD",
    pronouns: "she/her",
    city: "Ventura",
    region: "Ventura / Santa Barbara",
    specialties: ["Anxiety", "OCD", "Health Anxiety"],
    populations: ["Children", "Adolescents", "Adults"],
    insurance: ["Anthem Blue Cross", "Out-of-network only"],
    telehealth: true,
    acceptingNewPatients: false,
    bio: "Exposure and response prevention (ERP) for children, teens, and adults with OCD and anxiety disorders.",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    slug: "andre-williams",
    name: "Andre Williams",
    credentials: "PhD",
    pronouns: "he/him",
    city: "Los Angeles",
    region: "Los Angeles",
    specialties: ["Depression", "Social Anxiety", "ADHD (adult)"],
    populations: ["Adults"],
    insurance: ["Aetna", "Cigna", "Out-of-network only"],
    telehealth: true,
    acceptingNewPatients: true,
    bio: "Behavioral activation and cognitive therapy for adult depression, with a special interest in BIPOC mental health.",
    photo:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
  },
];
