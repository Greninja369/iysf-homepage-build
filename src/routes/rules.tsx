import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import { Search, FileDown, Menu, X } from "lucide-react";
import { Nav, Footer } from "../components/site-chrome";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules & Regulations — IYSF Governance" },
      {
        name: "description",
        content:
          "The official rulebook governing competitive Yogasana under the International Yoga Sports Federation.",
      },
      { property: "og:title", content: "Rules & Regulations — IYSF Governance" },
      {
        property: "og:description",
        content:
          "Judging criteria, athlete eligibility, anti-doping, code of conduct, and competition format.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RulesPage,
});

/* ------------------------------------------------------------------ */
/* placeholder rulebook data — replace with real governance content.  */
/* Version numbers, effective dates and PDF URLs are all placeholders.*/
/* ------------------------------------------------------------------ */
type RuleBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

type RuleDoc = {
  id: string;
  title: string;
  accent: string;
  version: string;
  effective: string;
  updated: string;
  pdfHref: string;
  blocks: RuleBlock[];
};

const DOCS: RuleDoc[] = [
  {
    id: "judging-criteria",
    title: "Judging Criteria",
    accent: "#FBAF43",
    version: "v0.0 — placeholder",
    effective: "Effective Jan 2026 — placeholder",
    updated: "Last updated — placeholder",
    pdfHref: "#",
    blocks: [
      { type: "p", text: "Placeholder summary text for Judging Criteria — replace with real policy language describing how IYSF-certified judges evaluate a competitive Yogasana routine." },
      { type: "h3", text: "Scoring domains (placeholder)" },
      { type: "ul", items: [
        "Placeholder domain — technical execution of each asana.",
        "Placeholder domain — hold duration and stability.",
        "Placeholder domain — transition quality and sequencing.",
        "Placeholder domain — artistic and presentation elements.",
      ]},
      { type: "h3", text: "Panel composition (placeholder)" },
      { type: "p", text: "Placeholder paragraph — describe judging panel size, chief judge role, and cross-panel deviation rules once confirmed by the governance committee." },
    ],
  },
  {
    id: "athlete-eligibility",
    title: "Athlete Eligibility",
    accent: "#4898D3",
    version: "v0.0 — placeholder",
    effective: "Effective Jan 2026 — placeholder",
    updated: "Last updated — placeholder",
    pdfHref: "#",
    blocks: [
      { type: "p", text: "Placeholder summary text for Athlete Eligibility — replace with real policy language covering who may compete under IYSF sanction." },
      { type: "h3", text: "Categories (placeholder)" },
      { type: "ul", items: [
        "Placeholder — age category framework, to be confirmed.",
        "Placeholder — national federation membership requirement.",
        "Placeholder — certification prerequisites for international events.",
      ]},
      { type: "h3", text: "Registration & licensing (placeholder)" },
      { type: "p", text: "Placeholder paragraph — describe the athlete licensing pathway, medical clearance and transfer of national allegiance once finalized." },
    ],
  },
  {
    id: "anti-doping",
    title: "Anti-Doping Policy",
    accent: "#EA088C",
    version: "v0.0 — placeholder",
    effective: "Effective Jan 2026 — placeholder",
    updated: "Last updated — placeholder",
    pdfHref: "#",
    blocks: [
      { type: "p", text: "Placeholder summary text for the Anti-Doping Policy — replace with real policy language aligned with the applicable international anti-doping standards." },
      { type: "h3", text: "Scope (placeholder)" },
      { type: "ul", items: [
        "Placeholder — testing pool and event-day controls.",
        "Placeholder — therapeutic use exemption process.",
        "Placeholder — results management and athlete rights.",
      ]},
      { type: "h3", text: "Sanctions (placeholder)" },
      { type: "p", text: "Placeholder paragraph — sanction framework to be published alongside the confirmed policy. No specific durations or thresholds are asserted here." },
    ],
  },
  {
    id: "code-of-conduct",
    title: "Code of Conduct",
    accent: "#16264A",
    version: "v0.0 — placeholder",
    effective: "Effective Jan 2026 — placeholder",
    updated: "Last updated — placeholder",
    pdfHref: "#",
    blocks: [
      { type: "p", text: "Placeholder summary text for the Code of Conduct — replace with real policy language governing behavior of athletes, coaches, judges and officials." },
      { type: "h3", text: "Core principles (placeholder)" },
      { type: "ul", items: [
        "Placeholder — respect for competitors, officials and hosts.",
        "Placeholder — safeguarding of minors and vulnerable participants.",
        "Placeholder — media, social platform and sponsorship conduct.",
      ]},
      { type: "h3", text: "Reporting (placeholder)" },
      { type: "p", text: "Placeholder paragraph — describe confidential reporting channels and the independent ethics review pathway once operational." },
    ],
  },
  {
    id: "competition-format",
    title: "Competition Format",
    accent: "#575757",
    version: "v0.0 — placeholder",
    effective: "Effective Jan 2026 — placeholder",
    updated: "Last updated — placeholder",
    pdfHref: "#",
    blocks: [
      { type: "p", text: "Placeholder summary text for Competition Format — replace with real policy language covering event structure at IYSF-sanctioned competitions." },
      { type: "h3", text: "Rounds & progression (placeholder)" },
      { type: "ul", items: [
        "Placeholder — qualification, semi-final and final structure.",
        "Placeholder — compulsory and optional routine components.",
        "Placeholder — tie-break resolution methodology.",
      ]},
      { type: "h3", text: "Timing & floor (placeholder)" },
      { type: "p", text: "Placeholder paragraph — floor dimensions, routine timing and equipment specifications to be published in the confirmed format document." },
    ],
  },
];

