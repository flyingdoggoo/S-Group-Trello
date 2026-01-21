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
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="w-[400px] border rounded-2xl p-10">
          <h1 className=" font-bold text-2xl text-center">Create an account</h1>
          <p className="mt-4">Enter your email below to create your account</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="email">Email:</label>
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
              <label htmlFor="password">Password:</label>
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
              <label htmlFor="confirmPassword">Confirm Password:</label>
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

            <p className="mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => navigate("/login")}
              >
                Login here
              </button>
            </p>

            <Dialog open={openOTPDialog} onOpenChange={setOpenOTPDialog}>
              <DialogTrigger asChild>
                <Button type="submit" className="mt-4">
                  Create Account
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
