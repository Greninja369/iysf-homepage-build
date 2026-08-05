import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, Prose, PhotoPlaceholder } from "../components/page-shell";
import { IYSF } from "../components/site-chrome";

export const Route = createFileRoute("/about/international-judges")({
  head: () => ({
    meta: [
      { title: "International Judges — IYSF Officials" },
      {
        name: "description",
        content:
          "IYSF's international judging panel certifies and officiates at world championships, ensuring consistent, fair scoring across every event.",
      },
      { property: "og:title", content: "International Judges — IYSF" },
      {
        property: "og:description",
        content: "The officials who score IYSF's highest-level competitions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JudgesPage,
});

const JUDGES: [string, string][] = [
  ["Lynn Whitlow", "USA"],
  ["Tereza Bonnet-Šenková", "Czech Republic"],
  ["Rajashree Choudhury", "USA"],
  ["Umang Dawn", "India"],
  ["Adrian Alarcon", "Mexico"],
  ["Cintra Brown", "UK"],
  ["Amy Kreminski", "Australia"],
  ["Ann Leonard", "Ireland"],
  ["BA Goddard", "UK"],
  ["Christian Scaraglino", "Sweden"],
  ["Cynthia Wehr", "USA"],
  ["Dana Vasilescu Henry", "France"],
  ["Davide Toneguzzi", "Italy"],
  ["Dr. Surya Bahadur Karki", "Nepal"],
  ["Elizabeth Walunas", "USA"],
  ["Erin Paulsen", "USA"],
  ["Jana Dohnalova", "Czech Republic"],
  ["Jean Agress", "USA"],
  ["Joanne Przystawka", "Canada"],
  ["Xiang Li", "China"],
  ["Lydia Wright", "Netherlands"],
  ["Mandeep Kaur Sandhu", "India"],
  ["Pablo DiVita", "Argentina"],
  ["Qiao-Judy Lu", "USA"],
  ["Dr. Sangram Puri", "Nepal"],
  ["Selay Marius Kouassi", "Côte d'Ivoire"],
  ["Trine Zafina Søndergaard", "Denmark"],
  ["Yalguun Munkhjoloo", "Mongolia"],
  ["Dipa Panday", "Nepal"],
  ["Zuzana Hadravová", "Czech Republic"],
  ["Maryna Surkova", "Belgium"],
  ["Dr. Ananda Gahire", "Nepal"],
  ["Florencia Hanon", "Argentina"],
  ["Imelda Turner", "Australia"],
];

function JudgesPage() {
  return (
    <PageShell>
      <PageHeader
        kicker="About — International Judges"
        title="International judging panel"
        sub="Certified officials who ensure consistent, fair scoring across every IYSF world championship."
      />

      <Section>
        <Prose>
          <p>
            IYSF's international judging panel certifies and officiates at the federation's
            highest-level competitions, ensuring consistent, fair scoring across every world
            championship.
          </p>
          <p>
            To contact an official, please use the{" "}
            <Link to="/contact" className="font-semibold hover:underline" style={{ color: IYSF.blue }}>
              general inquiry form
            </Link>{" "}
            — personal contact details are not published.
          </p>
        </Prose>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {JUDGES.map(([name, country]) => (
            <li
              key={name}
              className="rounded-[12px] border bg-white p-4 text-center"
              style={{ borderColor: IYSF.blueLine }}
            >
              <div className="flex justify-center">
                <PhotoPlaceholder name={name} size="sm" />
              </div>
              <div
                className="mt-3 text-[14px] leading-snug"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
              >
                {name}
              </div>
              <div className="mt-1 text-[12px]" style={{ color: IYSF.charcoal }}>
                {country}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm" style={{ color: IYSF.charcoal }}>
          Portraits are placeholders pending individual photo sign-off.
        </p>
      </Section>
    </PageShell>
  );
}