import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios"
export function Login({ gotoRegister, onLoginSuccess }: { gotoRegister: () => void; onLoginSuccess?: (data: any) => void }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            console.log({
                email,
                password,
            })
            const response = await axios.post("http://localhost:8000/auth/login", {
                email,
                password,
            })
            console.log("Login response:", response.data)
            toast.success("Login successful", { autoClose: 5000 })
            if (onLoginSuccess) onLoginSuccess(response.data);
            setEmail("")
            setPassword("")
        } catch (err: any) {
            const message = err?.response?.data?.message || err?.message || 'Unknown error';
            toast.error("Error logging in: " + message, { autoClose: 5000 })
            console.error("Error logging in:", err)
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
                            <Input value={email}
                                onChange={handleChangeEmail}
                                placeholder="Email" type="email" id="email" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password">Password</label>
                            <Input value={password}
                                onChange={handleChangePassword}
                                placeholder="Password" type="password" id="password" />
                        </div>
                        <div className="mt-4 text-sm">
                            <a href="#" onClick={gotoRegister} className="text-blue-500 hover:underline">Don't have an account? Register</a>
                        </div>
                        <Button className="mt-4" type="submit">Login</Button>
                    </form>
                </div>
            </div>
        </>
    )
}