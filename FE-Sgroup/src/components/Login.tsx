import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { apiClient } from "@/api/apiClient";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await apiClient.post("/auth/login", {
        email: email,
        password: password,
      });
      console.log("Login response data:", response.data);
      localStorage.setItem("accessToken", response.data.data.accessToken);
      document.cookie = `accessToken=${response.data.data.accessToken}; path=/`;

      toast.success("Login success");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen w-screen bg-white">
        <div className="w-[400px] border border-neutral-200 rounded-xl p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-center text-black">Login</h1>
          <p className="text-sm text-neutral-500 text-center mt-1">Please fill out the form below to log in.</p>
          <form onSubmit={handleSubmit} action="">
            <div className="mt-5">
              <label htmlFor="email" className="text-sm font-medium text-black">Email</label>
              <Input
                value={email}
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mt-1"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="text-sm font-medium text-black">Password</label>
              <Input
                value={password}
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mt-1"
              />
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Don't have an account?{" "}
              <Link to="/register">
                <button type="button" className="text-black font-medium underline underline-offset-2 hover:opacity-70 transition-opacity">
                  Register here
                </button>
              </Link>
            </p>

            <Button className="mt-5 w-full active:scale-95 transition-transform" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
