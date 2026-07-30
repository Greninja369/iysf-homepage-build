import { useState } from "react";
import { Menu, X, Twitter, Instagram, Youtube, Linkedin, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

/* placeholder pose mark — replace with final IYSF logo SVG when supplied */
export function IysfLogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-label="IYSF logo mark: figure with raised arms"
      role="img"
    >
      <circle cx="24" cy="8" r="3.2" fill="#14181F" />
      <line x1="24" y1="12" x2="24" y2="30" stroke="#14181F" strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="14" x2="10" y2="2" stroke="#4898D3" strokeWidth="3.2" strokeLinecap="round" />
      <line x1="24" y1="14" x2="38" y2="2" stroke="#FBAF43" strokeWidth="3.2" strokeLinecap="round" />
      <line x1="24" y1="30" x2="17" y2="44" stroke="#14181F" strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="30" x2="31" y2="44" stroke="#14181F" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="19" r="2.2" fill="#EA088C" />
    </svg>
  );
}

export function IysfWordmark() {
  return (
    <div className="flex items-center gap-2">
      <IysfLogoMark className="h-8 w-8" />
      <span
        className="text-[15px] font-bold tracking-[0.14em]"
        style={{ color: "#575757", fontFamily: "var(--font-display)" }}
      >
        IYSF
      </span>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutItems: { label: string; to: string; hash?: string; desc: string }[] = [
    { label: "Overview", to: "/", hash: "about", desc: "Our mandate and governance" },
    { label: "History", to: "/about/history", desc: "1973 to today — the IYSF story" },
  ];
  const links: { label: string; to: string; hash?: string }[] = [
    { label: "Events", to: "/events" },
    { label: "Rules", to: "/rules" },
    { label: "Results", to: "/", hash: "news" },
    { label: "Directory", to: "/directory" },
    { label: "Academy", to: "/academy" },
  ];
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/85 backdrop-blur"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3.5 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <IysfWordmark />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              onClick={() => setAboutOpen((v) => !v)}
              className="group relative inline-flex items-center gap-1 text-sm font-medium text-[#14181F] transition-colors hover:text-[#4898D3]"
            >
              About
              <ChevronDown size={14} aria-hidden="true" />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#4898D3] transition-all duration-300 group-hover:w-[calc(100%-18px)]" />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-full z-50 w-[260px] pt-3">
                <div className="rounded-md border border-black/10 bg-white p-2 shadow-[0_18px_40px_-24px_rgba(20,24,31,0.5)]">
                  {aboutItems.map((it) => (
                    <Link
                      key={it.label}
                      to={it.to}
                      hash={it.hash}
                      onClick={() => setAboutOpen(false)}
                      className="block rounded-md px-3 py-2.5 hover:bg-black/[0.04]"
                    >
                      <div className="text-sm font-semibold text-[#14181F]">{it.label}</div>
                      <div className="mt-0.5 text-xs text-[#575757]">{it.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="group relative text-sm font-medium text-[#14181F] transition-colors hover:text-[#4898D3]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#4898D3] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden rounded-md border border-[#14181F]/15 px-3.5 py-2 text-sm font-medium text-[#14181F] transition-colors hover:bg-[#14181F]/5 md:inline-block"
          >
            Log in
          </a>
          <Link
            to="/"
            hash="join"
            className="hidden rounded-md px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:brightness-95 md:inline-block"
            style={{ background: "#FBAF43", color: "#3A2400" }}
          >
            Join a federation
          </Link>
          <Link
            to="/"
            hash="join"
            className="rounded-md px-3.5 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:brightness-95 md:hidden"
            style={{ background: "#FBAF43", color: "#3A2400" }}
          >
            Join
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#14181F] hover:bg-black/5 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto flex max-w-[1240px] flex-col gap-1 px-5 py-3">
            {[
              { label: "About", to: "/", hash: "about" },
              { label: "Our history", to: "/about/history" },
              ...links,
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-[#14181F] hover:bg-black/5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#"
              className="mt-1 rounded-md border border-[#14181F]/15 px-3 py-2.5 text-sm font-medium text-[#14181F]"
            >
              Log in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const cols = [
    { title: "Federation", links: ["About IYSF", "Governance", "Member federations", "Rulebook"] },
    { title: "Compete", links: ["Championships", "Results", "Athlete certification", "Judging"] },
    { title: "Connect", links: ["Newsroom", "Academy", "Contact", "Careers"] },
  ];
  return (
    <footer style={{ background: "#0D1830", color: "#B7C4DA" }}>
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <IysfLogoMark className="h-9 w-9" />
            <span
              className="text-[15px] font-bold tracking-[0.14em]"
              style={{ color: "#fff", fontFamily: "var(--font-display)" }}
            >
              IYSF
            </span>
          </div>
          <p className="mt-4 max-w-[320px] text-sm leading-relaxed">
            International Yoga Sports Federation — the governing body for competitive Yogasana.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 transition-colors hover:bg-white/10"
              >
                <Icon size={16} color="#fff" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <div
              className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#FBAF43" }}
            >
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/80 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div
          className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-2 px-5 py-5 text-xs md:flex-row md:items-center md:px-8"
          style={{ color: "#B7C4DA", fontFamily: "var(--font-mono)" }}
        >
          <div>© placeholder — International Yoga Sports Federation. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}