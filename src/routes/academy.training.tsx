import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, Prose, ComingSoon } from "../components/page-shell";
import { IYSF } from "../components/site-chrome";

export const Route = createFileRoute("/academy/training")({
  head: () => ({
    meta: [
      { title: "Training — IYSF Academy" },
      {
        name: "description",
        content:
          "IYSF's training pathway takes practitioners from foundational āsana practice toward competition-ready technique through structured drills.",
      },
      { property: "og:title", content: "Training — IYSF Academy" },
      {
        property: "og:description",
        content: "From foundational āsana practice to competition-ready technique.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="Academy — Training"
        title="Building athletes from the ground up"
        sub="Structured drills that bridge beginner-level postures to their more advanced expressions."
        accent={IYSF.magenta}
      />

      <Section>
        <Prose>
          <p>
            IYSF's training pathway is designed to take practitioners from foundational āsana practice
            toward competition-ready technique, with structured drills that bridge beginner-level
            postures to their more advanced expressions. The approach emphasizes that correct
            alignment at the beginner level is what makes deeper, more demanding postures accessible
            later.
          </p>
          <p>
            Training is delivered through member federations and IYSF-certified coaches. Find your
            national federation in the{" "}
            <Link
              to="/directory"
              className="font-semibold hover:underline"
              style={{ color: IYSF.blue }}
            >
              directory
            </Link>
            , or meet the{" "}
            <Link
              to="/about/international-coaches"
              className="font-semibold hover:underline"
              style={{ color: IYSF.blue }}
            >
              international coaching panel
            </Link>
            .
          </p>
        </Prose>
        <div className="mt-8">
          <ComingSoon
            title="Curriculum detail coming soon"
            body="Specific curriculum structure, levels and course duration are being finalized and will be published here once confirmed."
            cta={{ label: "Judging certification tiers", to: "/academy/judging" }}
          />
        </div>
      </Section>
    </PageShell>
  );
}