import { useState } from "react";
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoSrc from "../assets/iysf-logo.png";

export const IYSF = {
  blue: "#4298D3",
  orange: "#FAAF40",
  magenta: "#DE007A",
  charcoal: "#414042",
  blueWash: "rgba(66,152,211,0.06)",
  blueLine: "rgba(66,152,211,0.28)",
  blueShadow: "0 14px 34px -18px rgba(66,152,211,0.55)",
} as const;

export function IysfWordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={logoSrc}
        alt="IYSF — International Yoga Sports Federation"
        width={40}
        height={40}
        className="h-9 w-auto"
      />
      <span
        className="hidden text-[15px] font-extrabold leading-tight tracking-[0.12em] sm:block"
        style={{ color: light ? "#FFFFFF" : IYSF.charcoal, fontFamily: "var(--font-display)" }}
      >
        IYSF
      </span>
    </span>
  );
}

type Item = { label: string; to: string; hash?: string };

const ABOUT_ITEMS: Item[] = [
  { label: "History", to: "/about/history" },
  { label: "Governance", to: "/about/governance" },
  { label: "Yoga as a Sport", to: "/about/yoga-as-a-sport" },
  { label: "Champions", to: "/about/champions" },
  { label: "Executive Committee", to: "/about/executive-committee" },
  { label: "Athletes' Commission", to: "/about/athletes-commission" },
  { label: "Technical Committee", to: "/about/technical-committee" },
  { label: "International Judges", to: "/about/international-judges" },
  { label: "International Coaches", to: "/about/international-coaches" },
];

const ACADEMY_ITEMS: Item[] = [
  { label: "Overview", to: "/academy" },
  { label: "Training", to: "/academy/training" },
  { label: "Judging", to: "/academy/judging" },
  { label: "Coaching", to: "/academy/coaching" },
];

const COMPETE_ITEMS: Item[] = [
  { label: "Rules", to: "/rules" },
  { label: "Events", to: "/events" },
  { label: "Championship Results", to: "/results" },
  { label: "Directory", to: "/directory" },
];

const TAIL_LINKS: Item[] = [
  { label: "Directory", to: "/directory" },
  { label: "Contact", to: "/contact" },
];

/* Explore / quick-links list, shared by the footer and the homepage
   "Quick links" block so new pages stay discoverable sitewide. */
export const EXPLORE_LINKS: Item[] = [
  { label: "History", to: "/about/history" },
  { label: "Governance", to: "/about/governance" },
  { label: "Rules", to: "/rules" },
  { label: "Events", to: "/events" },
  { label: "Results", to: "/results" },
  { label: "Academy", to: "/academy" },
  { label: "Directory", to: "/directory" },
  { label: "Executive Committee", to: "/about/executive-committee" },
  { label: "Contact", to: "/contact" },
  { label: "Donate", to: "/donate" },
  { label: "Privacy", to: "/privacy" },
  { label: "Join us", to: "/join-us" },
];

