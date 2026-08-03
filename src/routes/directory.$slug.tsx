import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, Breadcrumb, JoinCta } from "../components/site-chrome";
import { getFederation, eventsForFederation, STATUS_COLOR } from "../data/iysf";

export const Route = createFileRoute("/directory/$slug")({
  head: ({ params }) => {
    const fed = getFederation(params.slug);
    const name = fed?.name ?? "Federation";
    return {
      meta: [
        { title: `${name} — IYSF Directory` },
        {
          name: "description",
          content: fed
            ? `Profile for ${fed.name}, IYSF member federation in ${fed.country}.`
            : "Federation not found.",
        },
        { property: "og:title", content: `${name} — IYSF Directory` },
        {
          property: "og:description",
          content: fed ? `Profile for ${fed.name}.` : "Federation not found.",
        },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: FederationDetailPage,
});

function FederationDetailPage() {
  const { slug } = Route.useParams();
  const fed = getFederation(slug);

  if (!fed) {
    return (
      <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
        <Nav />
        <main>
          <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8">
            <Breadcrumb parentLabel="Directory" parentTo="/directory" current="Not found" color="#EA088C" />
            <h1
              className="mt-4 text-[32px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              Federation not found
            </h1>
            <Link
              to="/directory"
              className="mt-6 inline-block text-sm font-semibold hover:underline"
              style={{ color: "#4898D3" }}
            >
              ← Back to directory
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const color = STATUS_COLOR[fed.status];
  const { hosted, competed } = eventsForFederation(fed.id);

  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <Breadcrumb parentLabel="Directory" parentTo="/directory" current={fed.name} color={color} />
            <span
              className="mt-4 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em]"
              style={{ background: color, color: color === "#FBAF43" ? "#3A2400" : "#fff" }}
            >
              {fed.status}
            </span>
            <h1
              className="mt-3 text-[32px] leading-[1.06] tracking-[-0.02em] md:text-[48px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              {fed.name}
            </h1>
            <p className="mt-2 text-sm" style={{ fontFamily: "var(--font-mono)", color: "#575757" }}>
              {fed.country} · {fed.region} · Joined {fed.joined}
            </p>
            <p className="mt-5 max-w-[640px] text-base" style={{ color: "#575757" }}>
              {fed.summary}
            </p>
          </div>
        </section>

        {(hosted.length > 0 || competed.length > 0) && (
          <section style={{ background: "#FAFAFA" }} className="border-t border-black/[0.06]">
            <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
              <div
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#4898D3" }}
              >
                Championship history
              </div>
              <ul className="divide-y divide-black/[0.08] rounded-lg border border-black/[0.08] bg-white">
                {[...hosted, ...competed].map((e) => (
                  <li key={e.id} className="flex flex-col gap-1 px-5 py-4 md:flex-row md:items-center md:justify-between">
                    <Link
                      to="/events/$slug"
                      params={{ slug: e.slug }}
                      className="text-[15px] hover:underline"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
                    >
                      {e.name}
                    </Link>
                    <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#575757" }}>
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
