import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CalendarClock, CheckCircle2, MailOpen, XCircle } from "lucide-react";

import { apiClient } from "@/api/apiClient";

import "react-toastify/dist/ReactToastify.css";

type InvitationInfo = {
  id: string;
  token: string;
  email: string;
  inviterName: string;
  projectName?: string;
  projectSlug?: string;
  boardName?: string;
  boardSlug?: string;
  roleName?: string;
  expiresAt: string;
  type: "project" | "board";
};

export function InvitationActionPage() {
  const { token = "" } = useParams();
  const navigate = useNavigate();

  const [loadingInfo, setLoadingInfo] = useState(true);
  const [info, setInfo] = useState<InvitationInfo | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [acting, setActing] = useState<"accept" | "reject" | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setLoadingInfo(true);
      setErrorMessage("");
      try {
        const response = await apiClient.get(`/invites/${token}`);
        if (!mounted) {
          return;
        }
        setInfo(response?.data?.data ?? null);
      } catch (error: any) {
        if (!mounted) {
          return;
        }
        const message = error?.response?.data?.message || "Unable to load invitation details";
        setErrorMessage(message);
      } finally {
        if (mounted) {
          setLoadingInfo(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [token]);

  async function handleAction(action: "accept" | "reject") {
    if (!token) {
      return;
    }

    setActing(action);
    try {
      await apiClient.post(`/invites/${token}/${action}`);
      toast.success(action === "accept" ? "Invitation accepted" : "Invitation rejected");

      const destination = info?.boardSlug
        ? `/boards/${info.boardSlug}`
        : info?.projectSlug
          ? `/projects/${info.projectSlug}`
          : "/dashboard";

      navigate(destination, { replace: true });
    } catch (error: any) {
      const message = error?.response?.data?.message || `Unable to ${action} invitation`;
      toast.error(message);
    } finally {
      setActing(null);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="relative flex min-h-screen items-center justify-center px-6 py-10">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <section className="surface-glass relative z-10 w-full max-w-[620px] p-8 md:p-10">
          {loadingInfo ? (
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Loading invitation...
            </div>
          ) : errorMessage ? (
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold text-slate-50">Invitation not available</h1>
              <p className="rounded-xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {errorMessage}
              </p>
            </div>
          ) : info ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-slate-50">You're invited</h1>
                <p className="mt-2 text-sm text-slate-300">
                  {info.inviterName} invited you to join this {info.type}.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/12 bg-slate-900/65 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Project</p>
                  <p className="mt-1 text-base font-medium text-slate-100">{info.projectName || "-"}</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-slate-900/65 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Board</p>
                  <p className="mt-1 text-base font-medium text-slate-100">{info.boardName || "-"}</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-slate-900/65 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Role</p>
                  <p className="mt-1 text-base font-medium text-slate-100">{info.roleName || "Member"}</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-slate-900/65 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Invite email</p>
                  <p className="mt-1 flex items-center gap-2 text-base font-medium text-slate-100">
                    <MailOpen className="h-4 w-4 text-blue-200" />
                    {info.email}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-lg border border-amber-300/25 bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
                <CalendarClock className="h-4 w-4" />
                Expires at {new Date(info.expiresAt).toLocaleString()}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  onClick={() => handleAction("accept")}
                  disabled={acting !== null}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-500/20 px-4 py-2.5 text-sm font-semibold text-emerald-100 transition-colors hover:bg-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {acting === "accept" ? "Accepting..." : "Accept invitation"}
                </button>
                <button
                  onClick={() => handleAction("reject")}
                  disabled={acting !== null}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-rose-300/35 bg-rose-500/20 px-4 py-2.5 text-sm font-semibold text-rose-100 transition-colors hover:bg-rose-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <XCircle className="h-4 w-4" />
                  {acting === "reject" ? "Rejecting..." : "Reject invitation"}
                </button>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
}
