import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, Breadcrumb, JoinCta } from "../components/site-chrome";
import {
  getEvent,
  getFederationById,
  federationsInEvent,
  relatedEvents,
  eventsWithResults,
  DIVISIONS,
  TIER_COLOR,
} from "../data/iysf";

export const Route = createFileRoute("/results/$slug")({
  head: ({ params }) => {
    const event = getEvent(params.slug);
    const name = event?.name ?? "Results";
    return {
      meta: [
        { title: `${name} — Results — IYSF` },
        {
          name: "description",
          content: event
            ? `Final standings for ${event.name}, held in ${event.location}.`
            : "Championship results not found.",
        },
        { property: "og:title", content: `${name} — Results — IYSF` },
        {
          property: "og:description",
          content: event
            ? `Final standings for ${event.name}.`
            : "Championship results not found.",
        },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ResultsDetailPage,
});

function ResultsDetailPage() {
  const { slug } = Route.useParams();
  const event = getEvent(slug);

  if (!event || !event.results) {
    return (
      <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
        <Nav />
        <main>
          <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8">
            <Breadcrumb parentLabel="Results" parentTo="/results" current="Not found" color="#EA088C" />
            <h1
              className="mt-4 text-[32px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              Results not found
            </h1>
            <p className="mt-3 max-w-[560px] text-base" style={{ color: "#575757" }}>
              We couldn't find results for that championship. It may not have
              published standings yet.
            </p>
            <Link
              to="/results"
              className="mt-6 inline-block text-sm font-semibold hover:underline"
              style={{ color: "#4898D3" }}
            >
              ← Back to results
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const host = getFederationById(event.hostFederationId);
  const feds = federationsInEvent(event);
  const related = eventsWithResults()
    .filter((e) => e.id !== event.id)
    .filter((e) => relatedEvents(event, 100).some((r) => r.id === e.id))
    .slice(0, 3);
  const color = TIER_COLOR[event.tier];

  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <Breadcrumb parentLabel="Results" parentTo="/results" current={event.name} color={color} />
            <h1
              className="mt-4 text-[32px] leading-[1.06] tracking-[-0.02em] md:text-[48px]"
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

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                to="/events/$slug"
                params={{ slug: event.slug }}
                className="font-semibold hover:underline"
                style={{ color: "#4898D3" }}
              >
                Event details →
              </Link>
            </div>
          </div>
        </section>

        <section style={{ background: "#FAFAFA" }} className="border-t border-black/[0.06]">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <div
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#EA088C" }}
            >
              Final standings
            </div>
            <h2
              className="text-[26px] md:text-[32px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              Results by division
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#575757" }}>
              Athlete names and scores are placeholders pending official publication.
            </p>

            <div className="mt-8 flex flex-col gap-8">
              {DIVISIONS.filter((d) => event.results?.[d]).map((division) => {
                const rows = event.results?.[division] ?? [];
                return (
                  <div
                    key={division}
                    className="overflow-hidden rounded-lg border border-black/[0.08] bg-white"
                  >
                    <h3
                      className="border-b border-black/[0.08] px-5 py-3 text-[15px]"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
                    >
                      {division} division
                    </h3>
                    <table className="w-full text-sm">
                      <caption className="sr-only">
                        {division} division final standings for {event.name}
                      </caption>
                      <thead>
                        <tr className="text-left" style={{ color: "#575757" }}>
                          <th className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em]">Rank</th>
                          <th className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em]">Athlete</th>
                          <th className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em]">Federation</th>
                          <th className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em]">Score</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/[0.06]">
                        {rows.map((r) => {
                          const fed = getFederationById(r.federationId);
                          return (
                            <tr key={r.rank}>
                              <td
                                className="px-5 py-3"
                                style={{ fontFamily: "var(--font-mono)", color: "#14181F" }}
                              >
                                {r.rank}
                              </td>
                              <td className="px-5 py-3" style={{ color: "#14181F" }}>
                                {r.athlete}
                              </td>
                              <td className="px-5 py-3">
                                {fed ? (
                                  <Link
                                    to="/directory/$slug"
                                    params={{ slug: fed.slug }}
                                    className="hover:underline"
                                    style={{ color: "#4898D3" }}
                                  >
                                    {fed.name}
                                  </Link>
                                ) : (
                                  <span style={{ color: "#575757" }}>—</span>
                                )}
                              </td>
                              <td
                                className="px-5 py-3"
                                style={{ fontFamily: "var(--font-mono)", color: "#14181F" }}
                              >
                                {r.score}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-black/[0.06]">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {host && (
                <div className="rounded-lg border border-black/[0.08] bg-white p-6">
                  <div
                    className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "#4898D3" }}
                  >
                    Host federation
                  </div>
                  <Link
                    to="/directory/$slug"
                    params={{ slug: host.slug }}
                    className="text-lg hover:underline"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
                  >
                    {host.name}
                  </Link>
                  <p className="mt-1 text-sm" style={{ color: "#575757" }}>
                    {host.country}
                  </p>
                </div>
              )}

              <div className="rounded-lg border border-black/[0.08] bg-white p-6">
                <div
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#EA088C" }}
                >
                  Federations represented
                </div>
                <div className="flex flex-wrap gap-2">
                  {feds.map((f) => (
                    <Link
                      key={f.id}
                      to="/directory/$slug"
                      params={{ slug: f.slug }}
                      className="rounded-full border px-3 py-1.5 text-xs font-medium hover:bg-black/[0.03]"
                      style={{ borderColor: "rgba(0,0,0,0.12)", color: "#14181F" }}
                    >
                      {f.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section style={{ background: "#FAFAFA" }} className="border-t border-black/[0.06]">
            <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
              <div
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#575757" }}
              >
                Related results
              </div>
              <ul className="mt-4 divide-y divide-black/[0.08] rounded-lg border border-black/[0.08] bg-white">
                {related.map((e) => (
                  <li key={e.id} className="flex flex-col gap-1 px-5 py-4 md:flex-row md:items-center md:justify-between">
                    <Link
                      to="/results/$slug"
                      params={{ slug: e.slug }}
                      className="text-[15px] hover:underline"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
                    >
                      {e.name}
                    </Link>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "#575757" }}
                    >
                      {e.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <JoinCta />
      <Footer />
    </div>
  );
}
