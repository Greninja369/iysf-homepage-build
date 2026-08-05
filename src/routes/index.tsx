import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, ArrowRight, Globe2, Trophy, GraduationCap } from "lucide-react";
import { Nav, Footer, IYSF } from "../components/site-chrome";
import { JoinForm } from "../components/join-form";
import { PhotoPlaceholder } from "../components/page-shell";
import { upcomingEvents } from "../data/iysf";
import { Reveal } from "../components/history-motion";
import heroVideo from "../assets/hero-championship.mp4.asset.json";
import heroPoster from "../assets/hero-championship.jpg";
import aboutCompetition from "../assets/about-competition.jpg";
import aboutSport from "../assets/about-sport.jpg";
import aboutChampions from "../assets/about-champions.jpg";
import aboutGovernance from "../assets/about-governance.jpg";
import delegation1 from "../assets/delegation-1.jpg";
import delegation2 from "../assets/delegation-2.jpg";
import delegation3 from "../assets/delegation-3.jpg";
import newsFeatured from "../assets/news-featured.jpg";
import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";
import event1 from "../assets/event-1.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IYSF — International Yoga Sports Federation" },
      {
        name: "description",
        content:
          "IYSF is the global governing body for Yogasana sport: 64 member federations, world championships, judge certification, and the path toward Olympic recognition.",
      },
      { property: "og:title", content: "IYSF — International Yoga Sports Federation" },
      {
        property: "og:description",
        content: "64 member federations. Is yours one of them? Join the global governing body for Yogasana sport.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const CARD: React.CSSProperties = {
  background: "#fff",
  border: `1px solid ${IYSF.blueLine}`,
  borderRadius: 14,
  boxShadow: IYSF.blueShadow,
};

const H2 = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  color: IYSF.charcoal,
  letterSpacing: "-0.02em",
  ...extra,
});

