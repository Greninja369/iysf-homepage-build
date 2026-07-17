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

const COLOR = "#FBAF43";

/* placeholder tiers — replace with real athlete tracks */
const TIERS = [
  { name: "Junior", desc: "Foundational development track for younger competitors." },
  { name: "Intermediate", desc: "Regional and national competition pathway." },
  { name: "Elite", desc: "World-tier athletes competing at IYSF championships." },
];

/* placeholder guides — replace with real PDF links */
const GUIDES = [
  { title: "Athlete Development Guide", desc: "Long-term development framework across tiers." },
  { title: "Competition Readiness Handbook", desc: "Preparation standards for sanctioned events." },
  { title: "Registration & Eligibility", desc: "How athletes register and remain eligible." },
  { title: "Anti-Doping Overview", desc: "Athlete-facing summary of IYSF anti-doping rules." },
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
      <ClosingCta track="Athletes" color={COLOR} primaryLabel="Download Athlete Guide PDF" />
      <Footer />
    </div>
  );
}