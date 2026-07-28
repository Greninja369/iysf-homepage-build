import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav, Footer } from "../components/site-chrome";

export const Route = createFileRoute("/")({
  component: Index,
});

/* placeholder pose icon — replace with final illustration */
function PoseIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true">
      <circle cx="24" cy="9" r="2.6" fill={color} />
      <line x1="24" y1="12" x2="24" y2="28" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="24" y1="15" x2="12" y2="6" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="24" y1="15" x2="36" y2="6" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="24" y1="28" x2="16" y2="42" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="24" y1="28" x2="32" y2="42" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

const BRAND = ["#FBAF43", "#4898D3", "#EA088C"] as const;

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  // Duplicate icons back-to-back for a seamless loop.
  const poseCount = 14;
  const poses = Array.from({ length: poseCount }, (_, i) => BRAND[i % BRAND.length]);
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1100px] px-5 pt-16 pb-10 text-center md:px-8 md:pt-24 md:pb-14">
        <div
          className="mb-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#4898D3", fontFamily: "var(--font-sans)" }}
        >
          <span
            className="iysf-pulse-dot inline-block h-2 w-2 rounded-full"
            style={{ background: "#EA088C" }}
            aria-hidden="true"
          />
          International federation
        </div>

        <h1
          className="mx-auto max-w-[900px] text-[40px] leading-[1.02] tracking-[-0.02em] md:text-[76px]"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            color: "#14181F",
            fontStretch: "expanded",
          }}
        >
          A practice,
          <br />
          judged as a sport.
        </h1>

        <p
          className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed md:text-[17px]"
          style={{ color: "#575757", fontFamily: "var(--font-sans)" }}
        >
          IYSF governs competitive Yogasana worldwide — every pose codified, every athlete
          certified.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-md px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:brightness-95"
            style={{ background: "#FBAF43", color: "#3A2400" }}
          >
            Join a federation
          </a>
          <a
            href="#news"
            className="rounded-md border-2 px-5 py-[10px] text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ borderColor: "#4898D3", color: "#4898D3" }}
          >
            View results
          </a>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        className="relative overflow-hidden border-y border-black/[0.06]"
        style={{ background: "#FAFAFA" }}
        aria-label="Yoga pose icon marquee"
      >
        <div className="iysf-marquee-track flex w-max gap-10 py-4 md:gap-14 md:py-5">
          {/* placeholder pose icons — replace with final illustrations */}
          {[...poses, ...poses].map((c, i) => (
            <div key={i} className="shrink-0" aria-hidden="true">
              <PoseIcon color={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Mandate --------------------------- */
function Mandate() {
  const facts = [
    { label: "Governing since", value: "placeholder" },
    { label: "Recognition status", value: "placeholder" },
    { label: "Headquartered in", value: "placeholder" },
  ];
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 md:grid-cols-[1.5fr_1fr] md:gap-16 md:px-8 md:py-28">
        <div>
          <div
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#EA088C" }}
          >
            Our mandate
          </div>
          <h2
            className="text-[30px] leading-[1.08] tracking-[-0.015em] md:text-[46px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
          >
            A sport with heritage,
            <br className="hidden md:block" /> governed to modern standard.
          </h2>
          <p
            className="mt-6 max-w-[560px] text-base leading-relaxed md:text-[17px]"
            style={{ color: "#575757" }}
          >
            IYSF sets the international rulebook for competitive Yogasana — codifying the compulsory
            and optional pose repertoire, certifying judges and athletes, sanctioning continental
            and world championships, and coordinating the Olympic recognition pathway with national
            member federations.
          </p>
        </div>

        <div className="border-l border-black/10 pl-6 md:pl-10">
          <ul className="space-y-6">
            {facts.map((f) => (
              <li key={f.label}>
                <div
                  className="text-[10.5px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#575757" }}
                >
                  {f.label}
                </div>
                <div
                  className="mt-1 text-[22px] italic"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "#14181F",
                    opacity: 0.55,
                  }}
                >
                  {f.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Stats band --------------------------- */
function StatsBand() {
  const stats = [
    "Member federations",
    "Certified athletes",
    "Championships held",
    "Continents represented",
  ];
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#16264A", color: "#fff" }}
    >
      {/* decorative rotating ring */}
      <svg
        className="iysf-ring-drift pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px]"
        viewBox="0 0 200 200"
        aria-hidden="true"
        style={{ opacity: 0.08 }}
      >
        <circle cx="100" cy="100" r="92" fill="none" stroke="#fff" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#FBAF43" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="#fff" strokeWidth="0.4" />
      </svg>

      <div className="relative mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <div
          className="mb-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#FBAF43" }}
        >
          Global reach
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((label) => (
            <div key={label}>
              <div
                className="text-[56px] leading-none md:text-[68px]"
                style={{ fontFamily: "var(--font-mono)", color: "#FBAF43", fontWeight: 500 }}
                aria-label={`${label}: placeholder`}
              >
                —
              </div>
              <div
                className="mt-3 text-[13px] font-medium"
                style={{ color: "#B7C4DA" }}
              >
                {label}
              </div>
              <div
                className="mt-1 text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "#B7C4DA", opacity: 0.55 }}
              >
                placeholder
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------- Upcoming championships --------------------- */
function Championships() {
  const cards = [
    { color: "#EA088C", name: "placeholder — World Championship", location: "placeholder city" },
    { color: "#4898D3", name: "placeholder — Continental Cup", location: "placeholder city" },
    { color: "#FBAF43", name: "placeholder — Junior Championship", location: "placeholder city" },
  ];
  return (
    <section id="events" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#4898D3" }}
            >
              Calendar
            </div>
            <h2
              className="text-[28px] leading-[1.08] tracking-[-0.015em] md:text-[40px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
            >
              Upcoming championships
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-lg border border-black/[0.08] bg-white transition-transform hover:-translate-y-1"
              style={{ color: c.color === "#FBAF43" ? "#3A2400" : "#fff" }}
            >
              <div
                className="px-5 py-5"
                style={{ background: c.color }}
              >
                <div
                  className="text-[11px] font-medium uppercase tracking-[0.2em] opacity-80"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  placeholder date
                </div>
                <div
                  className="mt-2 text-[26px] leading-none"
                  style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
                >
                  — / — / ——
                </div>
              </div>
              <div className="px-5 py-5">
                <h3
                  className="text-[18px] leading-tight"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
                >
                  {c.name}
                </h3>
                <div className="mt-2 text-sm" style={{ color: "#575757" }}>
                  {c.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- News ----------------------------- */
function News() {
  const items = [
    {
      color: "#FBAF43",
      kicker: "Results",
      title: "placeholder — championship results published",
    },
    {
      color: "#4898D3",
      kicker: "Governance",
      title: "placeholder — updated judging rubric released",
    },
    {
      color: "#EA088C",
      kicker: "Federation",
      title: "placeholder — new member federation admitted",
    },
  ];
  return (
    <section id="news" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 pb-20 md:px-8 md:pb-24">
        <div className="mb-10">
          <div
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#EA088C" }}
          >
            Newsroom
          </div>
          <h2
            className="text-[28px] leading-[1.08] tracking-[-0.015em] md:text-[40px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
          >
            Latest news
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <a
              key={i}
              href="#"
              className="group block rounded-lg border border-black/[0.08] bg-white p-6 transition-transform hover:-translate-y-1"
              style={{ borderTop: `4px solid ${it.color}` }}
            >
              <div
                className="text-[10.5px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: it.color }}
              >
                {it.kicker}
              </div>
              <h3
                className="mt-3 text-[19px] leading-snug tracking-[-0.005em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#14181F" }}
              >
                {it.title}
              </h3>
              <div
                className="mt-4 text-[11px] font-medium"
                style={{ fontFamily: "var(--font-mono)", color: "#575757" }}
              >
                placeholder date · placeholder byline
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CTA band --------------------------- */
function CtaBand() {
  return (
    <section id="join" style={{ background: "#FBAF43" }}>
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:gap-10 md:px-8 md:py-16">
        <h2
          className="max-w-[640px] text-[28px] leading-[1.1] tracking-[-0.015em] md:text-[38px]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#14181F" }}
        >
          Ready to compete under the IYSF banner?
        </h2>
        <a
          href="#"
          className="rounded-md px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
          style={{ background: "#14181F", color: "#fff" }}
        >
          Become a member federation
        </a>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />
      <main>
        <Hero />
        <Mandate />
        <StatsBand />
        <Championships />
        <News />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
