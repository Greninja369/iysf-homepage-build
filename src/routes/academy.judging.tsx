import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "../components/site-chrome";
import {
  TrackHeader,
  TiersGrid,
  GuidesList,
  SupportingContent,
  ClosingCta,
} from "../components/academy-shared";

export const Route = createFileRoute("/academy/judging")({
  head: () => ({
    meta: [
      { title: "Judging — IYSF Academy" },
      {
        name: "description",
        content:
          "Judging certification standards, scoring rubrics, and guides for IYSF-registered officials.",
      },
      { property: "og:title", content: "Judging — IYSF Academy" },
      {
        property: "og:description",
        content: "Judging certification standards and scoring rubrics for IYSF officials.",
      },
    ],
  }),
  component: JudgingTrack,
});

const COLOR = "#4898D3";

/* placeholder tiers — replace with real certification levels */
const TIERS = [
  { name: "Level 1 — National", desc: "Entry-level certification for domestic events." },
  { name: "Level 2 — Continental", desc: "Certified to officiate at continental championships." },
  { name: "Level 3 — International", desc: "Cleared for IYSF world-tier competition." },
];

/* placeholder guides — replace with real PDF links */
const GUIDES = [
  { title: "Judging Standards Guide", desc: "The complete framework used across IYSF events.", pdf: "/documents/academy/judging/judging-standards-guide.pdf" },
  { title: "Scoring Rubric", desc: "Reference rubric for pose difficulty, execution, and form.", pdf: "/documents/academy/judging/scoring-rubric.pdf" },
  { title: "Officiating Protocol", desc: "Conduct and procedure at sanctioned competitions.", pdf: "/documents/academy/judging/officiating-protocol.pdf" },
  { title: "Recertification Handbook", desc: "Requirements and cycle for maintaining status.", pdf: "/documents/academy/judging/recertification-handbook.pdf" },
];

function JudgingTrack() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <TrackHeader
        track="Judging"
        color={COLOR}
        heading="Judging"
        sub="Certification standards, scoring rubrics, and officiating protocol for IYSF judges."
      />
      <TiersGrid tiers={TIERS} color={COLOR} />
      <GuidesList guides={GUIDES} color={COLOR} track="Judging" />
      <SupportingContent track="Judging" color={COLOR} />
      <ClosingCta
        track="Judging"
        color={COLOR}
        primaryLabel="Download Judging Guide PDF"
        primaryHref="/documents/academy/judging/judging-standards-guide.pdf"
        relatedTo="/rules"
        relatedLabel="Judging criteria in the rulebook"
      />
      <Footer />
    </div>
  );
}