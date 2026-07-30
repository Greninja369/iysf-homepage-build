import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Award, Users, ClipboardCheck, MinusCircle, Trophy, ArrowRight } from "lucide-react";
import { Nav, Footer } from "../components/site-chrome";
import { JoinForm } from "../components/join-form";
import { Reveal, CountUp } from "../components/reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IYSF — International Yogasana Sports Federation" },
      {
        name: "description",
        content:
          "The global governing body for competitive Yogasana: 64 member federations, 3,200 certified athletes, championships across six continents.",
      },
      { property: "og:title", content: "IYSF — International Yogasana Sports Federation" },
      {
        property: "og:description",
        content:
          "A practice, judged as a sport. Championships, rules, athlete certification and the global federation directory.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const BLUE = "#4298D3";
const ORANGE = "#FAAF40";
const MAGENTA = "#DE007A";
const CHARCOAL = "#414042";

/* ---------- shared bits ---------- */
function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 max-w-[680px]">
      {eyebrow && (
        <div
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: BLUE }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="text-[30px] leading-[1.08] tracking-[-0.02em] md:text-[42px]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: CHARCOAL }}
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "rgba(65,64,66,0.65)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/** Neutral image placeholder block. */
function ImgPlaceholder({
  className = "",
  label = "Image placeholder",
  dark = false,
}: {
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}
      style={{
        background: dark ? "rgba(255,255,255,0.06)" : "#F1F2F3",
        border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(65,64,66,0.08)",
      }}
      role="img"
      aria-label={label}
    >
      <span
        className="px-4 text-center text-[10.5px] font-semibold uppercase tracking-[0.2em]"
        style={{ color: dark ? "rgba(255,255,255,0.45)" : "rgba(65,64,66,0.35)" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ---------- 2. Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: CHARCOAL }}>
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div>
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em]"
                style={{ background: "rgba(66,152,211,0.18)", color: "#9CCBEA" }}
              >
                <span
                  className="iysf-pulse-dot inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: MAGENTA }}
                  aria-hidden="true"
                />
                International federation
              </div>
              <h1
                className="text-[42px] leading-[0.98] tracking-[-0.03em] text-white md:text-[68px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                A practice,
                <br />
                judged as a sport.
              </h1>
              <p
                className="mt-6 max-w-[440px] text-[16px] leading-relaxed md:text-[18px]"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                64 federations. 3,200 certified athletes. One global stage.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/"
                  hash="join"
                  className="rounded-lg px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:brightness-105"
                  style={{ background: ORANGE, color: "#3A2400" }}
                >
                  Join a federation
                </Link>
                <Link
                  to="/"
                  hash="judging"
                  className="rounded-lg border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explore the sport
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <ImgPlaceholder
                dark
                className="aspect-video w-full"
                label="Yogasana pose being judged — video placeholder"
              />
              <button
                type="button"
                aria-label="Play federation film"
                className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full border border-white/60 bg-white/15 backdrop-blur transition-all hover:scale-105 hover:bg-white/25"
              >
                <Play size={22} color="#fff" fill="#fff" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Trust bar ---------- */
function TrustBar() {
  const items = [
    "GAISF observer",
    "IOC pathway partner",
    "64 national federations",
    "Est. 2019",
  ];
  return (
    <div className="border-b border-black/[0.06] bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-5 py-4 md:px-8">
        {items.map((it, i) => (
          <span key={it} className="flex items-center gap-3">
            {i > 0 && (
              <span aria-hidden="true" style={{ color: "rgba(65,64,66,0.3)" }}>
                ·
              </span>
            )}
            <span
              className="text-[11.5px] font-medium uppercase tracking-[0.16em]"
              style={{ color: "rgba(65,64,66,0.55)" }}
            >
              {it}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- 4. Stats ---------- */
const STATS = [
  { n: 64, label: "member federations" },
  { n: 3200, label: "certified athletes" },
  { n: 18, label: "championships held" },
  { n: 6, label: "continents" },
];

function Stats() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="rounded-xl border border-black/[0.06] bg-white p-7 shadow-[0_10px_30px_-18px_rgba(65,64,66,0.45)] transition-transform hover:-translate-y-1">
                <div
                  className="text-[40px] leading-none tracking-[-0.03em] md:text-[46px]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: BLUE }}
                >
                  <CountUp to={s.n} />
                </div>
                <div
                  className="mt-3 text-[13.5px] font-medium"
                  style={{ color: "rgba(65,64,66,0.7)" }}
                >
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. World map ---------- */
const CONTINENTS = [
  "M120,60 L250,55 L300,110 L250,190 L200,180 L170,230 L150,180 L110,120 Z",
  "M250,250 L310,240 L330,300 L300,380 L270,420 L255,340 L235,300 Z",
  "M470,90 L545,84 L560,130 L510,162 L470,140 Z",
  "M470,180 L560,175 L575,260 L540,332 L500,342 L480,270 L455,220 Z",
  "M560,60 L830,58 L872,120 L800,182 L700,202 L640,172 L575,150 L555,100 Z",
  "M800,300 L880,298 L890,350 L830,372 L800,340 Z",
];
const DOTS: { x: number; y: number }[] = [
  { x: 228, y: 142 },
  { x: 206, y: 94 },
  { x: 217, y: 186 },
  { x: 358, y: 289 },
  { x: 322, y: 347 },
  { x: 500, y: 100 },
  { x: 489, y: 139 },
  { x: 567, y: 333 },
  { x: 650, y: 183 },
  { x: 716, y: 192 },
  { x: 783, y: 242 },
  { x: 883, y: 150 },
  { x: 869, y: 319 },
];

function WorldMap() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 pb-16 md:px-8 md:pb-24">
        <Reveal>
          <SectionHead
            eyebrow="Global network"
            title="Where we compete"
            sub="Member federations across six continents, each sanctioned to run national championships under IYSF rules."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-xl border border-black/[0.06] bg-[#FAFAFB] p-4 md:p-8">
            <svg viewBox="0 0 1000 500" className="w-full" role="img" aria-label="World map showing countries with IYSF member federations">
              {CONTINENTS.map((d, i) => (
                <path key={i} d={d} fill="rgba(65,64,66,0.07)" stroke="rgba(65,64,66,0.16)" strokeWidth="1.5" />
              ))}
              {DOTS.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="12" fill={BLUE} opacity="0.16" />
                  <circle cx={p.x} cy={p.y} r="5" fill={BLUE} />
                </g>
              ))}
              <line x1="716" y1="192" x2="716" y2="140" stroke={BLUE} strokeWidth="1.5" />
            </svg>
            <div
              className="absolute left-[62%] top-[16%] hidden rounded-lg bg-white px-3 py-2 shadow-[0_14px_34px_-18px_rgba(65,64,66,0.6)] md:block"
              style={{ border: "1px solid rgba(65,64,66,0.08)" }}
            >
              <div className="text-[12.5px] font-bold" style={{ color: CHARCOAL }}>
                Yogasana Bharat
              </div>
              <div className="text-[11px]" style={{ color: MAGENTA }}>
                India · Full member
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-6">
          <Link
            to="/directory"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
            style={{ color: MAGENTA }}
          >
            View full directory <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Judging ---------- */
const JUDGING = [
  { icon: Award, label: "Compulsory pose", desc: "Athlete performs the set sequence." },
  { icon: Users, label: "Judge panel scores", desc: "Five certified judges score independently." },
  { icon: MinusCircle, label: "Deductions applied", desc: "Alignment and hold-time penalties." },
  { icon: Trophy, label: "Score revealed", desc: "Final score published to the board." },
];

function Judging() {
  return (
    <section id="judging" className="bg-[#FAFAFB]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHead eyebrow="The sport" title="How judging works" />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {JUDGING.map((s, i) => {
            const Icon = s.icon;
            const bg = i % 2 === 0 ? BLUE : ORANGE;
            return (
              <Reveal key={s.label} delay={i * 90}>
                <div className="relative text-center">
                  <div
                    className="mx-auto grid h-16 w-16 place-items-center rounded-full"
                    style={{ background: bg }}
                  >
                    <Icon size={26} color={i % 2 === 0 ? "#fff" : "#3A2400"} aria-hidden="true" />
                  </div>
                  <div
                    className="mt-5 text-[15.5px] font-bold"
                    style={{ color: CHARCOAL, fontFamily: "var(--font-display)" }}
                  >
                    {s.label}
                  </div>
                  <p
                    className="mx-auto mt-2 max-w-[210px] text-[13.5px] leading-relaxed"
                    style={{ color: "rgba(65,64,66,0.6)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Championships ---------- */
const EVENTS = [
  { name: "World Yogasana Championship", place: "Cyberjaya, Malaysia", date: "14–17 Nov 2026", countdown: "12d : 06h left" },
  { name: "Pan-American Open", place: "São Paulo, Brazil", date: "05–07 Feb 2027", countdown: "94d : 11h left" },
  { name: "European Championship", place: "Lisbon, Portugal", date: "22–24 Apr 2027", countdown: "170d : 02h left" },
];

function Championships() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHead eyebrow="Calendar" title="Upcoming championships" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.name} delay={i * 100}>
              <Link
                to="/events"
                className="group block overflow-hidden rounded-xl border border-black/[0.07] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(65,64,66,0.6)]"
              >
                <ImgPlaceholder className="aspect-[16/10] w-full rounded-none" label="Event image placeholder" />
                <div className="p-5">
                  <span
                    className="inline-block rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wide"
                    style={{ background: ORANGE, color: "#3A2400", fontFamily: "var(--font-mono)" }}
                  >
                    {e.countdown}
                  </span>
                  <h3
                    className="mt-3 text-[18px] font-bold leading-snug transition-colors group-hover:text-[#DE007A]"
                    style={{ color: CHARCOAL, fontFamily: "var(--font-display)" }}
                  >
                    {e.name}
                  </h3>
                  <div className="mt-1.5 text-[13.5px]" style={{ color: "rgba(65,64,66,0.6)" }}>
                    {e.place} · {e.date}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Athlete spotlight ---------- */
const ATHLETES = [
  { name: "Ana Ribeiro", meta: "Brazil · 2x gold" },
  { name: "Meera Raghavan", meta: "India · World record holder" },
  { name: "Daniel Osei", meta: "Ghana · Continental champion" },
];

function Spotlight() {
  return (
    <section className="bg-[#FAFAFB]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHead eyebrow="Athletes" title="Athlete spotlight" />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-3">
          {ATHLETES.map((a, i) => (
            <Reveal key={a.name} delay={i * 100}>
              <div className="text-center">
                <ImgPlaceholder
                  className="mx-auto aspect-square w-36 rounded-full md:w-44"
                  label="Portrait"
                />
                <div
                  className="mt-5 text-[17px] font-bold"
                  style={{ color: CHARCOAL, fontFamily: "var(--font-display)" }}
                >
                  {a.name}
                </div>
                <div className="mt-1 text-[13px] font-medium" style={{ color: MAGENTA }}>
                  {a.meta}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Recognition pathway ---------- */
const PATHWAY = [
  { label: "Recognised federation", done: true },
  { label: "Provisional status", done: true },
  { label: "Full recognition", done: false },
  { label: "Olympic programme", done: false },
];

function Pathway() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHead
            eyebrow="Governance"
            title="Recognition pathway"
            sub="Our route from international recognition to the Olympic programme."
          />
        </Reveal>
        <Reveal delay={100}>
          <ol className="grid gap-4 md:grid-cols-4">
            {PATHWAY.map((s, i) => (
              <li key={s.label} className="relative">
                <div
                  className="flex h-full items-center gap-3 rounded-xl px-5 py-5"
                  style={{
                    background: s.done ? BLUE : "#F1F2F3",
                    color: s.done ? "#fff" : "rgba(65,64,66,0.6)",
                  }}
                >
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12px] font-bold"
                    style={{
                      background: s.done ? "rgba(255,255,255,0.22)" : "rgba(65,64,66,0.1)",
                      color: s.done ? "#fff" : "rgba(65,64,66,0.7)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[14px] font-semibold leading-snug">{s.label}</span>
                </div>
                {i < PATHWAY.length - 1 && (
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block"
                    color="rgba(65,64,66,0.35)"
                  />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 10. Newsroom ---------- */
const NEWS = [
  { title: "IYSF confirms 2027 championship calendar", time: "3 days ago" },
  { title: "Judging code updated ahead of world finals", time: "1 week ago" },
  { title: "Two new member federations admitted in Africa", time: "2 weeks ago" },
];

function Newsroom() {
  return (
    <section id="newsroom" className="bg-[#FAFAFB]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHead eyebrow="Latest" title="Newsroom" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 100}>
              <article className="group overflow-hidden rounded-xl border border-black/[0.07] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(65,64,66,0.6)]">
                <ImgPlaceholder className="aspect-[16/10] w-full rounded-none" label="Article image placeholder" />
                <div className="p-5">
                  <h3
                    className="text-[16.5px] font-bold leading-snug transition-colors group-hover:text-[#DE007A]"
                    style={{ color: CHARCOAL, fontFamily: "var(--font-display)" }}
                  >
                    {n.title}
                  </h3>
                  <div
                    className="mt-2 text-[12px] uppercase tracking-[0.12em]"
                    style={{ color: "rgba(65,64,66,0.5)", fontFamily: "var(--font-mono)" }}
                  >
                    {n.time}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. Footer CTA + join form ---------- */
function FooterCta() {
  return (
    <section id="join" style={{ background: CHARCOAL }}>
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <h2
              className="text-[32px] leading-[1.05] tracking-[-0.02em] text-white md:text-[46px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Bring Yogasana to your country
            </h2>
            <p
              className="mx-auto mt-4 max-w-[480px] text-[15.5px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              National bodies can apply for IYSF membership and gain access to sanctioned events,
              judging certification and the global rulebook.
            </p>
            <a
              href="#join-form"
              className="mt-8 inline-block rounded-lg px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:brightness-105"
              style={{ background: ORANGE, color: "#3A2400" }}
            >
              Apply for membership
            </a>
          </div>
        </Reveal>

        <div id="join-form" className="mx-auto mt-14 max-w-[860px]">
          <JoinForm />
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <WorldMap />
        <Judging />
        <Championships />
        <Spotlight />
        <Pathway />
        <Newsroom />
        <FooterCta />
      </main>
      <Footer />
    </div>
  );
}
