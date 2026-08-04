import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, Prose, InfoCard } from "../components/page-shell";
import { IYSF } from "../components/site-chrome";

export const Route = createFileRoute("/about/international-coaches")({
  head: () => ({
    meta: [
      { title: "International Coaches — IYSF" },
      {
        name: "description",
        content:
          "IYSF's international coaching panel supports athlete development and training standards across member federations, from beginner instruction to elite preparation.",
      },
      { property: "og:title", content: "International Coaches — IYSF" },
      {
        property: "og:description",
        content: "The coaches developing athletes across IYSF member federations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoachesPage,
});

const COACHES = [
  {
    name: "Kim Tang",
    role: "Head Coach (USA)",
    accent: IYSF.orange,
    bio: "Leads IYSF's beginner-to-advanced training pathway, helping athletes build a technical bridge from foundational postures to the more demanding forms required at competition level.",
  },
  {
    name: "Brandy Lyn",
    role: "USA",
    accent: IYSF.blue,
    bio: "A yoga teacher of over a decade, and the 2010 International Yoga Champion. Has spent years teaching the advanced 84-āsana curriculum from the Ghosh lineage and now leads seminars and retreats worldwide.",
  },
  {
    name: "Zeb Homison",
    role: "USA",
    accent: IYSF.magenta,
    bio: "2014 International Asana Champion and multiple-time USA Yoga National finalist, brings a background in dance and performing arts to his coaching, alongside advanced-level teaching certification.",
  },
  {
    name: "Almania Colombo",
    role: "Italy",
    accent: IYSF.blue,
    bio: "European champion in 2015, 2017, and 2019, and international champion in 2016 and 2018. Competed and taught internationally since first entering competition in 2013.",
  },
  {
    name: "Candice Noble",
    role: "Australia",
    accent: IYSF.magenta,
    bio: "An athlete and coach who credits the Yoga Sport series with deepening her understanding of body mechanics — knowledge she now passes on to her own students.",
  },
  {
    name: "Delfina Bo",
    role: "Argentina",
    accent: IYSF.blue,
    bio: "Competing since childhood, uses yoga sport to build harmony between physical, mental, and spiritual practice, and brings that approach to her coaching.",
  },
  {
    name: "Jindriska Krivankova",
    role: "Czech Republic",
    accent: IYSF.orange,
    bio: "A long-time student and coach who continues to explore the physical and mental range of the practice, supporting other athletes' growth along the way.",
  },
  {
    name: "Mareike Tross",
    role: "Belgium",
    accent: IYSF.blue,
    bio: "Focused on the technical and aesthetic aspects of movement, passionate about the wellbeing benefits of structured physical training.",
  },
  {
    name: "Zuzana Drapalikova",
    role: "Czech Republic",
    accent: IYSF.magenta,
    bio: "A coach who emphasizes body awareness even in advanced postures, and enjoys sharing that understanding with students.",
  },
  {
    name: "Hana Persson",
    role: "Sweden",
    accent: IYSF.blue,
    bio: "Found competitive yoga shortly after starting practice, and credits it with deepening her attention to technical detail and the health value of correct form.",
  },
  {
    name: "Erik Persson",
    role: "Sweden",
    accent: IYSF.orange,
    bio: "Went from an unprepared first competition to Swedish, Nordic, and European champion, and winner of IYSF's 2020 International Virtual Yoga Asana Championship — now coaches others through the same competitive pathway.",
  },
];

function CoachesPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="About — International Coaches"
        title="International coaching panel"
        sub="Supporting athlete development and training standards across member federations."
      />

      <Section>
        <Prose>
          <p>
            IYSF's international coaching panel supports athlete development and training standards
            across member federations, from beginner instruction through elite competition preparation.
          </p>
        </Prose>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((c) => (
            <li key={c.name}>
              <InfoCard title={c.name} meta={c.role} accent={c.accent}>
                {c.bio}
              </InfoCard>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm" style={{ color: IYSF.charcoal }}>
          Coach photographs are pending individual sign-off and will be added once approved.
        </p>
      </Section>
    </PageShell>
  );
}