/* ------------------------------- Hero ------------------------------- */
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative isolate min-h-[560px] overflow-hidden md:min-h-[680px]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={heroPoster}
        autoPlay
        loop
        muted={muted}
        playsInline
        aria-label="Highlights from the most recent IYSF World Championship"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(65,64,66,0.94) 0%, rgba(65,64,66,0.72) 38%, rgba(65,64,66,0.28) 100%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[560px] max-w-[1320px] flex-col justify-end px-5 pb-16 pt-24 md:min-h-[680px] md:px-8 md:pb-20">
        <div className="max-w-[820px]">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
            style={{ background: IYSF.magenta }}
          >
            World Yogasana Championships
          </div>
          <h1
            className="text-[42px] leading-[1.02] text-white md:text-[76px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.025em" }}
          >
            A practice, judged as a sport.
          </h1>
          <p className="mt-5 max-w-[520px] text-lg font-medium text-white/90 md:text-xl">
            64 member federations. Is yours one of them?
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              hash="join"
              className="rounded-[12px] px-7 py-4 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: IYSF.orange, boxShadow: "0 16px 36px -16px rgba(250,175,64,0.95)" }}
            >
              Join a federation
            </Link>
            <Link
              to="/events"
              className="rounded-[12px] border-2 border-white px-6 py-[13px] text-base font-bold text-white transition-colors hover:bg-white/15"
            >
              See results
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-5 flex items-center gap-2 md:right-8">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause background video" : "Play background video"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute background video" : "Mute background video"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Mission strip --------------------------- */
function MissionStrip() {
  return (
    <section className="bg-white" style={{ borderBottom: `1px solid ${IYSF.blueLine}` }}>
      <div className="mx-auto max-w-[1100px] px-5 py-10 text-center md:px-8 md:py-12">
        <p
          className="text-[19px] leading-snug md:text-[26px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: IYSF.charcoal }}
        >
          IYSF exists to govern Yogasana as a measured sport — one rulebook, one scoring
          standard, and one competitive pathway for every national federation.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- Stats bar ---------------------------- */
function StatStrip() {
  const stats = [
    "Founded 2013",
    "64 member federations",
    "48 countries represented",
    "16 championships held",
  ];
  return (
    <section style={{ background: IYSF.blue }}>
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <Reveal
            key={s}
            delay={i * 90}
            className="px-2 py-6 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-white md:text-[14px]"
          >
            <span
              className="block"
              style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.25)" } : undefined}
            >
              {s}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- About preview -------------------------- */
function AboutPreview() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <div>
            <h2 className="text-[30px] md:text-[44px]" style={H2()}>
              About the federation
            </h2>
            <p className="mt-5 text-base leading-relaxed md:text-[17px]" style={{ color: "rgba(65,64,66,0.78)" }}>
              IYSF was founded in 2013 to give competitive Yogasana the same footing as any other
              judged sport: written rules, certified officials, and results that hold up to
              scrutiny. From a single international championship, the federation now oversees
              national qualifiers, continental rounds and a world final each season.
            </p>
            <p className="mt-4 text-base leading-relaxed md:text-[17px]" style={{ color: "rgba(65,64,66,0.78)" }}>
              Everything the federation does points one way — recognition of Yogasana on the
              Olympic pathway.
            </p>
            <Link
              to="/about/history"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold"
              style={{ color: IYSF.magenta }}
            >
              Learn more <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: aboutCompetition, alt: "Athlete mid-routine at an IYSF championship" },
              { src: aboutSport, alt: "Judges scoring a competition round" },
              { src: aboutChampions, alt: "Medal ceremony at a world championship" },
              { src: aboutGovernance, alt: "Federation officials in session" },
            ].map((c) => (
              <img
                key={c.src}
                src={c.src}
                alt={c.alt}
                loading="lazy"
                width={900}
                height={700}
                className="h-36 w-full rounded-[12px] object-cover md:h-44"
                style={{ border: `1px solid ${IYSF.blueLine}` }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Featured officers ------------------------ */
function FeaturedOfficers() {
  const officers = [
    { name: "Rajashree Choudhury", role: "President (USA)", accent: IYSF.orange },
    { name: "Mritunjay Kumar Pandey", role: "Secretary General (India)", accent: IYSF.blue },
    { name: "Christian Scaraglino", role: "Vice-President (Sweden)", accent: IYSF.magenta },
    { name: "Umang Dawn", role: "Vice-President (India)", accent: IYSF.blue },
    { name: "Adrian Alarcon", role: "Vice-President (Mexico)", accent: IYSF.magenta },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1320px] px-5 pb-20 md:px-8 md:pb-24">
        <Reveal>
          <h2 className="text-[30px] md:text-[44px]" style={H2()}>
            Who runs IYSF
          </h2>
          <p className="mt-4 max-w-[620px] text-sm leading-relaxed md:text-base" style={{ color: "rgba(65,64,66,0.72)" }}>
            The Executive Committee is elected by the membership and carries the federation's
            day-to-day decisions, from championship oversight to international recognition work.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-5">
          {officers.map((o, i) => (
            <Reveal key={o.name} delay={i * 70}>
              <Link
                to="/about/executive-committee"
                className="flex h-full flex-col items-center p-5 text-center transition-transform hover:-translate-y-1"
                style={CARD}
              >
                <PhotoPlaceholder name={o.name} accent={o.accent} />
                <span
                  className="mt-4 text-[15px] font-bold leading-snug"
                  style={{ color: IYSF.charcoal, fontFamily: "var(--font-display)" }}
                >
                  {o.name}
                </span>
                <span className="mt-1 text-[12px] font-semibold" style={{ color: "rgba(65,64,66,0.7)" }}>
                  {o.role}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/about/executive-committee"
            className="inline-flex items-center gap-1.5 text-sm font-bold"
            style={{ color: IYSF.magenta }}
          >
            Full Executive Committee <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-4 text-xs" style={{ color: "rgba(65,64,66,0.6)" }}>
          Portraits are labeled placeholders — approved headshots will replace them.
        </p>
      </div>
    </section>
  );
}

/* -------------------------- Upcoming events ------------------------- */
function UpcomingEvents() {
  const next = upcomingEvents().slice(0, 3);
  return (
    <section style={{ background: IYSF.blueWash }}>
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-[30px] md:text-[44px]" style={H2()}>
            Upcoming events
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {next.map((e, i) => (
            <Reveal key={e.slug} delay={i * 80}>
              <Link
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="block h-full p-6 transition-transform hover:-translate-y-1"
                style={CARD}
              >
                <span
                  className="inline-block rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.16em] text-white"
                  style={{ background: IYSF.blue }}
                >
                  {e.tier}
                </span>
                <h3
                  className="mt-4 text-[19px] leading-snug"
                  style={{ color: IYSF.charcoal, fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {e.name}
                </h3>
                <div className="mt-2 text-[13px]" style={{ fontFamily: "var(--font-mono)", color: IYSF.magenta }}>
                  {e.date}
                </div>
                <p className="mt-2 text-sm" style={{ color: "rgba(65,64,66,0.72)" }}>
                  {e.location}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/events" className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: IYSF.magenta }}>
            Full calendar <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Membership CTA band ----------------------- */
function MembershipCta() {
  return (
    <section style={{ background: IYSF.orange }}>
      <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8 md:py-16">
        <div>
          <h2 className="max-w-[720px] text-[26px] leading-tight md:text-[36px]" style={H2({ color: "#3A2400" })}>
            Bring Your Federation Into IYSF
          </h2>
          <p className="mt-3 max-w-[560px] text-sm md:text-base" style={{ color: "#3A2400" }}>
            Membership gives your athletes a graded route to continental and world competition,
            and your officials the certification to run it.
          </p>
        </div>
        <Link
          to="/join-us"
          className="shrink-0 rounded-[12px] px-7 py-4 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
          style={{ background: "#14181F" }}
        >
          Join us
        </Link>
      </div>
    </section>
  );
}


/* ---------------------------- Why join ------------------------------ */
function WhyJoin() {
  const benefits = [
    {
      Icon: Globe2,
      title: "Global recognition",
      desc: "A path toward Olympic-linked status for your national federation.",
    },
    {
      Icon: Trophy,
      title: "Compete internationally",
      desc: "Send athletes to world and continental championships.",
    },
    {
      Icon: GraduationCap,
      title: "Access training & certification",
      desc: "IYSF Academy judge and coach certification for your federation's staff.",
    },
  ];
  const strip = [
    { src: delegation1, alt: "National delegation at an IYSF championship opening ceremony" },
    { src: delegation2, alt: "Flags of member federations inside the championship arena" },
    { src: delegation3, alt: "Federation officials at an international championship" },
    { src: event1, alt: "Championship arena during competition" },
  ];
  return (
    <section style={{ background: IYSF.blueWash }}>
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-[30px] md:text-[44px]" style={H2()}>
            Why join IYSF
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="h-full p-7" style={CARD}>
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-[12px]"
                  style={{ background: "rgba(66,152,211,0.12)" }}
                >
                  <Icon size={22} color={IYSF.blue} aria-hidden="true" />
                </span>
                <h3
                  className="mt-5 text-[19px] font-bold"
                  style={{ color: IYSF.charcoal, fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(65,64,66,0.72)" }}>
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {strip.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                loading="lazy"
                width={720}
                height={512}
                className="h-32 w-full rounded-[12px] object-cover md:h-36"
                style={{ border: `1px solid ${IYSF.blueLine}` }}
              />
            ))}
          </div>
          <p className="mt-4 text-center text-sm font-medium" style={{ color: "rgba(65,64,66,0.72)" }}>
            Federations like yours are already competing under the IYSF banner.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


/* ------------------------------- News -------------------------------- */
function News() {
  const rows = [
    { img: news1, title: "International judges complete the 2026 recertification cycle" },
    { img: news2, title: "Junior division records fall at the continental qualifier" },
    { img: news3, title: "Two new national federations sign membership agreements" },
    { img: event1, title: "Host city shortlist announced for the next World Championship" },
  ];
  return (
    <section id="news" className="bg-white">
      <div className="mx-auto max-w-[1320px] px-5 pb-20 md:px-8 md:pb-24">
        <Reveal>
          <h2 className="text-[30px] md:text-[44px]" style={H2()}>
            News
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <Link to="/results" className="group block h-full overflow-hidden" style={CARD}>
              <img
                src={newsFeatured}
                alt="Athletes competing at an IYSF world championship"
                loading="lazy"
                width={1200}
                height={800}
                className="h-64 w-full object-cover md:h-[340px]"
              />
              <div className="p-6">
                <span
                  className="inline-block rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-white"
                  style={{ background: IYSF.magenta }}
                >
                  Featured
                </span>
                <h3
                  className="mt-3 text-[24px] leading-snug"
                  style={{ color: IYSF.charcoal, fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  World Championship delivers the largest field in IYSF history
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(65,64,66,0.72)" }}>
                  Athletes from across six continents contested the compulsory and optional rounds under the
                  federation's standardized scoring system.
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-4 content-start">
            {rows.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <Link to="/events" className="group flex items-center gap-4 p-3 transition-transform hover:-translate-y-0.5" style={CARD}>
                  <img
                    src={r.img}
                    alt=""
                    loading="lazy"
                    width={680}
                    height={512}
                    className="h-20 w-28 shrink-0 rounded-[10px] object-cover"
                  />
                  <h3
                    className="text-[15px] font-bold leading-snug"
                    style={{ color: IYSF.charcoal, fontFamily: "var(--font-display)" }}
                  >
                    {r.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




function Index() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  return (
    <div style={{ fontFamily: "var(--font-sans)", color: IYSF.charcoal, background: "#fff" }}>
      <Nav />
      <main>
        <Hero />
        <MissionStrip />
        <StatStrip />
        <AboutPreview />
        <WhyJoin />
        <FeaturedOfficers />
        <UpcomingEvents />
        <News />
        <JoinForm />
        <MembershipCta />
      </main>
      <Footer />
    </div>
  );
}
