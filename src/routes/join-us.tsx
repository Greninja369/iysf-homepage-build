import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, IYSF } from "../components/site-chrome";
import { PageHeader, Section, Prose } from "../components/page-shell";
import { JoinForm } from "../components/join-form";

export const Route = createFileRoute("/join-us")({
  head: () => ({
    meta: [
      { title: "Join Us — IYSF Federation Membership" },
      {
        name: "description",
        content:
          "How national yoga sport federations join IYSF: apply, review, provisional membership, then full voting membership. Start your application here.",
      },
      { property: "og:title", content: "Join IYSF — Federation Membership" },
      {
        property: "og:description",
        content: "The four-step pathway to IYSF membership for national federations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinUsPage,
});

const STEPS = [
  {
    n: "1",
    t: "Apply",
    d: "Submit your federation's application, including governance documentation and evidence of active national yoga āsana competition activity.",
  },
  {
    n: "2",
    t: "Review",
    d: "IYSF reviews the application against membership criteria set out in the Statutes.",
  },
  {
    n: "3",
    t: "Provisional membership",
    d: "Approved federations begin as provisional members.",
  },
  {
    n: "4",
    t: "Full membership",
    d: "After meeting ongoing participation and governance requirements, federations progress to full voting membership.",
  },
];

function JoinUsPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }} className="bg-white">
      <Nav />
      <main>
        <PageHeader
          kicker="Join us"
          title="Bringing your federation into IYSF"
          sub="A recognized place within the international governing structure — standardized rules, certified judges and coaches, and a pathway to continental and world championships."
        />

        <Section>
          <Prose>
            <p>
              IYSF membership gives national yoga sport federations a recognized place within the
              international governing structure — access to standardized rules, certified judges and
              coaches, and a pathway to compete at continental and world championships.
            </p>
          </Prose>
        </Section>

        <Section kicker="Membership pathway" heading="Four steps to membership" tint>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="rounded-[12px] border bg-white p-6"
                style={{ borderColor: IYSF.blueLine }}
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: IYSF.blue }}
                >
                  {s.n}
                </span>
                <h3
                  className="mt-4 text-[17px]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
                >
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: IYSF.charcoal }}>
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <section id="application" className="bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-16">
            <h2
              className="text-[26px] leading-[1.08] tracking-[-0.015em] md:text-[36px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              Start your application
            </h2>
            <p className="mt-3 max-w-[620px] text-base" style={{ color: IYSF.charcoal }}>
              Tell us about your organisation and a member of the IYSF office will follow up.
            </p>
            <div className="mt-8">
              <JoinForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}