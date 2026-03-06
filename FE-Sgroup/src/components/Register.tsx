import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Toaster } from "sonner";
import { apiClient } from "@/api/apiClient";
import { useNavigate } from "react-router-dom";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [openOTPDialog, setOpenOTPDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }
    try {
      setIsSubmitting(true);
      const response = await apiClient.post("/auth/register", {
        name: name,
        email: email,
        password: password,
      });
      console.log(response);
      toast.success("Created account success");
      setOpenOTPDialog(true);
      // navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Created account failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerify() {
    console.log("Verifying OTP:", otp);
    try {
      const response = await apiClient.post("/auth/verify", {
        email: email,
        otp: otp,
      });
      console.log("data verify", response);
      toast.success("OTP verified successfully");

      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");

      setOpenOTPDialog(false);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("OTP verification failed");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="w-[400px] border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <h1 className="font-bold text-2xl text-center text-slate-800 dark:text-slate-100">Create an account</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 text-center">Enter your email below to create your account</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-5">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name:</label>
              <Input
                value={name}
                type="text"
                id="name"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email:</label>
              <Input
                value={email}
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">Password:</label>
              <Input
                value={password}
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password:</label>
              <Input
                value={confirmPassword}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <button
                type="button"
                className="text-slate-800 dark:text-slate-200 font-medium underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => navigate("/login")}
              >
                Login here
              </button>
            </p>

            <Dialog open={openOTPDialog} onOpenChange={setOpenOTPDialog}>
              <DialogTrigger asChild>
                <Button type="submit" className="mt-4 active:scale-95 transition-transform" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  ) : "Create Account"}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] flex flex-col gap-4 items-center">
                <div className="text-lg font-medium">Verify Email</div>
                <div>Please enter the OTP sent to your email</div>
                <InputOTP maxLength={6} onChange={(value) => setOtp(value)}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <Button className="w-[300px]" onClick={handleVerify}>
                  Verify
                </Button>
              </DialogContent>
            </Dialog>
          </form>
        </div>
        <Toaster richColors position="bottom-center" />
      </div>
    </>
  );
}
