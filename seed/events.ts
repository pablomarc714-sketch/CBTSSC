export type Event = {
  slug: string;
  title: string;
  category: "Conference" | "Workshop" | "Webinar" | "Consultation Group";
  date: string; // ISO
  endDate?: string;
  location: string;
  format: "In-person" | "Virtual" | "Hybrid";
  ceHours?: number;
  description: string;
  longDescription?: string;
  registrationUrl?: string;
  speakers?: { name: string; credentials: string; affiliation: string }[];
  image: string;
};

export const EVENTS: Event[] = [
  {
    slug: "fall-conference-2026",
    title: "Annual Fall Conference: CBT in the Era of Brief Therapy",
    category: "Conference",
    date: "2026-10-17T08:30:00-07:00",
    endDate: "2026-10-18T17:00:00-07:00",
    location: "UCLA Luskin Conference Center, Los Angeles",
    format: "In-person",
    ceHours: 14,
    description:
      "Two days of plenaries, breakout workshops, and clinical case discussions on adapting CBT for time-limited care settings.",
    longDescription:
      "Our flagship fall conference brings together clinicians, researchers, and trainees from across Southern California for two days of evidence-based learning. This year's theme examines how CBT protocols adapt to the realities of brief therapy, including managed care timelines, single-session interventions, and digital adjuncts.",
    registrationUrl: "#",
    speakers: [
      { name: "Sara Lin", credentials: "PhD", affiliation: "UCLA Semel Institute" },
      { name: "Marcus Reyes", credentials: "PsyD", affiliation: "USC Keck School of Medicine" },
      { name: "Adaeze Okafor", credentials: "PhD, ABPP", affiliation: "Cedars-Sinai" },
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "exposure-therapy-workshop-june",
    title: "Foundations of Exposure Therapy for Anxiety Disorders",
    category: "Workshop",
    date: "2026-06-14T09:00:00-07:00",
    endDate: "2026-06-14T16:00:00-07:00",
    location: "USC Health Sciences Campus",
    format: "Hybrid",
    ceHours: 6,
    description:
      "A practical workshop on designing and implementing in-vivo, imaginal, and interoceptive exposure with adult clients.",
    longDescription:
      "Designed for licensed clinicians and supervised trainees, this workshop reviews the inhibitory learning framework, walks through hierarchy construction, and includes live role-plays in small groups.",
    registrationUrl: "#",
    speakers: [
      { name: "Priya Shah", credentials: "PhD", affiliation: "VA Greater Los Angeles" },
    ],
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "monthly-consultation-group-july",
    title: "Monthly Peer Consultation: Treating OCD with ERP",
    category: "Consultation Group",
    date: "2026-07-09T19:00:00-07:00",
    location: "Virtual (Zoom)",
    format: "Virtual",
    ceHours: 1.5,
    description:
      "Member-only consultation for clinicians working with OCD. Bring a de-identified case for group discussion.",
    registrationUrl: "#",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cbt-for-insomnia-webinar",
    title: "CBT-I in Primary Care Settings",
    category: "Webinar",
    date: "2026-08-21T12:00:00-07:00",
    location: "Virtual",
    format: "Virtual",
    ceHours: 1,
    description:
      "A lunchtime webinar on integrating brief CBT for insomnia into busy outpatient practices.",
    registrationUrl: "#",
    speakers: [
      { name: "Jonathan Park", credentials: "MD", affiliation: "Kaiser Permanente Southern California" },
    ],
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "student-research-symposium",
    title: "Student & Early-Career Research Symposium",
    category: "Conference",
    date: "2026-11-08T10:00:00-08:00",
    location: "Cedars-Sinai Education Center",
    format: "In-person",
    ceHours: 5,
    description:
      "Poster sessions and lightning talks from doctoral students and early-career clinicians across SoCal training programs.",
    registrationUrl: "#",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "trauma-focused-cbt-intensive",
    title: "Trauma-Focused CBT Intensive (3-day)",
    category: "Workshop",
    date: "2026-09-25T09:00:00-07:00",
    endDate: "2026-09-27T16:00:00-07:00",
    location: "Long Beach, CA",
    format: "In-person",
    ceHours: 20,
    description:
      "A foundational training in Trauma-Focused CBT for clinicians treating children, adolescents, and their caregivers.",
    registrationUrl: "#",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getUpcomingEvents(limit?: number) {
  const now = new Date();
  const upcoming = EVENTS.filter((e) => new Date(e.date) >= now).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
}

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}
