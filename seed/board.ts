export type BoardMember = {
  name: string;
  credentials: string;
  role: string;
  affiliation: string;
  bio: string;
  photo: string;
};

export const BOARD: BoardMember[] = [
  {
    name: "Eleanor Vasquez",
    credentials: "PhD, ABPP",
    role: "President",
    affiliation: "UCLA Department of Psychiatry & Biobehavioral Sciences",
    bio: "Eleanor's clinical and research work focuses on cognitive therapy for late-life depression. She has served on the CBTSSC board for nine years and previously chaired our education committee.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marcus Reyes",
    credentials: "PsyD",
    role: "President-Elect",
    affiliation: "USC Keck School of Medicine",
    bio: "Marcus directs an outpatient anxiety disorders clinic and supervises postdoctoral residents in exposure-based interventions for OCD and PTSD.",
    photo:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Shah",
    credentials: "PhD",
    role: "Treasurer",
    affiliation: "VA Greater Los Angeles Healthcare System",
    bio: "Priya is a staff psychologist specializing in trauma-focused CBT for veterans and serves as a national trainer for Prolonged Exposure therapy.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Jonathan Park",
    credentials: "MD",
    role: "Secretary",
    affiliation: "Kaiser Permanente Southern California",
    bio: "Jonathan is a psychiatrist with a special interest in integrating CBT for insomnia and behavioral activation into primary care.",
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Adaeze Okafor",
    credentials: "PhD, ABPP",
    role: "Director of Education",
    affiliation: "Cedars-Sinai Medical Center",
    bio: "Adaeze leads our continuing education program and consults to hospital systems implementing measurement-based CBT services.",
    photo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Daniel Kim",
    credentials: "LCSW",
    role: "Director of Community Outreach",
    affiliation: "Didi Hirsch Mental Health Services",
    bio: "Daniel coordinates outreach to community-based clinics and oversees our public-facing educational programming on CBT.",
    photo:
      "https://images.unsplash.com/photo-1559548331-f9cb98280344?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sara Lin",
    credentials: "PhD",
    role: "Director of Research",
    affiliation: "UCLA Semel Institute",
    bio: "Sara's research examines dissemination and implementation of evidence-based psychotherapies in real-world community settings.",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rafael Ortega",
    credentials: "PhD",
    role: "Student & Trainee Liaison",
    affiliation: "UC San Diego (Postdoctoral Fellow)",
    bio: "Rafael represents students and early-career members and chairs our annual trainee research symposium.",
    photo:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
  },
];