function blocksToPlainText(blocks: RuleBlock[]): string {
  return blocks.map((b) => (b.type === "ul" ? b.items.join(" ") : b.text)).join(" ");
}

function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${escaped})`, "ig");
  const parts = text.split(re);
  return parts.map((p, i) =>
    p.toLowerCase() === q.toLowerCase() ? (
      <mark key={i} className="rounded-[2px] px-0.5" style={{ background: "#FBAF4340", color: "#14181F" }}>
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

function RulesPage() {
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeId, setActiveId] = useState(DOCS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const q = query.trim().toLowerCase();

  const matchesById = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const d of DOCS) {
      if (!q) {
        map[d.id] = true;
      } else {
        const hay = (d.title + " " + blocksToPlainText(d.blocks)).toLowerCase();
        map[d.id] = hay.includes(q);
      }
    }
    return map;
  }, [q]);

  const matchCount = Object.values(matchesById).filter(Boolean).length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToDoc = (id: string) => {
    setActiveId(id);
    setMobileNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-dvh bg-white" style={{ fontFamily: "var(--font-sans)", color: "#14181F" }}>
      <Nav />

      <main id="rules-main">
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-16">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#4898D3" }}>
              Governance
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ fontFamily: "var(--font-display)", color: "#14181F" }}>
              Rules &amp; Regulations
            </h1>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-[#575757]">
              The official rulebook governing competitive Yogasana under IYSF — published in five documents, updated as governance evolves.
            </p>

            <div className="mt-6 max-w-[560px]">
              <label htmlFor="rules-search" className="sr-only">Search rulebook content</label>
              <div className="relative">
                <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#575757]" aria-hidden />
                <input
                  id="rules-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search across all rule documents…"
                  className="w-full rounded-md border border-black/15 bg-white py-2.5 pl-10 pr-3 text-sm text-[#14181F] placeholder:text-[#575757] focus:border-[#4898D3] focus:outline-none focus:ring-2 focus:ring-[#4898D3]/30"
                />
              </div>
              <div aria-live="polite" className="mt-2 text-xs text-[#575757]" style={{ fontFamily: "var(--font-mono)" }}>
                {q ? `${matchCount} of ${DOCS.length} documents match "${query}"` : "\u00a0"}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-expanded={mobileNavOpen}
              aria-controls="rules-toc-mobile"
              className="mt-6 flex w-full items-center justify-between rounded-md border border-black/15 bg-white px-4 py-3 text-sm font-medium text-[#14181F]"
            >
              <span>Contents — {DOCS.find((d) => d.id === activeId)?.title}</span>
              {mobileNavOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            {mobileNavOpen && (
              <nav id="rules-toc-mobile" aria-label="Rulebook contents" className="mt-2 rounded-md border border-black/10 bg-white p-2">
                <ul>
                  {DOCS.map((d) => (
                    <li key={d.id}>
                      <button
                        onClick={() => scrollToDoc(d.id)}
                        className={`flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm ${activeId === d.id ? "bg-black/5 font-semibold" : "hover:bg-black/[0.03]"} ${matchesById[d.id] ? "" : "opacity-40"}`}
                        style={{ borderLeft: `3px solid ${activeId === d.id ? d.accent : "transparent"}` }}
                      >
                        <span>{d.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div className="grid gap-10 py-10 md:grid-cols-[240px_1fr] md:gap-12 md:py-14">
            <aside className="hidden md:block">
              <nav aria-label="Rulebook contents" className="sticky top-24">
                <div className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#575757" }}>
                  Contents
                </div>
                <ul className="space-y-0.5">
                  {DOCS.map((d) => {
                    const isActive = activeId === d.id;
                    const dimmed = q && !matchesById[d.id];
                    return (
                      <li key={d.id}>
                        <button
                          onClick={() => scrollToDoc(d.id)}
                          className={`flex w-full items-center gap-2 rounded-r px-3 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4898D3]/40 ${isActive ? "bg-black/[0.04] font-semibold text-[#14181F]" : "text-[#14181F]/85 hover:bg-black/[0.03]"} ${dimmed ? "opacity-40" : ""}`}
                          style={{ borderLeft: `3px solid ${isActive ? d.accent : "transparent"}` }}
                          aria-current={isActive ? "true" : undefined}
                        >
                          {d.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            <div className="min-w-0">
              {q && matchCount === 0 ? (
                <div className="rounded-md border border-black/10 bg-[#FAFAFA] p-8 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#575757" }}>
                    No matches
                  </div>
                  <p className="mt-2 text-sm text-[#14181F]">
                    No rule content matches “{query}”. Try a shorter or different keyword.
                  </p>
                  <button onClick={() => setQuery("")} className="mt-4 rounded-md border border-black/15 px-3 py-1.5 text-xs font-medium hover:bg-black/5">
                    Clear search
                  </button>
                </div>
              ) : (
                <div className="space-y-16">
                  {DOCS.map((d) => {
                    const isMatch = matchesById[d.id];
                    if (q && !isMatch) return null;
                    return (
                      <section
                        key={d.id}
                        id={d.id}
                        ref={(el) => { sectionRefs.current[d.id] = el; }}
                        aria-labelledby={`${d.id}-title`}
                        className="scroll-mt-24"
                      >
                        <div
                          className="mb-1 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em]"
                          style={{ background: `${d.accent}1A`, color: d.accent === "#FBAF43" ? "#3A2400" : d.accent }}
                        >
                          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: d.accent }} aria-hidden />
                          Document
                        </div>
                        <h2
                          id={`${d.id}-title`}
                          className="mt-2 text-2xl font-extrabold tracking-tight md:text-[26px]"
                          style={{ fontFamily: "var(--font-display)", color: "#14181F" }}
                        >
                          {highlight(d.title, query)}
                        </h2>
                        <div
                          className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[#575757]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          <span>{d.version}</span>
                          <span aria-hidden>·</span>
                          <span>{d.effective}</span>
                          <span aria-hidden>·</span>
                          <span>{d.updated}</span>
                        </div>

                        <div className="mt-4">
                          {/* placeholder PDF link — replace with real document URL */}
                          <a
                            href={d.pdfHref}
                            className="inline-flex items-center gap-2 rounded-md border border-black/15 bg-white px-3.5 py-2 text-sm font-medium text-[#14181F] transition-colors hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4898D3]/40"
                          >
                            <FileDown size={15} style={{ color: d.accent }} aria-hidden />
                            <span>Download {d.title} PDF</span>
                            <span className="text-[10.5px] uppercase tracking-[0.16em] text-[#575757]" style={{ fontFamily: "var(--font-mono)" }}>
                              placeholder
                            </span>
                          </a>
                        </div>

                        {/* placeholder rule content — replace with real policy text */}
                        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#14181F]/90">
                          {d.blocks.map((b, i) => {
                            if (b.type === "p") return <p key={i}>{highlight(b.text, query)}</p>;
                            if (b.type === "h3")
                              return (
                                <h3 key={i} className="pt-2 text-[15px] font-semibold text-[#14181F]" style={{ fontFamily: "var(--font-display)" }}>
                                  {highlight(b.text, query)}
                                </h3>
                              );
                            return (
                              <ul key={i} className="ml-5 list-disc space-y-1.5 marker:text-[#575757]">
                                {b.items.map((it, j) => (
                                  <li key={j}>{highlight(it, query)}</li>
                                ))}
                              </ul>
                            );
                          })}
                        </div>
                      </section>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
