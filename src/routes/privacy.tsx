import { createFileRoute, Link } from "@tanstack/react-router";
import { IYSF, Nav, Footer } from "../components/site-chrome";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — IYSF" },
      {
        name: "description",
        content: "Placeholder privacy policy describing how IYSF collects, uses and retains personal data.",
      },
      { property: "og:title", content: "Privacy Policy — IYSF" },
      {
        property: "og:description",
        content: "A placeholder privacy policy pending legal review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const SECTIONS = [
  {
    id: "data-we-collect",
    title: "What data we collect",
    body: [
      "Placeholder — IYSF may collect information submitted through the site's contact form (name, email, message), the federation membership application (organizational and contact details), and the donation flow (name, email and donation amount; no payment card data is collected directly, as no payment processor is connected yet).",
    ],
  },
  {
    id: "how-it-is-used",
    title: "How it is used",
    body: [
      "Placeholder — data submitted through these flows would be used to respond to inquiries, evaluate federation membership applications, and record donation intent. This section is a placeholder pending legal review and should not be relied on as a finalized policy.",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    body: [
      "Placeholder — retention periods for contact, membership and donation records have not yet been confirmed. A finalized retention schedule will be published here.",
    ],
  },
  {
    id: "third-party-processors",
    title: "Third-party processors",
    body: [
      "Placeholder — IYSF has not yet confirmed which, if any, third-party processors (e.g. email delivery, payment processing, hosting) are used to handle personal data. This section will name specific processors once contracted.",
    ],
  },
  {
    id: "international-transfers",
    title: "International transfers",
    body: [
      "Placeholder — as a Swiss non-profit with member federations across six continents, IYSF anticipates some cross-border data transfers. The safeguards applicable to such transfers have not yet been finalized.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: [
      "Placeholder — depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your personal data. The process for exercising these rights will be described here once finalized.",
    ],
  },
  {
    id: "contact-for-data-requests",
    title: "Contact for data requests",
    body: [
      "Placeholder — for any data request in the meantime, contact us at the address below.",
    ],
  },
] as const;

function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-white" style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />
      <main id="privacy-main">
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: IYSF.blue }}>
              Governance
            </div>
            <h1
              className="mt-3 text-[36px] leading-[1.05] md:text-[60px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal, letterSpacing: "-0.02em" }}
            >
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-[70ch] text-[15px] leading-relaxed text-[#575757]">
              This is a placeholder privacy policy pending legal review. It describes, in general terms,
              what personal data IYSF's site flows may collect and how they might be used — it is not a
              finalized legal document.
            </p>
            <div className="mt-4 text-xs" style={{ fontFamily: "var(--font-mono)", color: "#575757" }}>
              Version v0.0 — placeholder / Last updated — placeholder
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
          <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-12">
            <aside className="hidden md:block">
              <nav aria-label="Privacy policy contents" className="sticky top-24">
                <div className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#575757]">
                  Contents
                </div>
                <ul className="space-y-0.5">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block rounded-r px-3 py-2 text-sm text-[#14181F]/85 hover:bg-black/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/40"
                        style={{ borderLeft: "3px solid transparent" }}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="min-w-0">
              <nav aria-label="Privacy policy contents" className="mb-10 rounded-lg border border-black/[0.08] bg-[#FAFAFA] p-5 md:hidden">
                <div className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#575757]">
                  Contents
                </div>
                <ul className="space-y-1">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-sm font-medium" style={{ color: IYSF.blue }}>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-14">
                {SECTIONS.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2
                      className="text-2xl font-extrabold tracking-tight md:text-[26px]"
                      style={{ fontFamily: "var(--font-display)", color: "#14181F" }}
                    >
                      {s.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#14181F]/90">
                      {s.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                      {s.id === "contact-for-data-requests" && (
                        <p>
                          Email{" "}
                          <a href="mailto:privacy@iysf.org" className="font-semibold hover:underline" style={{ color: IYSF.blue }}>
                            privacy@iysf.org
                          </a>{" "}
                          for any data access, correction or deletion request.
                        </p>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-black/10 pt-8">
                <Link to="/governance" className="text-sm font-semibold hover:underline" style={{ color: IYSF.blue }}>
                  Governance
                </Link>
                <Link to="/rules" className="text-sm font-semibold hover:underline" style={{ color: IYSF.blue }}>
                  Rules
                </Link>
                <Link to="/" hash="contact" className="text-sm font-semibold hover:underline" style={{ color: IYSF.magenta }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
