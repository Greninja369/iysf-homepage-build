/* ------------------------------------------------------------------ */
/* IYSF structured data model.                                         */
/* Single source of truth for events, federations, and results so that  */
/* one record can be referenced from listing, detail, results, and      */
/* related-content sections without duplicating content.                */
/* Championship editions/years are drawn from the published history;    */
/* athlete names, standings, counts, venues and schedules are clearly   */
/* marked placeholders pending confirmation.                            */
/* ------------------------------------------------------------------ */

export type Region =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";

export type Tier =
  | "World Championship"
  | "Continental Qualifier"
  | "Junior Circuit"
  | "Academy Camp";

export type MembershipStatus = "Full Member" | "Provisional" | "Observer";

export type Division = "Junior" | "Adult" | "Masters";

export const REGIONS: (Region | "All")[] = [
  "All",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
];

export const DIVISIONS: Division[] = ["Junior", "Adult", "Masters"];

export const TIER_COLOR: Record<Tier, string> = {
  "World Championship": "#EA088C",
  "Continental Qualifier": "#4898D3",
  "Junior Circuit": "#FBAF43",
  "Academy Camp": "#575757",
};

export const STATUS_COLOR: Record<MembershipStatus, string> = {
  "Full Member": "#4898D3",
  Provisional: "#FBAF43",
  Observer: "#EA088C",
};

/* ------------------------------ Federations ----------------------- */

export type Federation = {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: Region;
  status: MembershipStatus;
  president: string;
  joined: string;
  /** external site — placeholder until real federation URLs are confirmed */
  website: string | null;
  athletes: string;
  judges: string;
  coaches: string;
  summary: string;
  lat: number;
  lng: number;
};

/* placeholder federation records — names, contacts, counts and
   coordinates are placeholders pending the real member list. */
export const FEDERATIONS: Federation[] = [
  {
    id: "f1",
    slug: "federation-placeholder-1",
    name: "Federation Name Placeholder 1",
    country: "Country Placeholder A",
    region: "Europe",
    status: "Full Member",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — the national governing body for competitive Yogasana in its territory, responsible for domestic selection and athlete licensing.",
    lat: 48.85,
    lng: 2.35,
  },
  {
    id: "f2",
    slug: "federation-placeholder-2",
    name: "Federation Name Placeholder 2",
    country: "Country Placeholder B",
    region: "Asia",
    status: "Full Member",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — runs national championships and nominates athletes to IYSF continental and world tiers.",
    lat: 28.61,
    lng: 77.21,
  },
  {
    id: "f3",
    slug: "federation-placeholder-3",
    name: "Federation Name Placeholder 3",
    country: "Country Placeholder C",
    region: "North America",
    status: "Provisional",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — currently in the provisional membership period while governance and safeguarding standards are ratified.",
    lat: 40.71,
    lng: -74.0,
  },
  {
    id: "f4",
    slug: "federation-placeholder-4",
    name: "Federation Name Placeholder 4",
    country: "Country Placeholder D",
    region: "Oceania",
    status: "Observer",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — observer status, attending IYSF congresses without voting rights while building a domestic competition structure.",
    lat: -33.87,
    lng: 151.21,
  },
  {
    id: "f5",
    slug: "federation-placeholder-5",
    name: "Federation Name Placeholder 5",
    country: "Country Placeholder E",
    region: "Africa",
    status: "Provisional",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — provisional member developing judge certification capacity with the IYSF Academy.",
    lat: -1.29,
    lng: 36.82,
  },
  {
    id: "f6",
    slug: "federation-placeholder-6",
    name: "Federation Name Placeholder 6",
    country: "Country Placeholder F",
    region: "South America",
    status: "Full Member",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — full member with voting rights at the IYSF congress and a continental qualifier hosting record.",
    lat: -23.55,
    lng: -46.63,
  },
  {
    id: "f7",
    slug: "federation-placeholder-7",
    name: "Federation Name Placeholder 7",
    country: "Country Placeholder G",
    region: "Asia",
    status: "Observer",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — observer federation attending IYSF technical seminars ahead of a full application.",
    lat: 35.68,
    lng: 139.69,
  },
  {
    id: "f8",
    slug: "federation-placeholder-8",
    name: "Federation Name Placeholder 8",
    country: "Country Placeholder H",
    region: "Europe",
    status: "Provisional",
    president: "President name placeholder",
    joined: "————",
    website: null,
    athletes: "——",
    judges: "——",
    coaches: "——",
    summary:
      "Placeholder profile copy — provisional member hosting junior circuit rounds while completing ratification.",
    lat: 52.52,
    lng: 13.4,
  },
];

