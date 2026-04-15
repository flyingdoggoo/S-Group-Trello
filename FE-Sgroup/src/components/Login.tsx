import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { apiClient, setAccessToken } from "@/api/apiClient";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Lock, Mail, Sparkles, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").trim();
  const isLocalRuntime =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const resolvedApiBaseUrl =
    configuredApiBaseUrl ||
    (isLocalRuntime
      ? "http://localhost:8000"
      : "https://s-group-trello.vercel.app");
  const googleLoginUrl = resolvedApiBaseUrl
    ? `${resolvedApiBaseUrl.replace(/\/+$/g, "")}/auth/google/login`
    : "";
  const redirectTo = new URLSearchParams(location.search).get("redirect") || "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleGoogleLogin() {
    if (!googleLoginUrl) {
      const message = "Google login is not configured. Missing VITE_API_BASE_URL in production.";
      setSubmitError(message);
      toast.error(message);
      return;
    }

    window.location.href = googleLoginUrl;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await apiClient.post("/auth/login", { email, password });
      setAccessToken(response?.data?.data?.accessToken ?? null);
      toast.success("Login success");
      navigate(redirectTo, { replace: true });
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "Login failed";
      setSubmitError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  const showEmailInvalid = Boolean(submitError && !email.trim());
  const showPasswordInvalid = Boolean(submitError && !password.trim());

  return (
    <>
      <ToastContainer />
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-10">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl animate-subtle-glow" />
        <div className="pointer-events-none absolute -bottom-16 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl animate-subtle-glow" />

        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <section className="surface-glass animate-soft-fade-up mx-auto w-full max-w-[460px] p-8 md:p-10">
            <div className="mb-7 flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/35 bg-blue-500/20 text-blue-100">
                <FontAwesomeIcon icon={faTrello} className="text-2xl" />
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50">Welcome back</h1>
              <p className="mt-2 text-sm text-slate-300">
                Sign in to continue planning your team work with clarity.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-200">
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-invalid={showEmailInvalid}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-slate-200">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-blue-300 transition-colors hover:text-blue-200"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    required
                    aria-invalid={showPasswordInvalid}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10"
                  />
                </div>
              </div>

              {submitError && (
                <p className="rounded-xl border border-red-300/25 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  {submitError}
                </p>
              )}

              <Button className="h-11 w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>

              <div className="relative py-1">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/12" />
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-wide text-slate-400">
                  <span className="bg-slate-900/90 px-2">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/14 bg-slate-900/70 text-sm font-medium text-slate-100 transition-all hover:border-blue-300/45 hover:bg-slate-800/90"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                  <path fill="#EA4335" d="M12 10.2v3.9h5.4c-.2 1.2-.9 2.2-1.9 2.9l3.1 2.4c1.8-1.7 2.8-4.2 2.8-7.2 0-.7-.1-1.4-.2-2H12z" />
                  <path fill="#34A853" d="M12 21c2.6 0 4.8-.8 6.4-2.3l-3.1-2.4c-.9.6-2 .9-3.3.9-2.5 0-4.6-1.7-5.4-4l-3.2 2.5C5 18.8 8.2 21 12 21z" />
                  <path fill="#4A90E2" d="M6.6 13.2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2L3.4 6.7C2.7 8.1 2.3 9.6 2.3 11.2s.4 3.1 1.1 4.5l3.2-2.5z" />
                  <path fill="#FBBC05" d="M12 5.1c1.4 0 2.6.5 3.6 1.4l2.7-2.7C16.8 2.3 14.6 1.4 12 1.4c-3.8 0-7 2.2-8.6 5.3l3.2 2.5c.8-2.3 2.9-4.1 5.4-4.1z" />
                </svg>
                Sign in with Google
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-300">
              New here?{" "}
              <Link to="/register" className="font-medium text-blue-300 hover:text-blue-200">
                Create account
              </Link>
            </p>
          </section>

          <aside className="surface-panel relative hidden min-h-[560px] overflow-hidden p-9 lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl animate-subtle-glow" />
            <div className="absolute -left-20 bottom-6 h-52 w-52 rounded-full bg-blue-500/30 blur-3xl animate-subtle-glow" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-slate-900/70 px-3 py-1 text-xs font-medium tracking-wide text-blue-200">
                <Sparkles className="h-3.5 w-3.5" />
                Premium productivity stack
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-50">
                Organize workspaces, boards, and tasks with one calm interface.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
                Built for teams who want focus. Prioritize cards, keep context visible, and move faster with clear project
                structure.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="surface-card p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">Workspaces</p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">08</p>
              </div>
              <div className="surface-card p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">Boards</p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">42</p>
              </div>
              <div className="surface-card col-span-2 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">Live Collaboration</p>
                <p className="mt-2 text-sm text-slate-300">Assign cards, invite members, and track progress in one place.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
