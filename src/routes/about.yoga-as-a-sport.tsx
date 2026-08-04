import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, Prose } from "../components/page-shell";

export const Route = createFileRoute("/about/yoga-as-a-sport")({
  head: () => ({
    meta: [
      { title: "Yoga as a Sport — IYSF" },
      {
        name: "description",
        content:
          "Can yoga be a competitive sport? IYSF takes the question seriously and explains how yoga āsana is judged as an athletic discipline.",
      },
      { property: "og:title", content: "Yoga as a Sport — IYSF" },
      {
        property: "og:description",
        content: "Why yoga āsana works as a judged athletic discipline, and how IYSF governs it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: YogaAsSportPage,
});

function YogaAsSportPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="About — Yoga as a Sport"
        title="Yoga as a sport"
        sub="Turning yoga into a judged competition raises a real question. Here is how IYSF answers it."
      />

      <Section heading="A fair question">
        <Prose>
          <p>
            Turning yoga into a judged competition raises a real question, and IYSF doesn't pretend
            otherwise: yoga's traditional roots emphasize inward practice, not comparison or
            competition against others. That tension is worth taking seriously rather than brushing
            aside.
          </p>
        </Prose>
      </Section>

      <Section heading="The case for yoga as sport" tint>
        <Prose>
          <p>
            At the same time, yoga āsana — the physical postures that are one of yoga's eight
            traditional limbs — demands the same qualities that define any elite athletic discipline:
            strength, flexibility, balance, breath control, and precision built through years of
            disciplined practice. Competition gives that physical mastery a stage, the same way
            gymnastics or diving turn demanding physical skill into judged sport without erasing what
            makes the underlying practice meaningful.
          </p>
        </Prose>
      </Section>

      <Section heading="IYSF's role">
        <Prose>
          <p>
            IYSF's answer to the "is this really yoga" debate is to build the sport responsibly:
            consistent judging standards, certified officials, and a competitive structure that
            rewards correct technique and genuine skill rather than spectacle. The goal isn't to
            redefine yoga for everyone — it's to give athletes who want to test their āsana practice
            competitively a fair, well-governed place to do it.
          </p>
        </Prose>
      </Section>
    </PageShell>
  );
}