/* ------------------------------ Events ---------------------------- */

export type ScheduleItem = { day: string; label: string; detail: string };

export type Standing = {
  rank: number;
  athlete: string;
  federationId: string;
  score: string;
};

export type EventRecord = {
  id: string;
  slug: string;
  name: string;
  tier: Tier;
  region: Region;
  status: "upcoming" | "past";
  /** display date string, rendered in monospace */
  date: string;
  dateISO: string;
  year: string;
  venue: string;
  location: string;
  lat: number;
  lng: number;
  hostFederationId: string | null;
  divisions: Division[];
  summary: string;
  schedule: ScheduleItem[];
  /** final standings by division — present on past events only */
  results?: Partial<Record<Division, Standing[]>>;
};

const PLACEHOLDER_SCHEDULE: ScheduleItem[] = [
  { day: "Day 1", label: "Accreditation & technical meeting", detail: "Placeholder — delegation check-in, judge briefing, draw of order." },
  { day: "Day 2", label: "Compulsory rounds", detail: "Placeholder — Junior and Adult compulsory routines across both floors." },
  { day: "Day 3", label: "Optional rounds & finals", detail: "Placeholder — optional routines, Masters division, medal ceremony." },
];

function standings(prefix: string, feds: string[]): Standing[] {
  return feds.map((federationId, i) => ({
    rank: i + 1,
    athlete: `${prefix} athlete placeholder ${i + 1}`,
    federationId,
    score: "——.——",
  }));
}

function resultsFor(feds: string[]): Partial<Record<Division, Standing[]>> {
  return {
    Junior: standings("Junior", feds),
    Adult: standings("Adult", [...feds].reverse()),
    Masters: standings("Masters", feds),
  };
}

/* Upcoming calendar — dates, venues and coordinates are placeholders. */
const UPCOMING_EVENTS: EventRecord[] = [
  {
    id: "u1",
    slug: "world-championship-2026",
    name: "IYSF World Championship 2026",
    tier: "World Championship",
    region: "Europe",
    status: "upcoming",
    date: "— / — / 2026",
    dateISO: "2026-01-01",
    year: "2026",
    venue: "Venue placeholder",
    location: "Host city placeholder, Europe",
    lat: 48.85,
    lng: 2.35,
    hostFederationId: "f1",
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "Placeholder summary — the flagship IYSF championship, contested across compulsory and optional rounds under the federation's standardized scoring system.",
    schedule: PLACEHOLDER_SCHEDULE,
  },
  {
    id: "u2",
    slug: "asian-qualifier-2026",
    name: "Asian Continental Qualifier 2026",
    tier: "Continental Qualifier",
    region: "Asia",
    status: "upcoming",
    date: "— / — / 2026",
    dateISO: "2026-02-01",
    year: "2026",
    venue: "Venue placeholder",
    location: "Host city placeholder, Asia",
    lat: 28.61,
    lng: 77.21,
    hostFederationId: "f2",
    divisions: ["Junior", "Adult"],
    summary:
      "Placeholder summary — continental qualification round awarding World Championship quota places to Asian member federations.",
    schedule: PLACEHOLDER_SCHEDULE,
  },
  {
    id: "u3",
    slug: "junior-circuit-2026-north-america",
    name: "Junior Circuit 2026 — North America",
    tier: "Junior Circuit",
    region: "North America",
    status: "upcoming",
    date: "— / — / 2026",
    dateISO: "2026-03-15",
    year: "2026",
    venue: "Venue placeholder",
    location: "Host city placeholder, North America",
    lat: 40.71,
    lng: -74.0,
    hostFederationId: "f3",
    divisions: ["Junior"],
    summary:
      "Placeholder summary — junior development round for athletes progressing toward continental selection.",
    schedule: PLACEHOLDER_SCHEDULE,
  },
  {
    id: "u4",
    slug: "academy-camp-2026-oceania",
    name: "Academy Camp 2026 — Oceania",
    tier: "Academy Camp",
    region: "Oceania",
    status: "upcoming",
    date: "— / — / 2026",
    dateISO: "2026-04-20",
    year: "2026",
    venue: "Venue placeholder",
    location: "Host city placeholder, Oceania",
    lat: -33.87,
    lng: 151.21,
    hostFederationId: "f4",
    divisions: ["Junior", "Adult"],
    summary:
      "Placeholder summary — a non-competitive Academy camp covering judging standards, coaching method and athlete safeguarding.",
    schedule: PLACEHOLDER_SCHEDULE,
  },
  {
    id: "u5",
    slug: "african-qualifier-2026",
    name: "African Continental Qualifier 2026",
    tier: "Continental Qualifier",
    region: "Africa",
    status: "upcoming",
    date: "— / — / 2026",
    dateISO: "2026-05-05",
    year: "2026",
    venue: "Venue placeholder",
    location: "Host city placeholder, Africa",
    lat: -1.29,
    lng: 36.82,
    hostFederationId: "f5",
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "Placeholder summary — continental qualification round for African member and provisional federations.",
    schedule: PLACEHOLDER_SCHEDULE,
  },
  {
    id: "u6",
    slug: "south-american-qualifier-2026",
    name: "South American Continental Qualifier 2026",
    tier: "Continental Qualifier",
    region: "South America",
    status: "upcoming",
    date: "— / — / 2026",
    dateISO: "2026-06-10",
    year: "2026",
    venue: "Venue placeholder",
    location: "Host city placeholder, South America",
    lat: -23.55,
    lng: -46.63,
    hostFederationId: "f6",
    divisions: ["Junior", "Adult"],
    summary:
      "Placeholder summary — continental qualification round awarding World Championship quota places in South America.",
    schedule: PLACEHOLDER_SCHEDULE,
  },
];

