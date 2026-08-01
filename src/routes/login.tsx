import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Nav, Footer, IYSF } from "../components/site-chrome";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Log in — IYSF" },
      {
        name: "description",
        content: "Sign in to the IYSF account portal used by federations, judges, coaches and athletes.",
      },
      { property: "og:title", content: "Log in — IYSF" },
      {
        property: "og:description",
        content: "One IYSF account for federations, judges, coaches and athletes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [forgotOpen, setForgotOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // NOTE: authentication is not wired yet — no Supabase / backend call here.
    // This simply routes the visitor into the placeholder dashboard shell.
    void navigate({ to: "/dashboard" });
  }

  function handleResetSubmit(e: FormEvent) {
    e.preventDefault();
    // NOTE: password reset is not wired yet — this only shows a placeholder confirmation.
    setResetSent(true);
  }

  return (
    <div className="min-h-dvh bg-[#FAFAFA]" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />
      <main>
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[440px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: IYSF.blue }}>
              Account
            </div>
            <h1
              className="mt-3 text-[36px] leading-[1.05] md:text-[48px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal, letterSpacing: "-0.02em" }}
            >
              Log in
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-[#575757]">
              Federations, judges, coaches and athletes all sign in with the same IYSF account — your
              role determines what you see once inside.
            </p>

            <div className="mt-8 rounded-lg border border-black/[0.08] bg-white p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="mb-1.5 block text-sm font-semibold text-[#14181F]">
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#14181F] focus:border-[#4298D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/30"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="mb-1.5 block text-sm font-semibold text-[#14181F]">
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#14181F] focus:border-[#4298D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[10px] px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2400]/40"
                  style={{ background: IYSF.orange }}
                >
                  Log in
                </button>
              </form>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setForgotOpen((v) => !v)}
                  aria-expanded={forgotOpen}
                  aria-controls="forgot-panel"
                  className="text-sm font-semibold underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/40"
                  style={{ color: IYSF.blue }}
                >
                  Forgot password?
                </button>
                {forgotOpen && (
                  <div id="forgot-panel" className="mt-3 rounded-md border border-black/[0.08] bg-[#FAFAFA] p-4">
                    {resetSent ? (
                      <p role="status" aria-live="polite" className="text-sm text-[#14181F]">
                        Reset link sent (placeholder) — password recovery isn't connected to an email
                        service yet.
                      </p>
                    ) : (
                      <form onSubmit={handleResetSubmit} className="space-y-3">
                        <div>
                          <label htmlFor="reset-email" className="mb-1.5 block text-sm font-semibold text-[#14181F]">
                            Email for password reset
                          </label>
                          <input
                            id="reset-email"
                            type="email"
                            required
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            className="w-full rounded-md border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#14181F] focus:border-[#4298D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/30"
                          />
                        </div>
                        <button
                          type="submit"
                          className="rounded-[10px] border-2 px-4 py-2 text-sm font-bold transition-colors hover:bg-[rgba(66,152,211,0.08)]"
                          style={{ borderColor: IYSF.blue, color: IYSF.blue }}
                        >
                          Send reset link
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-[#575757]">
              Don't have an account yet?{" "}
              <Link to="/" hash="join" className="font-semibold hover:underline" style={{ color: IYSF.magenta }}>
                Join a federation
              </Link>
            </p>
            <p className="mt-2 text-center text-sm text-[#575757]">
              Looking for a federation, judge or coach instead?{" "}
              <Link to="/directory" className="font-semibold hover:underline" style={{ color: IYSF.blue }}>
                Browse the directory
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
