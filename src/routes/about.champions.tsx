import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, Prose, ComingSoon } from "../components/page-shell";

export const Route = createFileRoute("/about/champions")({
  head: () => ({
    meta: [
      { title: "Champions — IYSF World Championship Titleholders" },
      {
        name: "description",
        content:
          "IYSF World Championship titleholders across youth, adult and masters divisions. The full historical record is being compiled.",
      },
      { property: "og:title", content: "Champions — IYSF" },
      {
        property: "og:description",
        content: "IYSF World Championship titleholders across every division.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChampionsPage,
});

function ChampionsPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="About — Champions"
        title="Celebrating our champions"
        sub="Every IYSF World Championship crowns titleholders across youth, adult, and masters divisions."
      />

      <Section>
        <Prose>
          <p>
            Every IYSF World Championship crowns titleholders across youth, adult, and masters
            divisions — athletes who've spent years refining the technical precision that competitive
            yoga āsana demands.
          </p>
        </Prose>
        <div className="mt-8">
          <ComingSoon
            body="We're compiling the full record of past champions across every division and year — check back shortly, or see the Championship Results archive for the latest event outcomes."
            cta={{ label: "Championship Results archive", to: "/results" }}
          />
        </div>
      </Section>
    </PageShell>
  );
}