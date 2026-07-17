import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav, Footer } from "../components/site-chrome";
import { TrackIcon } from "../components/academy-shared";

export const Route = createFileRoute("/academy/")({
  head: () => ({
    meta: [
      { title: "Academy — IYSF" },
      {
        name: "description",
        content:
          "IYSF Academy — resources, standards, and certification pathways for judges, athletes, and coaches in competitive Yogasana.",
      },
      { property: "og:title", content: "Academy — IYSF" },
      {
        property: "og:description",
        content:
          "Resources and standards for judges, athletes, and coaches in competitive Yogasana.",
      },
    ],
  }),
  component: AcademyOverview,
});

/* placeholder tracks — replace with real academy content */
const TRACKS = [
  {
    slug: "judging" as const,
    name: "Judging",
    desc: "Certification standards and scoring frameworks for IYSF judges.",
    color: "#4898D3",
  },
  {
    slug: "athletes" as const,
    name: "Athletes",
    desc: "Development pathways and competition-readiness for registered athletes.",
    color: "#FBAF43",
  },
  {
    slug: "coaching" as const,
    name: "Coaching",
    desc: "Curriculum and certification tiers for coaches supporting IYSF athletes.",
    color: "#EA088C",
  },
];

/* placeholder stats — replace with real academy figures */
const STATS = [
  { label: "Certified judges", value: "—" },
  { label: "Active coaches", value: "—" },
  { label: "Athletes trained", value: "—" },
  { label: "Countries represented", value: "—" },
];

function AcademyOverview() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Header */}
      <section className="border-b border-black/5">
        <div className="mx-auto max-w-[1240px] px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#4898D3" }}
          >
            Academy
          </div>
          <h1
            className="mt-3 max-w-[900px] text-[44px] leading-[1.02] tracking-[-0.02em] md:text-[72px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              color: "#14181F",
              fontStretch: "expanded",
            }}
          >
            IYSF Academy
          </h1>
          <p
            className="mt-5 max-w-[640px] text-base leading-relaxed md:text-[17px]"
            style={{ color: "#575757" }}
          >
            {/* placeholder subcopy — replace with real academy description */}
            The IYSF Academy is the federation's resource center for judges, athletes, and coaches
            — standards, guides, and certification pathways in one place.
          </p>
        </div>
      </section>

      {/* Track cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {TRACKS.map((t) => (
              <Link
                key={t.slug}
                to={`/academy/${t.slug}` as "/academy/judging"}
                className="group flex flex-col rounded-lg border border-black/10 bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ ["--tw-ring-color" as never]: t.color }}
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-md"
                  style={{ background: `${t.color}18` }}
                >
                  <TrackIcon color={t.color} />
                </div>
                <div
                  className="text-[10.5px] font-mono font-medium tracking-widest"
                  style={{ color: t.color, fontFamily: "var(--font-mono)" }}
                >
                  TRACK
                </div>
                <div
                  className="mt-1 text-2xl leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    color: "#14181F",
                  }}
                >
                  {t.name}
                </div>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "#575757" }}
                >
                  {/* placeholder track description */}
                  {t.desc}
                </p>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-0.5"
                  style={{ color: t.color }}
                >
                  Learn more <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0D1830", color: "#B7C4DA" }}
      >
        {/* drifting-ring texture consistent with homepage */}
        <div
          aria-hidden="true"
          className="iysf-ring-drift pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.06]"
        />
        <div
          aria-hidden="true"
          className="iysf-ring-drift pointer-events-none absolute -left-32 -bottom-40 h-[420px] w-[420px] rounded-full border border-white/[0.05]"
        />
        <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div
            className="mb-8 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#FBAF43" }}
          >
            Academy at a glance
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="text-[44px] leading-none md:text-[56px]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {/* placeholder value */}
                  {s.value}
                </div>
                <div
                  className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "#B7C4DA" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}