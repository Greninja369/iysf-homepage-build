import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "../components/site-chrome";
import {
  TrackHeader,
  TiersGrid,
  GuidesList,
  SupportingContent,
  ClosingCta,
} from "../components/academy-shared";

export const Route = createFileRoute("/academy/athletes")({
  head: () => ({
    meta: [
      { title: "Athletes — IYSF Academy" },
      {
        name: "description",
        content:
          "Development pathways and competition-readiness resources for IYSF-registered athletes.",
      },
      { property: "og:title", content: "Athletes — IYSF Academy" },
      {
        property: "og:description",
        content: "Development pathways and competition-readiness for registered athletes.",
      },
    ],
  }),
  component: AthletesTrack,
});

const COLOR = "#FAAF40";

/* placeholder tiers — replace with real athlete tracks */
const TIERS = [
  { name: "Junior", desc: "Foundational development track for younger competitors." },
  { name: "Intermediate", desc: "Regional and national competition pathway." },
  { name: "Elite", desc: "World-tier athletes competing at IYSF championships." },
];

/* placeholder guides — replace with real PDF links */
const GUIDES = [
  { title: "Athlete Development Guide", desc: "Long-term development framework across tiers.", pdf: "/documents/academy/athletes/athlete-development-guide.pdf" },
  { title: "Competition Readiness Handbook", desc: "Preparation standards for sanctioned events.", pdf: "/documents/academy/athletes/competition-readiness-handbook.pdf" },
  { title: "Registration & Eligibility", desc: "How athletes register and remain eligible.", pdf: "/documents/academy/athletes/registration-and-eligibility.pdf" },
  { title: "Anti-Doping Overview", desc: "Athlete-facing summary of IYSF anti-doping rules.", pdf: "/documents/academy/athletes/anti-doping-overview.pdf" },
];

function AthletesTrack() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <TrackHeader
        track="Athletes"
        color={COLOR}
        heading="Athletes"
        sub="Development pathways and competition-readiness resources for IYSF-registered athletes."
      />
      <TiersGrid tiers={TIERS} color={COLOR} />
      <GuidesList guides={GUIDES} color={COLOR} track="Athletes" />
      <SupportingContent track="Athletes" color={COLOR} />
      <ClosingCta
        track="Athletes"
        color={COLOR}
        primaryLabel="Download Athlete Guide PDF"
        primaryHref="/documents/academy/athletes/athlete-development-guide.pdf"
        relatedTo="/rules"
        relatedLabel="Athlete eligibility & anti-doping rules"
      />
      <Footer />
    </div>
  );
}