import { createFileRoute, Link } from "@tanstack/react-router";
import { FileDown } from "lucide-react";
import { PageShell, PageHeader, Section, Prose, InfoCard } from "../components/page-shell";
import { IYSF } from "../components/site-chrome";

export const Route = createFileRoute("/about/governance")({
  head: () => ({
    meta: [
      { title: "Governance — How IYSF Is Structured" },
      {
        name: "description",
        content:
          "IYSF is a Swiss non-profit association seated in Lausanne. Read about the Plenary Assembly, Management Committee, Athletes' Commission and other governing bodies.",
      },
      { property: "og:title", content: "Governance — IYSF" },
      {
        property: "og:description",
        content: "Legal status and governing bodies of the International Yoga Sports Federation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GovernancePage,
});

const BODIES = [
  {
    name: "Plenary Assembly",
    accent: IYSF.blue,
    desc: "The federation's highest decision-making body, bringing together representatives of member federations to set policy and elect leadership.",
  },
  {
    name: "Management Committee (Executive Committee)",
    accent: IYSF.orange,
    desc: "Responsible for the federation's day-to-day direction, championship oversight, and strategic priorities between Assembly sessions.",
  },
  {
    name: "Athletes' Commission",
    accent: IYSF.magenta,
    desc: "Gives competing athletes a formal voice in governance — the Commission elects a male and female representative who sit on the Management Committee itself, ensuring athlete perspective reaches the top of the organization.",
  },
  {
    name: "Technical Committee",
    accent: IYSF.blue,
    desc: "Maintains and interprets the sport's technical rules and scoring standards, and oversees judge training and consistency across competitions.",
  },
  {
    name: "Anti-Doping Commission",
    accent: IYSF.charcoal,
    desc: "Oversees the federation's anti-doping policy and compliance.",
  },
  {
    name: "Disciplinary Commission",
    accent: IYSF.charcoal,
    desc: "Handles conduct and disciplinary matters under the federation's rules.",
  },
  {
    name: "Continental Councils",
    accent: IYSF.orange,
    desc: "Regional bodies that can be established, subject to Plenary Assembly approval, to support federation activity and qualification pathways within a given continent.",
  },
];

function GovernancePage() {
  return (
    <PageShell>
      <PageHeader
        kicker="About — Governance"
        title="How IYSF is structured"
        sub="A non-profit association governed under Article 60ff of the Swiss Civil Code, with its legal seat in Lausanne, Switzerland."
      />

      <Section heading="Legal status" tint>
        <Prose>
          <p>
            IYSF is a non-profit association governed under Article 60ff of the Swiss Civil Code,
            with its legal seat in Lausanne, Switzerland. It was constituted on April 29, 2013, with
            its founding Statutes adopted that same day and amended at Congress on June 8, 2013.
          </p>
        </Prose>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Legal form", v: "Non-profit association (Art. 60ff, Swiss Civil Code)" },
            { k: "Seat", v: "Lausanne, Switzerland" },
            { k: "Constituted", v: "29 April 2013" },
            { k: "Statutes amended", v: "8 June 2013" },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-[12px] border bg-white p-5"
              style={{ borderColor: IYSF.blueLine }}
            >
              <dt
                className="text-[10.5px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: IYSF.charcoal }}
              >
                {row.k}
              </dt>
              <dd
                className="mt-2 text-[15px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
              >
                {row.v}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section kicker="Structure" heading="Governing bodies" accent={IYSF.magenta}>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BODIES.map((b) => (
            <li key={b.name}>
              <InfoCard title={b.name} accent={b.accent}>
                {b.desc}
              </InfoCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Statutes & documents" tint>
        <Prose>
          <p>
            The full Statutes will be published here once the document is finalized. In the meantime,
            the competition rulebook is available on the{" "}
            <Link to="/rules" className="font-semibold hover:underline" style={{ color: IYSF.blue }}>
              Rules
            </Link>{" "}
            page.
          </p>
        </Prose>
        <span
          className="mt-6 inline-flex items-center gap-2 rounded-[10px] border border-dashed px-4 py-2.5 text-sm font-semibold"
          style={{ borderColor: IYSF.blueLine, color: IYSF.charcoal }}
        >
          <FileDown size={15} aria-hidden="true" />
          Full Statutes (PDF) — placeholder until document is finalized
        </span>
      </Section>
    </PageShell>
  );
}