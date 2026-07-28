import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { Search, ExternalLink, X, Users } from "lucide-react";
import { Nav, Footer } from "../components/site-chrome";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Federation Directory — IYSF Member Federations" },
      {
        name: "description",
        content:
          "Browse IYSF's network of national member federations governing competitive Yogasana worldwide.",
      },
      { property: "og:title", content: "Federation Directory — IYSF" },
      {
        property: "og:description",
        content:
          "National member federations of the International Yoga Sports Federation, by region and membership status.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DirectoryPage,
});

/* ------------------------------------------------------------------ */
/* placeholder federation data — replace with real member list.        */
/* Names, countries, contacts, years, and links are ALL placeholders.  */
/* ------------------------------------------------------------------ */
type Region =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";

type Status = "Full Member" | "Provisional" | "Observer";

type Federation = {
  id: string;
  name: string;
  country: string;
  region: Region;
  status: Status;
  president: string;
  joined: string;
  website: string;
  lat: number;
  lng: number;
};

const REGIONS: (Region | "All")[] = [
  "All",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
];

const STATUS_COLOR: Record<Status, string> = {
  "Full Member": "#4898D3",
  Provisional: "#FBAF43",
  Observer: "#EA088C",
};

/* placeholder federation location — replace with real coordinates */
const FEDERATIONS: Federation[] = [
  {
    id: "f1",
    name: "Federation Name Placeholder 1",
    country: "Country Placeholder A",
    region: "Europe",
    status: "Full Member",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: 48.85,
    lng: 2.35,
  },
  {
    id: "f2",
    name: "Federation Name Placeholder 2",
    country: "Country Placeholder B",
    region: "Asia",
    status: "Full Member",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: 28.61,
    lng: 77.21,
  },
  {
    id: "f3",
    name: "Federation Name Placeholder 3",
    country: "Country Placeholder C",
    region: "North America",
    status: "Provisional",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: 40.71,
    lng: -74.0,
  },
  {
    id: "f4",
    name: "Federation Name Placeholder 4",
    country: "Country Placeholder D",
    region: "Oceania",
    status: "Observer",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: -33.87,
    lng: 151.21,
  },
  {
    id: "f5",
    name: "Federation Name Placeholder 5",
    country: "Country Placeholder E",
    region: "Africa",
    status: "Provisional",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: -1.29,
    lng: 36.82,
  },
  {
    id: "f6",
    name: "Federation Name Placeholder 6",
    country: "Country Placeholder F",
    region: "South America",
    status: "Full Member",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: -23.55,
    lng: -46.63,
  },
  {
    id: "f7",
    name: "Federation Name Placeholder 7",
    country: "Country Placeholder G",
    region: "Asia",
    status: "Observer",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: 35.68,
    lng: 139.69,
  },
  {
    id: "f8",
    name: "Federation Name Placeholder 8",
    country: "Country Placeholder H",
    region: "Europe",
    status: "Provisional",
    president: "President name placeholder",
    joined: "————",
    website: "#",
    lat: 52.52,
    lng: 13.4,
  },
];

/* Map is the same Leaflet component used on the Events page (client-only). */
const PinMap = lazy(() => import("../components/events-map"));

function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}

