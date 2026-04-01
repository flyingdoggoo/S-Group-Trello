import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { apiClient } from "@/api/apiClient";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";

import { Dialog, DialogContent } from "./ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";

type RegisterField = "name" | "email" | "password" | "confirmPassword";

type RegisterFormValues = Record<RegisterField, string>;
type RegisterFormErrors = Partial<Record<RegisterField, string>>;
type RegisterApiError = {
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTouchedFieldsState(value: boolean): Record<RegisterField, boolean> {
  return {
    name: value,
    email: value,
    password: value,
    confirmPassword: value,
  };
}

function getRegisterFormErrors(values: RegisterFormValues): RegisterFormErrors {
  const errors: RegisterFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();

  if (!trimmedName) {
    errors.name = "Name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (trimmedName.length > 100) {
    errors.name = "Name must be at most 100 characters.";
  }

  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password do not match.";
  }

  return errors;
}

function normalizeErrorMessage(message: string): string {
  const normalized = message.trim();
  const lowerMessage = normalized.toLowerCase();

  if (
    lowerMessage.includes("resources already exist email")
    || (lowerMessage.includes("email") && lowerMessage.includes("exist"))
  ) {
    return "This email is already registered.";
  }

  if (lowerMessage.includes("password") && lowerMessage.includes("too small")) {
    return "Password must be at least 8 characters.";
  }

  if (lowerMessage.includes("invalid email")) {
    return "Please enter a valid email address.";
  }

  if (lowerMessage.includes("invalid otp")) {
    return "OTP is invalid or expired.";
  }

  if (lowerMessage.includes("otp") && lowerMessage.includes("6")) {
    return "OTP must contain 6 digits.";
  }

  return normalized;
}

function extractApiErrorMessage(error: unknown, fallback: string): string {
  if (isAxiosError<RegisterApiError>(error)) {
    const errorMessage = error.response?.data?.message;
    if (typeof errorMessage === "string" && errorMessage.trim()) {
      return normalizeErrorMessage(errorMessage);
    }
  }

  return fallback;
}

