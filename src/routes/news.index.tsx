import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav, Footer, JoinCta, IYSF } from "../components/site-chrome";
import { ARTICLES, FEATURED } from "../data/news";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News — IYSF" },
      {
        name: "description",
        content:
          "Championship reports, Academy updates and membership news from the International Yoga Sports Federation.",
      },
      { property: "og:title", content: "News — IYSF" },
      {
        property: "og:description",
        content: "Championship reports, Academy updates and membership news from IYSF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsIndexPage,
});

const CARD = {
  border: `1px solid ${IYSF.blueLine}`,
  borderRadius: 14,
  background: "#fff",
  boxShadow: IYSF.blueShadow,
  overflow: "hidden" as const,
};

function NewsIndexPage() {
  const rest = ARTICLES.filter((a) => a.slug !== FEATURED.slug);
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />

      <section style={{ background: IYSF.blueWash, borderBottom: `1px solid ${IYSF.blueLine}` }}>
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <div
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: IYSF.blue }}
          >
            News
          </div>
          <h1
            className="mt-3 max-w-[900px] text-[36px] leading-[1.05] md:text-[56px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
          >
            Federation news
          </h1>
          <p
            className="mt-4 max-w-[640px] text-base leading-relaxed"
            style={{ color: "rgba(65,64,66,0.72)" }}
          >
            Championship reports, Academy certification updates and news from the national
            federations that make up IYSF.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-8 md:py-20">
          <Link
            to="/news/$slug"
            params={{ slug: FEATURED.slug }}
            className="group grid gap-0 md:grid-cols-[1.1fr_1fr]"
            style={CARD}
          >
            <img
              src={FEATURED.image}
              alt={FEATURED.imageAlt}
              loading="lazy"
              width={1200}
              height={800}
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="p-7 md:p-9">
              <span
                className="inline-block rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-white"
                style={{ background: IYSF.magenta }}
              >
                Featured
              </span>
              <h2
                className="mt-4 text-[24px] leading-snug md:text-[30px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
              >
                {FEATURED.title}
              </h2>
              <div
                className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: IYSF.blue, fontFamily: "var(--font-mono)" }}
              >
                {FEATURED.category} · {FEATURED.date}
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(65,64,66,0.72)" }}>
                {FEATURED.excerpt}
              </p>
              <span
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-transform group-hover:translate-x-0.5"
                style={{ color: IYSF.blue }}
              >
                Read the report <ArrowRight size={15} aria-hidden="true" />
              </span>
            </div>
          </Link>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to="/news/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col transition-transform hover:-translate-y-0.5"
                style={CARD}
              >
                <img
                  src={a.image}
                  alt={a.imageAlt}
                  loading="lazy"
                  width={680}
                  height={512}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: IYSF.blue, fontFamily: "var(--font-mono)" }}
                  >
                    {a.category} · {a.date}
                  </div>
                  <h3
                    className="mt-2 text-[17px] font-bold leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: IYSF.charcoal }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "rgba(65,64,66,0.7)" }}
                  >
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JoinCta />
      <Footer />
    </div>
  );
}