function DirectoryPage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region | "All">("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FEDERATIONS.filter((f) => {
      const matchesQ =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.country.toLowerCase().includes(q);
      const matchesR = region === "All" || f.region === region;
      return matchesQ && matchesR;
    });
  }, [query, region]);

  useEffect(() => {
    if (selectedId && !filtered.some((f) => f.id === selectedId)) {
      setSelectedId(null);
    }
  }, [filtered, selectedId]);

  const selected = filtered.find((f) => f.id === selectedId) ?? null;
  const hydrated = useHydrated();

  const pins = useMemo(
    () =>
      filtered.map((f) => ({
        id: f.id,
        name: f.name,
        location: `${f.country} · ${f.status}`,
        lat: f.lat,
        lng: f.lng,
        tier: f.status,
      })),
    [filtered]
  );

  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />
      <main>
        {/* -------- Page header -------- */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-6 md:px-8 md:pt-20 md:pb-8">
            <div
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#4898D3" }}
            >
              Federation
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
              Federation Directory
            </h1>
            <p
              className="mt-4 max-w-[620px] text-base md:text-[17px]"
              style={{ color: "#575757" }}
            >
              IYSF's network of national federations governing competitive
              Yogasana worldwide.
            </p>
          </div>
        </section>

        {/* -------- Controls bar (sticky) -------- */}
        <div className="sticky top-[61px] z-30 border-y border-black/[0.06] bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:px-8">
            <label className="relative block flex-1">
              <span className="sr-only">Search federations by name or country</span>
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
                color="#575757"
                aria-hidden="true"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by federation or country"
                className="w-full rounded-md border border-black/10 bg-white px-9 py-2.5 text-sm outline-none transition-colors focus:border-[#4898D3] focus:ring-2 focus:ring-[#4898D3]/25"
              />
            </label>

            <div
              className="flex flex-wrap gap-1.5"
              role="tablist"
              aria-label="Filter by region"
            >
              {REGIONS.map((r) => {
                const active = region === r;
                return (
                  <button
                    key={r}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setRegion(r)}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4898D3]"
                    style={{
                      borderColor: active ? "#14181F" : "rgba(0,0,0,0.12)",
                      background: active ? "#14181F" : "#fff",
                      color: active ? "#fff" : "#14181F",
                    }}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* -------- Map + list -------- */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              {/* Map column */}
              <div>
                <div
                  className="overflow-hidden rounded-lg border border-black/[0.08]"
                  style={{ height: 460 }}
                >
                  {hydrated ? (
                    <Suspense
                      fallback={
                        <div
                          className="flex h-full w-full items-center justify-center text-sm"
                          style={{ color: "#575757" }}
                        >
                          Loading map…
                        </div>
                      }
                    >
                      <PinMap
                        events={pins}
                        selectedId={selectedId}
                        onSelect={setSelectedId}
                        tierColor={STATUS_COLOR}
                      />
                    </Suspense>
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{ background: "#FAFAFA" }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Legend */}
                <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {(Object.keys(STATUS_COLOR) as Status[]).map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "#575757" }}
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ background: STATUS_COLOR[s] }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* Inline reveal below map when a pin is selected */}
                <div
                  aria-live="polite"
                  className="mt-4 motion-safe:transition-all motion-safe:duration-200"
                >
                  {selected && (
                    <div className="motion-safe:animate-[fadein_.2s_ease]">
                      <FederationCard
                        federation={selected}
                        highlighted
                        onClose={() => setSelectedId(null)}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* List column */}
              <div>
                <div
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#EA088C" }}
                >
                  Member federations
                </div>
                {filtered.length === 0 ? (
                  <EmptyState />
                ) : (
                  <ul className="flex max-h-[560px] flex-col gap-3 overflow-auto pr-1">
                    {filtered.map((f) => (
                      <li key={f.id}>
                        <FederationCard
                          federation={f}
                          onSelect={() => setSelectedId(f.id)}
                          highlighted={f.id === selectedId}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* -------- Becoming a member federation -------- */}
        {/* placeholder membership process — example steps only, not confirmed official criteria */}
        <section
          className="border-t border-black/[0.06]"
          style={{ background: "#FAFAFA" }}
        >
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <div
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#575757" }}
            >
              Membership
            </div>
            <h2
              className="text-[26px] leading-[1.08] tracking-[-0.015em] md:text-[36px]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                color: "#14181F",
              }}
            >
              Becoming a Member Federation
            </h2>
            <p
              className="mt-4 max-w-[680px] text-base"
              style={{ color: "#575757" }}
            >
              Placeholder copy — national bodies seeking recognition follow a
              staged review process covering governance, athlete safeguarding,
              and competition standards. Steps below are illustrative
              placeholders pending confirmation.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
              {[
                { t: "Apply", d: "Submit federation details and documentation. (placeholder)" },
                { t: "Review", d: "IYSF reviews eligibility and standards compliance. (placeholder)" },
                { t: "Provisional status", d: "Approved federations begin as Provisional members. (placeholder)" },
                { t: "Ratification", d: "Full membership granted after a review period. (placeholder)" },
              ].map((s, i) => (
                <li
                  key={s.t}
                  className="rounded-lg border border-black/[0.08] bg-white p-5"
                >
                  <div
                    className="text-[13px]"
                    style={{ fontFamily: "var(--font-mono)", color: "#4898D3" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className="mt-2 text-[17px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      color: "#14181F",
                    }}
                  >
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "#575757" }}>
                    {s.d}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Link
                to="/"
                hash="join"
                className="inline-block rounded-md px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4898D3]"
                style={{ background: "#FBAF43", color: "#3A2400" }}
              >
                Start your application
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[fadein_\\.2s_ease\\] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Federation card (list + inline pin reveal)                          */
/* placeholder federation data — replace with real member list         */
/* ------------------------------------------------------------------ */
function FederationCard({
  federation: f,
  onSelect,
  highlighted,
  onClose,
}: {
  federation: Federation;
  onSelect?: () => void;
  highlighted?: boolean;
  onClose?: () => void;
}) {
  const color = STATUS_COLOR[f.status];
  return (
    <article
      className="rounded-lg border bg-white p-4 transition-shadow"
      style={{
        borderColor: highlighted ? color : "rgba(0,0,0,0.08)",
        boxShadow: highlighted ? `0 0 0 2px ${color}22` : undefined,
      }}
    >
      <div className="flex items-start gap-3">
        {/* placeholder flag/logo slot — replace with real federation crest */}
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-black/[0.08]"
          style={{ background: "#FAFAFA" }}
          role="img"
          aria-label={`Placeholder flag or crest for ${f.name}`}
        >
          <Users size={16} color="#575757" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {onSelect ? (
                <button
                  onClick={onSelect}
                  className="text-left text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4898D3]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "#14181F",
                  }}
                >
                  {f.name}
                </button>
              ) : (
                <h3
                  className="text-[15px]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "#14181F",
                  }}
                >
                  {f.name}
                </h3>
              )}
              <div className="mt-1 text-sm" style={{ color: "#575757" }}>
                {f.country} · {f.region}
              </div>
            </div>

            {onClose && (
              <button
                onClick={onClose}
                aria-label="Close federation details"
                className="rounded-md p-1 text-[#575757] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4898D3]"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <StatusBadge status={f.status} />
            <span className="text-xs" style={{ color: "#575757" }}>
              President: {f.president}
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "#14181F" }}
            >
              Joined {f.joined}
            </span>
          </div>

          <a
            href={f.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${f.name} website, opens in new tab`}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#4898D3] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4898D3]"
          >
            <ExternalLink size={14} aria-hidden="true" />
            Visit website
          </a>
        </div>
      </div>
    </article>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const color = STATUS_COLOR[status];
  const darkText = color === "#FBAF43";
  return (
    <span
      className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
      style={{ background: color, color: darkText ? "#3A2400" : "#fff" }}
    >
      {status}
    </span>
  );
}

function EmptyState() {
  return (
    <div
      className="rounded-lg border border-dashed border-black/15 bg-white p-8 text-center"
      role="status"
    >
      <p
        className="text-[15px]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
      >
        No federations match your search
      </p>
      <p className="mt-2 text-sm" style={{ color: "#575757" }}>
        Try a different keyword or select a different region.
      </p>
    </div>
  );
}
