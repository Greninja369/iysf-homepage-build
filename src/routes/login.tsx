import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Nav, Footer, IYSF } from "../components/site-chrome";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

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

const ROLES = ["Federation official", "Judge", "Coach", "Athlete", "Supporter"] as const;

const inputClass =
  "w-full rounded-md border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#414042] focus:border-[#4298D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/30";
const labelClass = "mb-1.5 block text-sm font-semibold text-[#414042]";

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [primaryRole, setPrimaryRole] = useState<string>("Athlete");

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [forgotOpen, setForgotOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  // Already signed in? Go straight to the dashboard.
  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) void navigate({ to: "/dashboard", replace: true });
    });
    return () => {
      active = false;
    };
  }, [navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);

    if (mode === "signin") {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (signInError) {
        setError(signInError.message);
        return;
      }
      void navigate({ to: "/dashboard", replace: true });
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: fullName, country, primary_role: primaryRole },
      },
    });
    setBusy(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    if (data.session) {
      void navigate({ to: "/dashboard", replace: true });
      return;
    }
    setNotice("Check your email to confirm your address, then come back and log in.");
  }

  async function handleGoogle() {
    setError(null);
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setBusy(false);
      setError("Google sign-in didn't complete. Please try again.");
      return;
    }
    if (result.redirected) return;
    void navigate({ to: "/dashboard", replace: true });
  }

  async function handleResetSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (resetError) {
      setError(resetError.message);
      return;
    }
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
              {mode === "signin" ? "Log in" : "Create account"}
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-[#414042]">
              Federations, judges, coaches and athletes all sign in with the same IYSF account — your
              role determines what you see once inside.
            </p>

            <div className="mt-8 rounded-lg border border-black/[0.08] bg-white p-6">
              <button
                type="button"
                onClick={handleGoogle}
                disabled={busy}
                className="w-full rounded-[10px] border-2 px-4 py-2.5 text-sm font-bold transition-colors hover:bg-[rgba(66,152,211,0.08)] disabled:opacity-60"
                style={{ borderColor: IYSF.blue, color: IYSF.blue }}
              >
                Continue with Google
              </button>

              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-black/10" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a8a8c]">or</span>
                <span className="h-px flex-1 bg-black/10" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "signup" && (
                  <>
                    <div>
                      <label htmlFor="signup-name" className={labelClass}>
                        Full name
                      </label>
                      <input
                        id="signup-name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="signup-country" className={labelClass}>
                        Country
                      </label>
                      <input
                        id="signup-country"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="signup-role" className={labelClass}>
                        I am a
                      </label>
                      <select
                        id="signup-role"
                        value={primaryRole}
                        onChange={(e) => setPrimaryRole(e.target.value)}
                        className={inputClass}
                      >
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="login-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className={labelClass}>
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    autoComplete={mode === "signin" ? "current-password" : "new-password"}
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClass}
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm font-semibold" style={{ color: IYSF.magenta }}>
                    {error}
                  </p>
                )}
                {notice && (
                  <p role="status" aria-live="polite" className="text-sm text-[#414042]">
                    {notice}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-[10px] px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A2400]/40"
                  style={{ background: IYSF.orange }}
                >
                  {busy ? "Please wait…" : mode === "signin" ? "Log in" : "Create account"}
                </button>
              </form>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMode((m) => (m === "signin" ? "signup" : "signin"));
                    setError(null);
                    setNotice(null);
                  }}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: IYSF.magenta }}
                >
                  {mode === "signin" ? "Create an account" : "I already have an account"}
                </button>

                {mode === "signin" && (
                  <button
                    type="button"
                    onClick={() => setForgotOpen((v) => !v)}
                    aria-expanded={forgotOpen}
                    aria-controls="forgot-panel"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: IYSF.blue }}
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              {forgotOpen && mode === "signin" && (
                <div id="forgot-panel" className="mt-3 rounded-md border border-black/[0.08] bg-[#FAFAFA] p-4">
                  {resetSent ? (
                    <p role="status" aria-live="polite" className="text-sm text-[#414042]">
                      We've emailed you a password reset link. Open it to choose a new password.
                    </p>
                  ) : (
                    <form onSubmit={handleResetSubmit} className="space-y-3">
                      <div>
                        <label htmlFor="reset-email" className={labelClass}>
                          Email for password reset
                        </label>
                        <input
                          id="reset-email"
                          type="email"
                          required
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          className={inputClass}
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

            <p className="mt-6 text-center text-sm text-[#414042]">
              Representing a federation?{" "}
              <Link to="/" hash="join" className="font-semibold hover:underline" style={{ color: IYSF.magenta }}>
                Apply to join IYSF
              </Link>
            </p>
            <p className="mt-2 text-center text-sm text-[#414042]">
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
