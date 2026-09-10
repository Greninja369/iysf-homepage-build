import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, MapPin, Users, Globe2, Trophy, Plane, Mail } from "lucide-react";
import { PageShell, Section, Prose } from "../components/page-shell";
import { IYSF } from "../components/site-chrome";
import eventLogo from "../assets/world-championship-2026-logo.png.asset.json";
import galleryOpening from "../assets/delegation-1.jpg";
import galleryIndividual from "../assets/delegation-2.jpg";
import galleryFloor from "../assets/event-1.jpg";
import galleryMedal from "../assets/delegation-3.jpg";

export const Route = createFileRoute("/events/world-championship-2026")({
  head: () => ({
    meta: [
      { title: "17th World Championship of Yogasana Sports — Italy 2026" },
      {
        name: "description",
        content:
          "Marina di Camerota, Italy, December 4–6, 2026. Registration is open for the 17th edition of the world championship: 150+ athletes, 30+ countries, three days of competition.",
      },
      {
        property: "og:title",
        content: "17th World Championship of Yogasana Sports — Italy 2026",
      },
      {
        property: "og:description",
        content:
          "Marina di Camerota, Italy — December 4–6, 2026. Registration now open for the 17th edition.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorldChampionship2026,
});

const GLANCE: [string, string, typeof Trophy][] = [
  ["17th", "consecutive edition", Trophy],
  ["150+", "athletes expected", Users],
  ["30+", "countries represented", Globe2],
  ["3", "days of competition", CalendarDays],
];

const EXPECT = [
  {
    title: "Elite competition",
    accent: IYSF.blue,
    body: "Athletes compete across individual, pair, and group categories, judged by certified international officials under IYSF standards.",
  },
  {
    title: "A global community",
    accent: IYSF.magenta,
    body: "Competitors, coaches, and guests from more than 30 countries share three days of competition, cultural exchange, and connection.",
  },
  {
    title: "A legacy continued",
    accent: IYSF.orange,
    body: "The 17th edition carries forward a championship shaped by generations of practitioners, now arriving on Italy's Cilento coast.",
  },
];

const GALLERY = [
  { caption: "Opening Ceremony", src: galleryOpening },
  { caption: "Individual Category", src: galleryIndividual },
  { caption: "Competition Floor", src: galleryFloor },
  { caption: "Medal Ceremony", src: galleryMedal },
  { caption: "Individual Category – Italy Podium", src: galleryIndividual },
  { caption: "Group Category – Italy Podium", src: galleryOpening },
];

function PrimaryButton({ children, href }: { children: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-[12px] px-6 py-3.5 text-[15px] font-bold transition-transform hover:-translate-y-0.5"
      style={{ background: IYSF.orange, color: IYSF.charcoal }}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href }: { children: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-[12px] border-2 px-6 py-3 text-[15px] font-bold transition-colors hover:bg-white"
      style={{ borderColor: IYSF.blue, color: IYSF.blue }}
    >
      {children}
    </a>
  );
}

function WorldChampionship2026() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  return (
    <PageShell>
      {/* ---------------- Hero ---------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 pt-12 pb-10 md:px-8 md:pt-16">
          <div
            className="overflow-hidden rounded-[16px] border"
            style={{ borderColor: IYSF.blueLine, boxShadow: IYSF.blueShadow }}
          >
            <img
              src={eventLogo.url}
              alt="17th World Championship of Yogasana Sports — Marina di Camerota, Italy, December 4–6, 2026"
              className="block w-full object-cover"
            />
          </div>
          <div
            className="mt-8 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
            style={{ background: IYSF.magenta }}
          >
            Registration now open
          </div>
          <h1
            className="mt-4 max-w-[900px] text-[36px] leading-[1.04] tracking-[-0.02em] md:text-[56px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
          >
            17th World Championship of Yogasana Sports
          </h1>
          <div
            className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] font-semibold"
            style={{ color: IYSF.blue }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> Marina di Camerota, Italy
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} aria-hidden="true" /> December 4–6, 2026
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="https://pci.jotform.com/form/261821599724366">Athlete Registration</PrimaryButton>
            <SecondaryButton href="https://app.winddoc.com/short/26mb/">Book Accommodation</SecondaryButton>
            <SecondaryButton href="/sponsorship">Become a Sponsor</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ---------------- Intro + at a glance ---------------- */}
      <Section heading="Join the longest-running Yogasana Sports championship" tint>
        <Prose>
          <p>
            For sixteen editions, athletes from every continent have come together to compete in
            Yogasana Sports — a discipline that tests precision, balance, and endurance under
            international judging standards. This December the tradition continues on Italy's
            southern coast, as the 17th edition brings the championship to Marina di Camerota.
          </p>
        </Prose>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GLANCE.map(([figure, label, Icon]) => (
            <li
              key={label}
              className="rounded-[12px] border bg-white p-5"
              style={{ borderColor: IYSF.blueLine }}
            >
              <Icon size={18} color={IYSF.magenta} aria-hidden="true" />
              <div
                className="mt-3 text-[30px] leading-none"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
              >
                {figure}
              </div>
              <div
                className="mt-2 text-[11.5px] font-bold uppercase tracking-[0.16em]"
                style={{ color: IYSF.charcoal }}
              >
                {label}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------- What to expect ---------------- */}
      <Section heading="What to expect">
        <ul className="grid gap-5 md:grid-cols-3">
          {EXPECT.map((e) => (
            <li
              key={e.title}
              className="rounded-[12px] border bg-white p-6"
              style={{ borderColor: IYSF.blueLine, borderTop: `3px solid ${e.accent}` }}
            >
              <h3
                className="text-[19px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
              >
                {e.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3a3a3a" }}>
                {e.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------- Venue ---------------- */}
      <Section heading="The venue" tint>
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className="rounded-[12px] border bg-white p-6"
            style={{ borderColor: IYSF.blueLine }}
          >
            <div
              className="text-[20px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
            >
              Palazzetto dello Sport
            </div>
            <div className="mt-2 text-[15px]" style={{ color: IYSF.charcoal }}>
              Marina di Camerota, Campania, Italy
            </div>
            <div
              className="mt-4 text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: IYSF.blue, fontFamily: "var(--font-mono)" }}
            >
              In use: December 4–6, 2026
            </div>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3a3a3a" }}>
              The official competition venue, hosting all rounds across the three days. Directions
              and access details will be added as they are confirmed.
            </p>
          </div>
          <div
            className="rounded-[12px] border bg-white p-6"
            style={{ borderColor: IYSF.blueLine }}
          >
            <div
              className="text-[20px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
            >
              The destination: Marina di Camerota
            </div>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#3a3a3a" }}>
              A coastal town in southern Italy known for centuries-old olive groves, dramatic
              Mediterranean coves, and sea air — a fitting backdrop for a championship built on
              discipline and presence. Beyond the competition floor, the Cilento region offers
              handmade pasta, estate wine, and olive oil pressed from groves that have stood for
              generations: a warm welcome for athletes and guests arriving from around the world.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------- Stay ---------------- */}
      <Section heading="Where to stay">
        <Prose>
          <p>
            <strong>Cilento Dreams Village</strong> is the recommended accommodation, located
            closest to the Palazzetto dello Sport and just minutes from the Marina di Camerota
            coastline.
          </p>
        </Prose>
        <div className="mt-6">
          <PrimaryButton href="https://app.winddoc.com/short/26mb/">Book Accommodation</PrimaryButton>
        </div>
        <p
          className="mt-6 inline-flex items-start gap-2 rounded-[10px] p-4 text-[14px]"
          style={{ background: IYSF.blueWash, color: IYSF.charcoal }}
        >
          <Plane size={16} color={IYSF.blue} aria-hidden="true" />
          <span>
            Travel note: athletes and guests are strongly encouraged to purchase flight insurance
            when booking travel.
          </span>
        </p>
      </Section>

      {/* ---------------- Gallery ---------------- */}
      <Section heading="Moments from the Malaysian Championship" kicker="Photo gallery" tint>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map(({ caption, src }) => (
            <li
              key={caption}
              className="overflow-hidden rounded-[12px] border bg-white"
              style={{ borderColor: IYSF.blueLine }}
            >
              <img
                src={src}
                alt={caption}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="px-4 py-3 text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: IYSF.charcoal }}>
                {caption}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------- Join us in Italy ---------------- */}
      <Section heading="Join us in Italy">
        <div className="grid gap-5 md:grid-cols-2">
          <div
            className="rounded-[12px] border p-6"
            style={{ borderColor: IYSF.blueLine, background: "#fff", borderTop: `3px solid ${IYSF.magenta}` }}
          >
            <h3
              className="text-[19px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
            >
              For athletes
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3a3a3a" }}>
              Register to compete and secure your place among 150+ athletes from 30+ countries.
              Registration confirms category entry and official credentials for the 17th World
              Championship.
            </p>
            <div className="mt-5">
              <PrimaryButton href="https://pci.jotform.com/form/261821599724366">Athlete Registration</PrimaryButton>
            </div>
          </div>
          <div
            className="rounded-[12px] border p-6"
            style={{ borderColor: IYSF.blueLine, background: "#fff", borderTop: `3px solid ${IYSF.blue}` }}
          >
            <h3
              className="text-[19px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal }}
            >
              For athletes &amp; guests
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3a3a3a" }}>
              Book your stay at Cilento Dreams Village, the closest recommended accommodation to
              the venue.
            </p>
            <div className="mt-5">
              <SecondaryButton href="https://app.winddoc.com/short/26mb/">Book Accommodation</SecondaryButton>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------- Keep updated ---------------- */}
      <section style={{ background: IYSF.charcoal }}>
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8">
          <div className="max-w-[620px]">
            <div
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: IYSF.orange }}
            >
              Keep updated
            </div>
            <h2
              className="mt-3 text-[26px] leading-[1.1] text-white md:text-[34px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Championship news, straight to your inbox
            </h2>
            <p className="mt-3 text-[15px] text-white/80">
              Schedule releases, category confirmations, and travel details for Marina di Camerota.
            </p>
            {signedUp ? (
              <p className="mt-6 text-[15px] font-semibold" style={{ color: IYSF.orange }}>
                Thanks — you're on the list for 2026 championship updates.
              </p>
            ) : (
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSignedUp(true);
                }}
              >
                <label className="relative flex-1">
                  <span className="sr-only">Email address</span>
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-[10px] border border-white/25 bg-white/10 px-9 py-3 text-[15px] text-white placeholder:text-white/50 outline-none focus:border-white/60"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-[10px] px-6 py-3 text-[15px] font-bold transition-transform hover:-translate-y-0.5"
                  style={{ background: IYSF.orange, color: IYSF.charcoal }}
                >
                  Keep me updated
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}