/* Past championships — editions and hosts follow the published IYSF
   history; standings, scores and athlete names are placeholders. */
const PAST_EVENTS: EventRecord[] = [
  {
    id: "p2025",
    slug: "world-championship-2025-cyberjaya",
    name: "IYSF World Championship 2025 — Cyberjaya",
    tier: "World Championship",
    region: "Asia",
    status: "past",
    date: "2025",
    dateISO: "2025-01-01",
    year: "2025",
    venue: "Venue placeholder",
    location: "Cyberjaya, Malaysia",
    lat: 2.92,
    lng: 101.65,
    hostFederationId: "f2",
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "The most recent World Championship edition, staged in Cyberjaya, Malaysia. Standings below are placeholders pending publication of the official results.",
    schedule: PLACEHOLDER_SCHEDULE,
    results: resultsFor(["f2", "f1", "f6", "f8"]),
  },
  {
    id: "p2022",
    slug: "world-championship-2022-bengaluru",
    name: "IYSF World Championship 2022 — Bengaluru",
    tier: "World Championship",
    region: "Asia",
    status: "past",
    date: "2022",
    dateISO: "2022-01-01",
    year: "2022",
    venue: "Venue placeholder",
    location: "Bengaluru, India",
    lat: 12.97,
    lng: 77.59,
    hostFederationId: "f2",
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "A return to the birthplace of the discipline. Standings below are placeholders pending publication of the official results.",
    schedule: PLACEHOLDER_SCHEDULE,
    results: resultsFor(["f2", "f7", "f1", "f5"]),
  },
  {
    id: "p2021",
    slug: "world-championship-2021-online",
    name: "IYSF World Championship 2021 — Online Edition",
    tier: "World Championship",
    region: "Europe",
    status: "past",
    date: "2021",
    dateISO: "2021-01-01",
    year: "2021",
    venue: "Remote — video submission",
    location: "Online edition, during COVID-19",
    lat: 46.52,
    lng: 6.63,
    hostFederationId: null,
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "A fully remote championship that kept the global calendar unbroken through the pandemic. Standings below are placeholders.",
    schedule: PLACEHOLDER_SCHEDULE,
    results: resultsFor(["f1", "f2", "f3", "f6"]),
  },
  {
    id: "p2018",
    slug: "world-championship-2018-beijing",
    name: "IYSF World Championship 2018 — Beijing",
    tier: "World Championship",
    region: "Asia",
    status: "past",
    date: "2018",
    dateISO: "2018-01-01",
    year: "2018",
    venue: "Venue placeholder",
    location: "Beijing, China",
    lat: 39.9,
    lng: 116.4,
    hostFederationId: "f7",
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "The championship reaches East Asia. Standings below are placeholders pending archival confirmation.",
    schedule: PLACEHOLDER_SCHEDULE,
    results: resultsFor(["f7", "f2", "f1", "f8"]),
  },
  {
    id: "p2016",
    slug: "world-championship-2016-pordenone",
    name: "IYSF World Championship 2016 — Pordenone",
    tier: "World Championship",
    region: "Europe",
    status: "past",
    date: "2016",
    dateISO: "2016-01-01",
    year: "2016",
    venue: "Venue placeholder",
    location: "Pordenone, Italy",
    lat: 45.96,
    lng: 12.66,
    hostFederationId: "f1",
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "Continental participation broadens across Europe. Standings below are placeholders pending archival confirmation.",
    schedule: PLACEHOLDER_SCHEDULE,
    results: resultsFor(["f1", "f8", "f2", "f3"]),
  },
  {
    id: "p2014",
    slug: "world-championship-2014-london",
    name: "IYSF World Championship 2014 — London",
    tier: "World Championship",
    region: "Europe",
    status: "past",
    date: "2014",
    dateISO: "2014-01-01",
    year: "2014",
    venue: "Venue placeholder",
    location: "London, United Kingdom",
    lat: 51.51,
    lng: -0.13,
    hostFederationId: "f8",
    divisions: ["Junior", "Adult", "Masters"],
    summary:
      "The first World Championship staged under the newly registered IYSF. Standings below are placeholders pending archival confirmation.",
    schedule: PLACEHOLDER_SCHEDULE,
    results: resultsFor(["f8", "f1", "f2", "f6"]),
  },
  {
    id: "p2003",
    slug: "ghosh-cup-2003-2013",
    name: "Annual Ghosh Cup — 2003 to 2013",
    tier: "World Championship",
    region: "North America",
    status: "past",
    date: "2003–2013",
    dateISO: "2003-01-01",
    year: "2003–2013",
    venue: "Los Angeles, USA",
    location: "Los Angeles, United States",
    lat: 34.05,
    lng: -118.24,
    hostFederationId: "f3",
    divisions: ["Adult"],
    summary:
      "Held annually in Los Angeles, the championship that sparked the global yoga sports movement and preceded the founding of IYSF. Standings are placeholders.",
    schedule: PLACEHOLDER_SCHEDULE,
    results: { Adult: standings("Adult", ["f3", "f1", "f2"]) },
  },
];

