import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, JoinCta } from "../components/site-chrome";
import {
  eventsWithResults,
  TIER_COLOR,
  type Division,
} from "../data/iysf";

type ResultsSearch = { year?: string };

function validateSearch(search: Record<string, unknown>): ResultsSearch {
  const year = search.year;
  return { year: typeof year === "string" && year.length > 0 ? year : undefined };
}

export const Route = createFileRoute("/results/")({
  validateSearch,
  head: () => ({
    meta: [
      { title: "Championship Results — IYSF" },
      {
        name: "description",
        content:
          "Final standings from past IYSF world championships and continental qualifiers. Placeholder results pending official publication.",
      },
      { property: "og:title", content: "Championship Results — IYSF" },
      {
        property: "og:description",
        content:
          "Browse final standings by division from every past IYSF championship edition.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResultsIndexPage,
});

/** A single event's `year` field may be a range like "2003–2013" — a
 *  filter value matching any year within that range should match it. */
function eventMatchesYear(eventYear: string, filterYear: string) {
  if (eventYear === filterYear) return true;
  const rangeMatch = eventYear.match(/^(\d{4})[\u2013-](\d{4})$/);
  const filterNum = Number(filterYear);
  if (rangeMatch && Number.isFinite(filterNum)) {
    const [, start, end] = rangeMatch;
    return filterNum >= Number(start) && filterNum <= Number(end);
  }
  return false;
}

function divisionSummary(divisions: Division[]) {
  return divisions.join(" · ");
}

function ResultsIndexPage() {
  const { year } = Route.useSearch();
  const all = eventsWithResults();
  const list = year ? all.filter((e) => eventMatchesYear(e.year, year)) : all;

  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <div
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#EA088C" }}
            >
              Results
            </div>
            <h1
              className="text-[36px] leading-[1.04] tracking-[-0.02em] md:text-[60px]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                color: "#14181F",
                fontStretch: "expanded",
              }}
            >
              Championship results
            </h1>
            <p
              className="mt-4 max-w-[640px] text-base md:text-[17px]"
              style={{ color: "#575757" }}
            >
              Final standings from past IYSF championship editions. Names and
              scores below are placeholders pending publication of the
              official results by the Technical Committee.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <Link
                to="/events"
                className="font-semibold hover:underline"
                style={{ color: "#4898D3" }}
              >
                Full championship calendar →
              </Link>
              <Link
                to="/directory"
                className="font-semibold hover:underline"
                style={{ color: "#4898D3" }}
              >
                Member federation directory →
              </Link>
            </div>

            {year && (
              <div
                className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                style={{ borderColor: "rgba(0,0,0,0.12)", color: "#14181F" }}
              >
                <span style={{ fontFamily: "var(--font-mono)" }}>
                  Filtered: {year}
                </span>
                <Link
                  to="/results"
                  className="font-semibold hover:underline"
                  style={{ color: "#EA088C" }}
                >
                  clear filter
                </Link>
              </div>
            )}
          </div>
        </section>

        <section style={{ background: "#FAFAFA" }} className="border-t border-black/[0.06]">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            {list.length === 0 ? (
              <div
                className="rounded-lg border border-black/[0.08] bg-white p-8 text-center text-sm"
                style={{ color: "#575757" }}
              >
                No results match that year.{" "}
                <Link to="/results" style={{ color: "#4898D3" }} className="font-semibold hover:underline">
                  View all results
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-black/[0.08] rounded-lg border border-black/[0.08] bg-white">
                {list.map((e) => {
                  const color = TIER_COLOR[e.tier];
                  const darkOnColor = color === "#FBAF43";
                  return (
                    <li
                      key={e.id}
                      className="grid grid-cols-1 gap-2 px-4 py-5 md:grid-cols-[120px_1.4fr_1fr_auto_auto] md:items-center md:gap-6 md:px-5"
                    >
                      <div
                        className="text-[13px]"
                        style={{ fontFamily: "var(--font-mono)", color: "#575757" }}
                      >
                        {e.date}
                      </div>
                      <div>
                        <Link
                          to="/results/$slug"
                          params={{ slug: e.slug }}
                          className="text-[16px] hover:underline"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            color: "#14181F",
                          }}
                        >
                          {e.name}
                        </Link>
                        <div
                          className="mt-0.5 text-xs"
                          style={{ fontFamily: "var(--font-mono)", color: "#575757" }}
                        >
                          {divisionSummary(e.divisions)}
                        </div>
                      </div>
                      <div className="text-sm" style={{ color: "#575757" }}>
                        {e.location}
                      </div>
                      <span
                        className="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                        style={{ background: color, color: darkOnColor ? "#3A2400" : "#fff" }}
                      >
                        {e.tier}
                      </span>
                      <Link
                        to="/events/$slug"
                        params={{ slug: e.slug }}
                        className="text-sm font-semibold hover:underline"
                        style={{ color: "#4898D3" }}
                      >
                        Event page →
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>
      <JoinCta />
      <Footer />
    </div>
  );
}