function Dropdown({
  label,
  items,
  wide = false,
}: {
  label: string;
  items: Item[];
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="group relative inline-flex items-center gap-1 text-[13px] font-semibold transition-colors"
        style={{ color: IYSF.charcoal }}
      >
        {label}
        <ChevronDown size={13} aria-hidden="true" />
        <span
          className="absolute -bottom-1.5 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-[calc(100%-16px)]"
          style={{ background: IYSF.magenta }}
        />
      </button>
      {open && (
        <div className={`absolute left-0 top-full z-50 pt-4 ${wide ? "w-[430px]" : "w-[230px]"}`}>
          <div
            className="rounded-xl border bg-white p-2 shadow-[0_24px_50px_-26px_rgba(66,152,211,0.7)]"
            style={{ borderColor: IYSF.blueLine }}
          >
            <div className={wide ? "grid grid-cols-2 gap-0.5" : ""}>
              {items.map((it) => (
                <Link
                  key={it.label}
                  to={it.to}
                  hash={it.hash}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[13px] font-medium transition-colors hover:bg-[rgba(66,152,211,0.08)]"
                  style={{ color: IYSF.charcoal }}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur"
      style={{ borderBottom: `1px solid ${IYSF.blueLine}`, fontFamily: "var(--font-sans)" }}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link to="/" aria-label="IYSF home">
          <IysfWordmark />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          <Dropdown label="About" items={ABOUT_ITEMS} wide />
          <Dropdown label="Compete" items={COMPETE_ITEMS} />
          <Dropdown label="Academy" items={ACADEMY_ITEMS} />
          {TAIL_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="group relative text-[13px] font-semibold transition-colors"
              style={{ color: IYSF.charcoal }}
            >
              {l.label}
              <span
                className="absolute -bottom-1.5 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: IYSF.magenta }}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden text-[13px] font-semibold transition-colors hover:opacity-70 lg:inline-block"
            style={{ color: IYSF.charcoal }}
          >
            Log in
          </Link>
          <Link
            to="/donate"
            className="hidden rounded-[10px] border-2 px-3.5 py-1.5 text-[13px] font-bold transition-colors hover:bg-[rgba(66,152,211,0.08)] lg:inline-block"
            style={{ borderColor: IYSF.blue, color: IYSF.blue }}
          >
            Donate
          </Link>
          <Link
            to="/join-us"
            className="rounded-[10px] px-4 py-2 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5"
            style={{ background: IYSF.orange, boxShadow: "0 10px 22px -12px rgba(250,175,64,0.9)" }}
          >
            Join us
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] hover:bg-[rgba(66,152,211,0.08)] xl:hidden"
            style={{ color: IYSF.charcoal }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[70vh] overflow-y-auto bg-white xl:hidden" style={{ borderTop: `1px solid ${IYSF.blueLine}` }}>
          <nav className="mx-auto flex max-w-[1320px] flex-col gap-0.5 px-5 py-3">
            {[...ABOUT_ITEMS, ...COMPETE_ITEMS, ...ACADEMY_ITEMS, ...TAIL_LINKS.slice(1)].map((l) => (
              <Link
                key={`${l.label}-${l.to}`}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-[rgba(66,152,211,0.08)]"
                style={{ color: IYSF.charcoal }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-[rgba(66,152,211,0.08)]"
              style={{ color: IYSF.charcoal }}
            >
              Log in
            </Link>
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-[10px] border-2 px-3 py-2.5 text-center text-sm font-bold"
              style={{ borderColor: IYSF.blue, color: IYSF.blue }}
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer({ minimal = false }: { minimal?: boolean }) {
  const links: Item[] = EXPLORE_LINKS;
  return (
    <footer style={{ background: IYSF.charcoal, color: "#fff", fontFamily: "var(--font-sans)" }}>
      {minimal ? (
        <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-4 px-5 py-10 md:px-8">
          <IysfWordmark light />
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <span
                key={i}
                aria-hidden="true"
                title="Social profile link pending"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/15"
              >
                <Icon size={16} color={IYSF.blue} />
              </span>
            ))}
          </div>
        </div>
      ) : (
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <IysfWordmark light />
          <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-white/70">
            International Yoga Sports Federation — the global governing body for Yogasana sport.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <span
                key={i}
                aria-hidden="true"
                title="Social profile link pending"
                className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/15"
              >
                <Icon size={16} color={IYSF.blue} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-[10.5px] font-bold uppercase tracking-[0.22em]" style={{ color: IYSF.orange }}>
            Explore
          </div>
          <ul className="grid grid-cols-2 gap-y-2.5">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} hash={l.hash} className="text-sm text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 text-[10.5px] font-bold uppercase tracking-[0.22em]" style={{ color: IYSF.orange }}>
            Headquarters
          </div>
          <address className="text-sm not-italic leading-relaxed text-white/80">
            Maison du Sport International
            <br />
            Av de Rhodanie 54
            <br />
            Lausanne, Switzerland
          </address>
        </div>
      </div>
      )}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-5 py-5 text-center text-xs text-white/60 md:px-8">
          © 2026 IYSF
        </div>
      </div>
    </footer>
  );
}


/* ------------------------------------------------------------------ */
/* Breadcrumb — used on every nested page (event detail, federation    */
/* profile, results detail) to mirror the Academy "Academy — Judging"  */
/* pattern and always offer a way back to the parent listing.          */
/* ------------------------------------------------------------------ */
export function Breadcrumb({
  parentLabel,
  parentTo,
  current,
  color = IYSF.blue,
}: {
  parentLabel: string;
  parentTo: string;
  current: string;
  color?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[11px] font-semibold uppercase tracking-[0.22em]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Link to={parentTo} className="hover:underline" style={{ color }}>
        {parentLabel}
      </Link>
      <span aria-hidden="true" style={{ color: "rgba(65,64,66,0.45)" }}>
        {" "}
        —{" "}
      </span>
      <span style={{ color: "rgba(65,64,66,0.7)" }}>{current}</span>
    </nav>
  );
}
