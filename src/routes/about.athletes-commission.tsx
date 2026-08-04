import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, Prose, ComingSoon } from "../components/page-shell";

export const Route = createFileRoute("/about/athletes-commission")({
  head: () => ({
    meta: [
      { title: "Athletes' Commission — IYSF" },
      {
        name: "description",
        content:
          "The IYSF Athletes' Commission gives competitors a formal voice in governance, with elected representatives seated on the Management Committee.",
      },
      { property: "og:title", content: "Athletes' Commission — IYSF" },
      {
        property: "og:description",
        content: "How competing athletes are represented in IYSF governance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AthletesCommissionPage,
});

function AthletesCommissionPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="About — Athletes' Commission"
        title="The athletes' voice in IYSF governance"
        sub="Competitors themselves have a direct, formal say in how the sport is run."
      />

      <Section>
        <Prose>
          <p>
            The Athletes' Commission exists so competitors themselves have a direct, formal say in how
            the sport is run — not just those administering it. Under IYSF's Statutes, the Commission
            elects a male and female representative, who are then ratified by the Plenary Assembly and
            seated on the Management Committee itself. That means athlete input isn't advisory only —
            it reaches the federation's top decision-making body.
          </p>
          <p>
            Athletes interested in Commission involvement can reach out through their national
            federation.
          </p>
        </Prose>
        <div className="mt-8">
          <ComingSoon
            title="Current Commission members: coming soon"
            body="Elected representatives will be listed here once the current Commission is confirmed and ratified."
            cta={{ label: "Find your national federation", to: "/directory" }}
          />
        </div>
      </Section>
    </PageShell>
  );
}