import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Nav, Footer, IYSF } from "../components/site-chrome";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  component: ResetPasswordPage,
  head: () => ({
    meta: [
      { title: "Set a new password — IYSF" },
      {
        name: "description",
        content: "Choose a new password for your IYSF account after requesting a reset link.",
      },
      { property: "og:title", content: "Set a new password — IYSF" },
      {
        property: "og:description",
        content: "Choose a new password for your IYSF account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("The two passwords don't match.");
      return;
    }
    setBusy(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (updateError) {
      setError(updateError.message);
      return;
    }
    setDone(true);
    setTimeout(() => void navigate({ to: "/dashboard", replace: true }), 1200);
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
              New password
            </h1>

            <div className="mt-8 rounded-lg border border-black/[0.08] bg-white p-6">
              {done ? (
                <p role="status" aria-live="polite" className="text-sm text-[#414042]">
                  Your password has been updated. Taking you to your dashboard…
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="new-password" className="mb-1.5 block text-sm font-semibold text-[#414042]">
                      New password
                    </label>
                    <input
                      id="new-password"
                      type="password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-md border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#414042] focus:border-[#4298D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-semibold text-[#414042]">
                      Confirm new password
                    </label>
                    <input
                      id="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      className="w-full rounded-md border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[#414042] focus:border-[#4298D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4298D3]/30"
                    />
                  </div>

                  {!ready && (
                    <p className="text-sm text-[#414042]">
                      Open this page from the reset link in your email, otherwise the change can't be saved.
                    </p>
                  )}
                  {error && (
                    <p role="alert" className="text-sm font-semibold" style={{ color: IYSF.magenta }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={busy || !ready}
                    className="w-full rounded-[10px] px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: IYSF.orange }}
                  >
                    {busy ? "Saving…" : "Save new password"}
                  </button>
                </form>
              )}
            </div>

            <p className="mt-6 text-center text-sm text-[#414042]">
              <Link to="/login" className="font-semibold hover:underline" style={{ color: IYSF.blue }}>
                Back to log in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
