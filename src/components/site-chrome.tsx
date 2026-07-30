import { useState } from "react";
import { Menu, X, Twitter, Instagram, Youtube, Linkedin, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/iysf-logo.png.asset.json";

/** Crops the IYSF figure mark out of the full lockup image. */
export function IysfLogoMark({ className = "h-10 w-[25px]" }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      <img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        className="absolute left-[-71%] top-[-8.5%] w-[240%] max-w-none"
      />
    </span>
  );
}

export function IysfWordmark({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <IysfLogoMark className={dark ? "h-10 w-[27px] rounded-md bg-white" : "h-10 w-[25px]"} />
      <span
        className="text-[17px] font-extrabold tracking-[0.16em]"
        style={{ color: dark ? "#FFFFFF" : "#414042", fontFamily: "var(--font-display)" }}
      >
        IYSF
      </span>
      <span className="sr-only">International Yogasana Sports Federation</span>
    </span>
  );
}

const LINKS: { label: string; to: string; hash?: string }[] = [
  { label: "Events", to: "/events" },
  { label: "Rules", to: "/rules" },
  { label: "Results", to: "/", hash: "newsroom" },
  { label: "Directory", to: "/directory" },
  { label: "Academy", to: "/academy" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutItems = [
    { label: "Overview", to: "/", hash: "about", desc: "Our mandate and governance" },
    { label: "History", to: "/about/history", desc: "1973 to today — the IYSF story" },
  ];
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-black/[0.07] bg-white/90 backdrop-blur"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:flex md:justify-between md:px-8">
        <Link to="/" className="flex min-w-0 items-center">
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
              className="group relative inline-flex items-center gap-1 text-[14.5px] font-medium text-[#414042] transition-colors hover:text-[#4298D3]"
            >
              About
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-full z-50 w-[260px] pt-3">
                <div className="rounded-xl border border-black/10 bg-white p-2 shadow-[0_18px_40px_-24px_rgba(65,64,66,0.5)]">
                  {aboutItems.map((it) => (
                    <Link
                      key={it.label}
                      to={it.to}
                      hash={it.hash}
                      onClick={() => setAboutOpen(false)}
                      className="block rounded-lg px-3 py-2.5 hover:bg-[#4298D3]/[0.07]"
                    >
                      <div className="text-sm font-semibold text-[#414042]">{it.label}</div>
                      <div className="mt-0.5 text-xs text-[#414042]/60">{it.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="group relative text-[14.5px] font-medium text-[#414042] transition-colors hover:text-[#DE007A]"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#4298D3] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href="#"
            className="hidden text-[14.5px] font-medium text-[#414042] transition-colors hover:text-[#4298D3] md:inline-block"
          >
            Log in
          </a>
          <Link
            to="/"
            hash="join"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: "#4298D3" }}
          >
            Join
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#414042] hover:bg-black/5 md:hidden"
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
              ...LINKS,
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#414042] hover:bg-black/5"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#"
              className="mt-1 rounded-lg border border-[#414042]/15 px-3 py-2.5 text-sm font-medium text-[#414042]"
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
  const cols: { title: string; links: { label: string; to: string; hash?: string }[] }[] = [
    {
      title: "About",
      links: [
        { label: "Overview", to: "/", hash: "about" },
        { label: "Our history", to: "/about/history" },
        { label: "Governance", to: "/rules" },
      ],
    },
    {
      title: "Compete",
      links: [
        { label: "Events", to: "/events" },
        { label: "Rules", to: "/rules" },
        { label: "Results", to: "/", hash: "newsroom" },
      ],
    },
    {
      title: "Network",
      links: [
        { label: "Directory", to: "/directory" },
        { label: "Academy", to: "/academy" },
        { label: "Contact", to: "/", hash: "join" },
      ],
    },
  ];
  return (
    <footer style={{ background: "#414042", color: "rgba(255,255,255,0.72)" }}>
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <IysfWordmark dark />
          <p className="mt-4 max-w-[320px] text-sm leading-relaxed">
            International Yogasana Sports Federation — the global governing body for competitive
            Yogasana.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="IYSF social profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 transition-colors hover:bg-white/10"
              >
                <Icon size={17} color="#4298D3" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <div className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white">
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={l.hash}
                    className="text-sm text-white/75 transition-colors hover:text-[#4298D3]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div
          className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-2 px-5 py-5 text-xs md:flex-row md:items-center md:px-8"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}
        >
          <div>© 2026 International Yogasana Sports Federation. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
