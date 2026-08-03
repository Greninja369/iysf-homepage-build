import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav, Footer, JoinCta, Breadcrumb, IYSF } from "../components/site-chrome";
import { ARTICLES, articleBySlug } from "../data/news";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — IYSF" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — IYSF News` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />
      <div className="mx-auto max-w-[720px] px-5 py-24 text-center md:px-8">
        <h1
          className="text-[32px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
        >
          We couldn't find that article
        </h1>
        <p className="mt-3 text-sm" style={{ color: "rgba(65,64,66,0.72)" }}>
          It may have been moved. Browse the latest federation news instead.
        </p>
        <Link
          to="/news"
          className="mt-6 inline-block rounded-[12px] px-6 py-3 text-base font-bold text-white"
          style={{ background: IYSF.orange }}
        >
          All news
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />

      <section style={{ background: IYSF.blueWash, borderBottom: `1px solid ${IYSF.blueLine}` }}>
        <div className="mx-auto max-w-[900px] px-5 py-12 md:px-8 md:py-16">
          <Breadcrumb parentLabel="News" parentTo="/news" current={article.category} />
          <h1
            className="mt-4 text-[32px] leading-[1.08] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
          >
            {article.title}
          </h1>
          <div
            className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: IYSF.blue, fontFamily: "var(--font-mono)" }}
          >
            {article.category} · {article.date}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-[900px] px-5 py-12 md:px-8 md:py-16">
        <img
          src={article.image}
          alt={article.imageAlt}
          width={1200}
          height={800}
          className="w-full rounded-[14px] object-cover"
          style={{ border: `1px solid ${IYSF.blueLine}` }}
        />
        <div className="mt-8 space-y-5">
          {article.body.map((p: string) => (
            <p key={p.slice(0, 24)} className="text-[16.5px] leading-[1.75]" style={{ color: "rgba(65,64,66,0.85)" }}>
              {p}
            </p>
          ))}
        </div>
      </article>

      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 pb-16 md:px-8">
          <h2
            className="text-[22px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
          >
            More news
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                to="/news/$slug"
                params={{ slug: a.slug }}
                className="flex flex-col overflow-hidden transition-transform hover:-translate-y-0.5"
                style={{
                  border: `1px solid ${IYSF.blueLine}`,
                  borderRadius: 14,
                  background: "#fff",
                  boxShadow: IYSF.blueShadow,
                }}
              >
                <img src={a.image} alt={a.imageAlt} loading="lazy" width={680} height={512} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <div
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: IYSF.blue, fontFamily: "var(--font-mono)" }}
                  >
                    {a.category}
                  </div>
                  <h3
                    className="mt-2 text-[16px] font-bold leading-snug"
                    style={{ fontFamily: "var(--font-display)", color: IYSF.charcoal }}
                  >
                    {a.title}
                  </h3>
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
