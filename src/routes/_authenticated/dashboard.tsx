import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Nav, Footer, IYSF } from "../../components/site-chrome";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — IYSF" },
      {
        name: "description",
        content: "Your IYSF account area for federations, judges, coaches and athletes.",
      },
      { property: "og:title", content: "Dashboard — IYSF" },
      {
        property: "og:description",
        content: "Your IYSF account area for federations, judges, coaches and athletes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const QUICK_LINKS = [
  { label: "Events", desc: "Browse upcoming and past IYSF competitions.", to: "/events" },
  { label: "Results", desc: "Championship results across divisions.", to: "/results" },
  { label: "Rules", desc: "The official Yogasana rulebook.", to: "/rules" },
  { label: "Academy", desc: "Judge and coach training & certification.", to: "/academy" },
] as const;

function DashboardPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      const uid = userData.user?.id;
      if (!uid) return null;
      const { data, error } = await supabase
        .from("profiles")
        .select("full_name, country, primary_role")
        .eq("id", uid)
        .maybeSingle();
      if (error) throw error;
      return { ...data, email: userData.user?.email ?? null };
    },
  });

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    void navigate({ to: "/login", replace: true });
  }

  return (
    <div className="min-h-dvh bg-[#FAFAFA]" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav />
      <main>
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: IYSF.blue }}>
            Account
          </div>
          <h1
            className="mt-3 text-[36px] leading-[1.05] md:text-[60px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: IYSF.charcoal, letterSpacing: "-0.02em" }}
          >
            {profile?.full_name ? `Welcome, ${profile.full_name}` : "Dashboard"}
          </h1>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Email", value: profile?.email ?? "—" },
              { label: "Country", value: profile?.country || "Not set" },
              { label: "Role", value: profile?.primary_role || "Not set" },
            ].map((row) => (
              <div key={row.label} className="rounded-lg border border-black/[0.08] bg-white p-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a8a8c]">{row.label}</dt>
                <dd className="mt-1.5 text-sm font-semibold" style={{ color: IYSF.charcoal }}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="block h-full rounded-lg border border-black/[0.08] bg-white p-6 transition-transform hover:-translate-y-1"
              >
                <h3 className="text-[18px] font-bold" style={{ color: IYSF.charcoal, fontFamily: "var(--font-display)" }}>
                  {l.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#414042]">{l.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/" className="text-sm font-semibold hover:underline" style={{ color: IYSF.blue }}>
              Back to site
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="text-sm font-semibold hover:underline"
              style={{ color: IYSF.magenta }}
            >
              Sign out
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
