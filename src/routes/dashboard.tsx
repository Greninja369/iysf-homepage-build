import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, IYSF } from "../components/site-chrome";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — IYSF" },
      {
        name: "description",
        content: "Placeholder signed-in dashboard for IYSF federations, judges, coaches and athletes.",
      },
      { property: "og:title", content: "Dashboard — IYSF" },
      {
        property: "og:description",
        content: "A placeholder signed-in area, not yet connected to real accounts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const QUICK_LINKS = [
  { label: "Events", desc: "Browse upcoming and past IYSF competitions.", to: "/events" },
  { label: "Results", desc: "Championship results across divisions.", to: "/results" },
  { label: "Rules", desc: "The official Yogasana rulebook.", to: "/rules" },
  { label: "Academy", desc: "Judge and coach training & certification.", to: "/academy" },
] as const;

function DashboardPage() {
  return (
    <div className="min-h-dvh bg-[#FAFAFA]" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />
      <main>
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: IYSF.blue }}>
            Account
          </div>
          <h1
            className="mt-3 text-[36px] leading-[1.05] md:text-[60px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal, letterSpacing: "-0.02em" }}
          >
            Dashboard
          </h1>
          <p className="mt-4 max-w-[70ch] text-[15px] leading-relaxed text-[#414042]">
            This signed-in area is a placeholder — it is not yet connected to real federation, judge,
            coach or athlete accounts. Nothing here reflects live account data.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="block h-full rounded-lg border border-black/[0.08] bg-white p-6 transition-transform hover:-translate-y-1"
              >
                <h3 className="text-[18px] font-bold" style={{ color: IYSF.charcoal, fontFamily: "var(--font-display)" }}>
                  {l.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#414042]">{l.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/" className="text-sm font-semibold hover:underline" style={{ color: IYSF.blue }}>
              Back to site
            </Link>
            <Link to="/login" className="text-sm font-semibold hover:underline" style={{ color: IYSF.magenta }}>
              Sign out (placeholder)
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
