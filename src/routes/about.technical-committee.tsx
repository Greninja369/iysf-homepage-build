import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, Prose, ComingSoon } from "../components/page-shell";

export const Route = createFileRoute("/about/technical-committee")({
  head: () => ({
    meta: [
      { title: "Technical Committee — IYSF" },
      {
        name: "description",
        content:
          "The IYSF Technical Committee maintains the rules and scoring system behind fair competition, and oversees judging consistency worldwide.",
      },
      { property: "og:title", content: "Technical Committee — IYSF" },
      {
        property: "og:description",
        content: "Who maintains IYSF's technical rules and scoring standards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TechnicalCommitteePage,
});

function TechnicalCommitteePage() {
  return (
    <PageShell>
      <PageHeader
        kicker="About — Technical Committee"
        title="Setting the standard"
        sub="The rules and scoring system that make fair competition possible."
      />

      <Section>
        <Prose>
          <p>
            The Technical Committee is responsible for the rules and scoring system that make fair
            competition possible — maintaining the criteria judges use, interpreting the rules when
            questions arise, and ensuring consistency across every IYSF-sanctioned event worldwide.
          </p>
        </Prose>
        <div className="mt-8">
          <ComingSoon
            title="Committee members: coming soon"
            body="The current Technical Committee roster will be published here once confirmed."
            cta={{ label: "Read the competition rules", to: "/rules" }}
          />
        </div>
      </Section>
    </PageShell>
  );
}