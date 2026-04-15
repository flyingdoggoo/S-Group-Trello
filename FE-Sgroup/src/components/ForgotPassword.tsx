import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, KeyRound, Mail, ShieldCheck } from "lucide-react";

import { apiClient } from "@/api/apiClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import "react-toastify/dist/ReactToastify.css";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState<"request" | "reset">("request");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);

  async function handleSendOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendingOtp(true);

    try {
      const response = await apiClient.post("/auth/forgot-password/send-otp", {
        email: email.trim(),
      });
      toast.success(response?.data?.message || "OTP sent to your email");
      setStep("reset");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to send OTP";
      toast.error(message);
    } finally {
      setSendingOtp(false);
    }
  }

  async function handleResetPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Password confirmation does not match");
      return;
    }

    setResettingPassword(true);
    try {
      const response = await apiClient.post("/auth/forgot-password/reset", {
        email: email.trim(),
        otp: otp.trim(),
        newPassword,
      });

      toast.success(response?.data?.message || "Password has been reset");
      navigate("/login", { replace: true });
    } catch (error: any) {
      const message = error?.response?.data?.message || "Unable to reset password";
      toast.error(message);
    } finally {
      setResettingPassword(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="relative flex min-h-screen items-center justify-center px-6 py-10">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <section className="surface-glass relative z-10 w-full max-w-[460px] p-8 md:p-10">
          <Link to="/login" className="mb-5 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-slate-100">
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>

          <h1 className="text-2xl font-semibold text-slate-50">Reset your password</h1>
          <p className="mt-2 text-sm text-slate-300">
            {step === "request"
              ? "Enter your account email and we will send a reset OTP."
              : "Enter the OTP from your email and choose a new password."}
          </p>

          {step === "request" ? (
            <form className="mt-6 space-y-4" onSubmit={handleSendOtp}>
              <div className="space-y-2">
                <label htmlFor="forgot-email" className="text-sm font-medium text-slate-200">
                  Account email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="forgot-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <Button type="submit" className="h-11 w-full" disabled={sendingOtp}>
                {sendingOtp ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleResetPassword}>
              <div className="space-y-2">
                <label htmlFor="otp" className="text-sm font-medium text-slate-200">
                  OTP code
                </label>
                <div className="relative">
                  <ShieldCheck className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="otp"
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="pl-10"
                    placeholder="6-digit OTP"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="new-password" className="text-sm font-medium text-slate-200">
                  New password
                </label>
                <div className="relative">
                  <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    id="new-password"
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="pl-10"
                    placeholder="At least 8 characters"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium text-slate-200">
                  Confirm password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Retype your new password"
                />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Button type="button" variant="outline" onClick={() => setStep("request")}>
                  Request new OTP
                </Button>
                <Button type="submit" disabled={resettingPassword}>
                  {resettingPassword ? "Resetting..." : "Reset password"}
                </Button>
              </div>
            </form>
          )}
        </section>
      </div>
    </>
  );
}
