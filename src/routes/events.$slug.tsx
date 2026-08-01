import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, Breadcrumb } from "../components/site-chrome";
import { getEvent, getFederationById, TIER_COLOR } from "../data/iysf";

export const Route = createFileRoute("/events/$slug")({
  head: ({ params }) => {
    const event = getEvent(params.slug);
    const name = event?.name ?? "Event";
    return {
      meta: [
        { title: `${name} — IYSF Events` },
        {
          name: "description",
          content: event
            ? `Details for ${event.name}, held in ${event.location}.`
            : "Event not found.",
        },
        { property: "og:title", content: `${name} — IYSF Events` },
        {
          property: "og:description",
          content: event ? `Details for ${event.name}.` : "Event not found.",
        },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: EventDetailPage,
});

function EventDetailPage() {
  const { slug } = Route.useParams();
  const event = getEvent(slug);

  if (!event) {
    return (
      <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
        <Nav />
        <main>
          <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8">
            <Breadcrumb parentLabel="Events" parentTo="/events" current="Not found" color="#EA088C" />
            <h1
              className="mt-4 text-[32px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              Event not found
            </h1>
            <Link
              to="/events"
              className="mt-6 inline-block text-sm font-semibold hover:underline"
              style={{ color: "#4898D3" }}
            >
              ← Back to calendar
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const host = getFederationById(event.hostFederationId);
  const color = TIER_COLOR[event.tier];
  const darkOnColor = color === "#FBAF43";

  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <Breadcrumb parentLabel="Events" parentTo="/events" current={event.name} color={color} />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                style={{ background: color, color: darkOnColor ? "#3A2400" : "#fff" }}
              >
                {event.tier}
              </span>
            </div>
            <h1
              className="mt-3 text-[32px] leading-[1.06] tracking-[-0.02em] md:text-[48px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              {event.name}
            </h1>
            <div
              className="mt-3 text-sm"
              style={{ fontFamily: "var(--font-mono)", color: "#575757" }}
            >
              {event.date} · {event.venue} · {event.location}
            </div>
            <p className="mt-5 max-w-[640px] text-base" style={{ color: "#575757" }}>
              {event.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {host && (
                <Link
                  to="/directory/$slug"
                  params={{ slug: host.slug }}
                  className="font-semibold hover:underline"
                  style={{ color: "#4898D3" }}
                >
                  Host federation: {host.name} →
                </Link>
              )}
              {event.results && (
                <Link
                  to="/results/$slug"
                  params={{ slug: event.slug }}
                  className="font-semibold hover:underline"
                  style={{ color: "#EA088C" }}
                >
                  View results →
                </Link>
              )}
            </div>
          </div>
        </section>

        <section style={{ background: "#FAFAFA" }} className="border-t border-black/[0.06]">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <div
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#4898D3" }}
            >
              Schedule
            </div>
            <ul className="divide-y divide-black/[0.08] rounded-lg border border-black/[0.08] bg-white">
              {event.schedule.map((s, i) => (
                <li key={i} className="grid grid-cols-1 gap-1 px-5 py-4 md:grid-cols-[100px_1fr_2fr] md:items-center md:gap-6">
                  <div style={{ fontFamily: "var(--font-mono)", color: "#575757" }} className="text-sm">
                    {s.day}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }} className="text-[15px]">
                    {s.label}
                  </div>
                  <div className="text-sm" style={{ color: "#575757" }}>
                    {s.detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
