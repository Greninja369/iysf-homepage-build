import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "../components/site-chrome";
import {
  TrackHeader,
  TiersGrid,
  GuidesList,
  SupportingContent,
  ClosingCta,
} from "../components/academy-shared";

export const Route = createFileRoute("/academy/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching — IYSF Academy" },
      {
        name: "description",
        content:
          "Coaching curriculum and certification tiers for coaches supporting IYSF athletes.",
      },
      { property: "og:title", content: "Coaching — IYSF Academy" },
      {
        property: "og:description",
        content: "Curriculum and certification tiers for IYSF coaches.",
      },
    ],
  }),
  component: CoachingTrack,
});

const COLOR = "#EA088C";

/* placeholder tiers — replace with real coaching tiers */
const TIERS = [
  { name: "Assistant Coach", desc: "Entry-level coaching credential under supervision." },
  { name: "Coach", desc: "Certified head-coach status for club and national programs." },
  { name: "Senior Coach", desc: "Elite tier authorized to prepare international competitors." },
];

/* placeholder guides — replace with real PDF links */
const GUIDES = [
  { title: "Coaching Curriculum Guide", desc: "The IYSF coaching syllabus across all tiers.", pdf: "/documents/academy/coaching/coaching-curriculum-guide.pdf" },
  { title: "Session Planning Handbook", desc: "Reference structure for training programs.", pdf: "/documents/academy/coaching/session-planning-handbook.pdf" },
  { title: "Athlete Welfare Standards", desc: "Baseline duty-of-care expectations for coaches.", pdf: "/documents/academy/coaching/athlete-welfare-standards.pdf" },
  { title: "Recertification Handbook", desc: "Requirements and cycle for maintaining status.", pdf: "/documents/academy/coaching/recertification-handbook.pdf" },
];

function CoachingTrack() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <TrackHeader
        track="Coaching"
        color={COLOR}
        heading="Coaching"
        sub="Curriculum and certification tiers for coaches supporting IYSF athletes."
      />
      <TiersGrid tiers={TIERS} color={COLOR} />
      <GuidesList guides={GUIDES} color={COLOR} track="Coaching" />
      <SupportingContent track="Coaching" color={COLOR} />
      <ClosingCta
        track="Coaching"
        color={COLOR}
        primaryLabel="Download Coaching Guide PDF"
        primaryHref="/documents/academy/coaching/coaching-curriculum-guide.pdf"
        relatedTo="/rules"
        relatedLabel="Code of conduct"
      />
      <Footer />
    </div>
  );
}