function mapServerErrorToField(message: string): RegisterFormErrors {
  const lowerMessage = message.toLowerCase();
  const fieldErrors: RegisterFormErrors = {};

  if (lowerMessage.includes("email")) {
    fieldErrors.email = message;
  }

  if (lowerMessage.includes("password")) {
    fieldErrors.password = message;
  }

  if (lowerMessage.includes("confirm")) {
    fieldErrors.confirmPassword = message;
  }

  if (lowerMessage.includes("name")) {
    fieldErrors.name = message;
  }

  return fieldErrors;
}

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [openOTPDialog, setOpenOTPDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [serverFieldErrors, setServerFieldErrors] = useState<RegisterFormErrors>({});
  const [touchedFields, setTouchedFields] = useState<Record<RegisterField, boolean>>(getTouchedFieldsState(false));

  const formValues: RegisterFormValues = {
    name,
    email,
    password,
    confirmPassword,
  };

  const clientFieldErrors = getRegisterFormErrors(formValues);

  const getVisibleFieldError = (field: RegisterField): string | undefined => {
    if (touchedFields[field] && clientFieldErrors[field]) {
      return clientFieldErrors[field];
    }
    return serverFieldErrors[field];
  };

  const nameError = getVisibleFieldError("name");
  const emailError = getVisibleFieldError("email");
  const passwordError = getVisibleFieldError("password");
  const confirmPasswordError = getVisibleFieldError("confirmPassword");

  const markTouched = (field: RegisterField) => {
    setTouchedFields((prev) => {
      if (prev[field]) {
        return prev;
      }
      return {
        ...prev,
        [field]: true,
      };
    });
  };

  const clearServerErrorByField = (field: RegisterField) => {
    setServerFieldErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const next = { ...prev };
      delete next[field];
      return next;
    });
    setSubmitError("");
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    setServerFieldErrors({});
    setTouchedFields(getTouchedFieldsState(true));

    if (Object.keys(clientFieldErrors).length > 0) {
      toast.error("Please fix the highlighted fields before continuing.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await apiClient.post("/auth/register", {
        name: name.trim(),
        email: email.trim(),
        password,
      });
      const responseMessage = response.data?.data?.message;
      setOtp("");
      setOtpError("");
      setOpenOTPDialog(true);
      if (typeof responseMessage === "string" && responseMessage.trim()) {
        toast.info(responseMessage);
      } else {
        toast.info("OTP has been sent. Please verify your email.");
      }
    } catch (error) {
      const message = extractApiErrorMessage(
        error,
        "Unable to create account. Please try again.",
      );
      setSubmitError(message);
      setServerFieldErrors(mapServerErrorToField(message));
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerify() {
    if (otp.trim().length !== 6) {
      const message = "OTP must contain 6 digits.";
      setOtpError(message);
      toast.error(message);
      return;
    }

    try {
      setIsVerifyingOtp(true);
      setOtpError("");
      await apiClient.post("/auth/verify", {
        email: email.trim(),
        otp: otp.trim(),
      });
      toast.success("Account verified successfully. You can now login.");

      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
      setOtp("");
      setTouchedFields(getTouchedFieldsState(false));
      setServerFieldErrors({});
      setSubmitError("");

      setOpenOTPDialog(false);
      navigate("/login", { replace: true });
    } catch (error) {
      const message = extractApiErrorMessage(error, "OTP verification failed.");
      setOtpError(message);
      toast.error(message);
    } finally {
      setIsVerifyingOtp(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="w-[400px] border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <h1 className="font-bold text-2xl text-center text-slate-800 dark:text-slate-100">Create an account</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 text-center">Enter your email below to create your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name:</label>
              <Input
                value={name}
                type="text"
                id="name"
                name="name"
                aria-invalid={Boolean(nameError)}
                onBlur={() => markTouched("name")}
                onChange={(e) => {
                  setName(e.target.value);
                  markTouched("name");
                  clearServerErrorByField("name");
                }}
                placeholder="Name"
              />
              {nameError && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">{nameError}</p>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email:</label>
              <Input
                value={email}
                type="email"
                id="email"
                name="email"
                aria-invalid={Boolean(emailError)}
                onBlur={() => markTouched("email")}
                onChange={(e) => {
                  setEmail(e.target.value);
                  markTouched("email");
                  clearServerErrorByField("email");
                }}
                placeholder="Email"
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">{emailError}</p>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="text-sm font-medium text-slate-700 dark:text-slate-300">Password:</label>
              <Input
                value={password}
                type="password"
                id="password"
                name="password"
                aria-invalid={Boolean(passwordError)}
                onBlur={() => markTouched("password")}
                onChange={(e) => {
                  setPassword(e.target.value);
                  markTouched("password");
                  clearServerErrorByField("password");
                }}
                placeholder="Password"
              />
              {passwordError && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">{passwordError}</p>
              )}
            </div>

            <div className="mt-4">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password:</label>
              <Input
                value={confirmPassword}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                aria-invalid={Boolean(confirmPasswordError)}
                onBlur={() => markTouched("confirmPassword")}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  markTouched("confirmPassword");
                  clearServerErrorByField("confirmPassword");
                }}
                placeholder="Confirm Password"
              />
              {confirmPasswordError && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">{confirmPasswordError}</p>
              )}
            </div>

            {submitError && (
              <p className="mt-4 rounded-xl border border-red-300/25 bg-red-500/10 px-3 py-2 text-sm text-red-700 dark:text-red-200">
                {submitError}
              </p>
            )}

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

            <Button type="submit" className="mt-4 active:scale-95 transition-transform" disabled={isSubmitting}>
              {isSubmitting ? (
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : "Create Account"}
            </Button>

            <Dialog
              open={openOTPDialog}
              onOpenChange={(isOpen) => {
                setOpenOTPDialog(isOpen);
                if (!isOpen) {
                  setOtp("");
                  setOtpError("");
                }
              }}
            >
              <DialogContent className="sm:max-w-[425px] flex flex-col gap-4 items-center">
                <div className="text-lg font-medium">Verify Email</div>
                <div>Please enter the OTP sent to your email</div>
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => {
                    setOtp(value);
                    if (!value) {
                      setOtpError("");
                    } else if (value.length < 6) {
                      setOtpError("OTP must contain 6 digits.");
                    } else {
                      setOtpError("");
                    }
                  }}
                >
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
                {otpError && (
                  <p className="w-[300px] text-left text-xs text-red-500 dark:text-red-400">{otpError}</p>
                )}
                <Button className="w-[300px]" onClick={handleVerify} disabled={isVerifyingOtp}>
                  {isVerifyingOtp ? "Verifying..." : "Verify"}
                </Button>
              </DialogContent>
            </Dialog>
          </form>
        </div>
      </div>
    </>
  );
}
