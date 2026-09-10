import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell, Prose, Section } from "../components/page-shell";
import { IYSF } from "../components/site-chrome";
import rajashreePortrait from "../assets/Rajashree.jpg";

export const Route = createFileRoute("/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship | IYSF" },
      {
        name: "description",
        content: "Support the IYSF World Yoga Asana Championships and help athletes from every generation compete on the world stage.",
      },
      { property: "og:title", content: "Sponsorship | IYSF" },
      {
        property: "og:description",
        content: "Become an IYSF World Yoga Asana Championships sponsor and support the global Yogasana sports community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SponsorshipPage,
});

function SponsorButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* TODO: Replace # with the Studio Sponsor URL. */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center rounded-[12px] px-6 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-0.5"
        style={{ background: IYSF.orange, color: IYSF.charcoal }}
      >
        Studio Sponsor
      </a>
      {/* TODO: Replace # with the Silver Sponsor URL. */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center rounded-[12px] border-2 px-6 py-3 text-[15px] font-bold transition-colors hover:bg-[rgba(66,152,211,0.08)]"
        style={{ borderColor: IYSF.blue, color: IYSF.blue }}
      >
        Silver Sponsor
      </a>
    </div>
  );
}

function SponsorshipPage() {
  return (
    <PageShell>
      <PageHeader kicker="Support the championship" title="Sponsorship" />

      <Section>
        <div className="max-w-[820px]">
          <img
            src={rajashreePortrait}
            alt="IYSF President Rajashree Choudhury"
            className="aspect-[4/3] w-full rounded-[12px] border object-cover object-top"
            style={{ borderColor: IYSF.blueLine, boxShadow: IYSF.blueShadow }}
          />
          <div className="mt-6">
            <SponsorButtons />
          </div>
        </div>
      </Section>

      <Section tint>
        <Prose>
          <p>Dear Friends,</p>

          <p>It is with great excitement, humility, and a deeply grateful heart that I invite you to join us for the <strong>17th IYSF World Yoga Asana Championships.</strong></p>

          <p>Seventeen World Championships when I look back, I often ask myself how a dream that began in <strong>2003</strong> could have come this far.</p>

          <p>At that time, it was simply an idea in my heart to create a healthy sport through Yoga Asana, where children, adults, and Masters could challenge themselves, develop discipline, learn respect, and, most importantly, <strong>become better human beings.</strong></p>

          <p>What once seemed like an impossible dream has now become a global journey.</p>

          <p>And how can I forget that <strong>Yoga Asana is a beautiful gift from India to the world.</strong> I feel deeply fortunate that this journey has been carried forward through the wisdom, discipline, and teachings of the great teachers who came before us. They taught us not only Yoga, but also the values, discipline, and dedication needed to organize and conduct a competition with integrity.</p>

          <p><strong>Their teachings are the foundation upon which we continue to build.</strong></p>

          <p>And I know very clearly that <strong>I did not build this alone.</strong></p>

          <p>Every Federation President, every athlete, every coach, every teacher, every parent, every volunteer, and every supporter who trusted this vision has helped carry IYSF forward. Your friendship and trust have given this movement its strength.</p>

          <p><strong>This is our journey. This is our celebration.</strong></p>

          <p>This year, we are opening the doors even wider from our youngest athletes to our Masters because Yoga Asana belongs to every generation. I want this World Competition to be a gathering where we don't simply witness extraordinary performances, but where we celebrate <strong>discipline, courage, friendship, unity, and the human spirit.</strong></p>

          <p><strong>A Humble Request for Your Support</strong></p>

          <p>As you know, IYSF is a <strong>nonprofit organization</strong>, and creating an international event of this scale requires the support of our global community.</p>

          <p>For the first time, we are offering special opportunities for <strong>yoga studios, wellness centers, boutiques, startups, and businesses beyond yoga</strong> to become part of the World Competition through sponsorship and global promotion.</p>

          <p>If you or someone in your community has a business that would like to reach an international audience, I humbly ask you to consider supporting IYSF through one of these opportunities.</p>

          <p>Your sponsorship does more than promote a business. <strong>It helps us bring athletes together, create opportunities for the next generation, and continue the mission we started more than two decades ago.</strong></p>

          <p>The opportunities are limited, so I encourage you to reserve your place early. All details are available on the IYSF website.</p>

          <p>We also kindly ask that sponsors do not send physical products for us to carry internationally, as customs regulations make this very difficult. Promotional opportunities are available without requiring us to transport products.</p>

          <p>Yoga enthusiast, I ask you not only to come yourselves, but to <strong>bring your community with you.</strong> Encourage your studios, athletes, families, and businesses to participate and support this historic gathering.</p>

          <p>Let us show the world what happens when we come together with one purpose:</p>

          <p><strong>Unity through Yoga Asana.</strong></p>
          <p><strong>Discipline through Sport.</strong></p>
          <p><strong>And humanity beyond all boundaries.</strong></p>

          <p>I look forward to welcoming you personally, sharing this special moment with you, and celebrating everything we have built together.</p>

          <p>From my heart, <strong>thank you for believing in the dream, carrying the teachings of our great teachers, and helping us share this gift from India with the world.</strong></p>

          <p>With deepest gratitude, love, and respect,</p>

          <p><strong>Rajashree Choudhury</strong><br />President<br /><strong>International Yoga Sports Federation (IYSF)</strong></p>

          <div className="pt-5">
            <SponsorButtons />
          </div>
        </Prose>
      </Section>
    </PageShell>
  );
}