export const EVENTS: EventRecord[] = [...UPCOMING_EVENTS, ...PAST_EVENTS];

/* ------------------------------ Lookups --------------------------- */

export const upcomingEvents = () => EVENTS.filter((e) => e.status === "upcoming");
export const pastEvents = () =>
  EVENTS.filter((e) => e.status === "past").sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO)
  );

export const getEvent = (slug: string) => EVENTS.find((e) => e.slug === slug);
export const getEventById = (id: string) => EVENTS.find((e) => e.id === id);
export const getFederation = (slug: string) =>
  FEDERATIONS.find((f) => f.slug === slug);
export const getFederationById = (id: string | null) =>
  id ? FEDERATIONS.find((f) => f.id === id) : undefined;

/** Events a federation hosts, has hosted, or has athletes in the standings of. */
export function eventsForFederation(federationId: string) {
  const hosted = EVENTS.filter((e) => e.hostFederationId === federationId);
  const competed = EVENTS.filter(
    (e) =>
      e.hostFederationId !== federationId &&
      e.results &&
      Object.values(e.results).some((rows) =>
        (rows ?? []).some((r) => r.federationId === federationId)
      )
  );
  return { hosted, competed };
}

/** Federations represented in an event: host plus any in the standings. */
export function federationsInEvent(event: EventRecord): Federation[] {
  const ids = new Set<string>();
  if (event.hostFederationId) ids.add(event.hostFederationId);
  Object.values(event.results ?? {}).forEach((rows) =>
    (rows ?? []).forEach((r) => ids.add(r.federationId))
  );
  return [...ids]
    .map((id) => getFederationById(id))
    .filter((f): f is Federation => Boolean(f));
}

/** Related events — same region or same tier, excluding the event itself. */
export function relatedEvents(event: EventRecord, limit = 3) {
  return EVENTS.filter(
    (e) =>
      e.id !== event.id && (e.region === event.region || e.tier === event.tier)
  ).slice(0, limit);
}

/** Past events that have published (placeholder) standings. */
export const eventsWithResults = () => pastEvents().filter((e) => e.results);
