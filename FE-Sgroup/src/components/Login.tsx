import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      });
      console.log("Login response data:", response.data);
      localStorage.setItem("accessToken", response.data.data.accessToken);
      document.cookie = `accessToken=${response.data.data.accessToken}; path=/; max-age=${7 * 24 * 60 * 60}`;

      toast.success("Login success");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="w-[400px]">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <p>Please fill out the form below to log in.</p>
          <form onSubmit={handleSubmit} action="">
            <div className="mt-4">
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
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
            <p className="mt-4">
              Don't have an account?{" "}
              <Link to="/register">
                <button type="button" className="text-blue-500 underline">
                  Register here
                </button>
              </Link>
            </p>

            <Button className="mt-4" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
