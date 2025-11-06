import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios"
export function Register({ gotoLogin }: { gotoLogin: () => void }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
    function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }
    function handleChangeConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value)
    }
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            console.log({
                email,
                password,
                confirmPassword,
                name,
            })
            await axios.post("http://localhost:8000/auth/register", {
                email,
                password,
                confirmPassword,
                name,
            })
            toast.success("Account created successfully", { autoClose: 5000 })
            setName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            gotoLogin();
        } catch (error) {
            toast.error("Error creating account", { autoClose: 5000 })
            console.error("Error creating account:", error)
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="w-[400px]">
                    <h1 className="text-2xl font-bold text-center">Create Account</h1>
                    <p>Please fill out the form below to create an account.</p>
                    <form onSubmit={handleSubmit} action="">
                        <div className="mt-4">
                            <label htmlFor="username">Name</label>
                            <Input value={name}
                                onChange={handleChangeName}
                                placeholder="Name" type="text" id="username" />
                        </div>
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
                        <div className="mt-4">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Input placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handleChangeConfirmPassword}
                                type="password" id="confirmPassword" />
                        </div>
                        <div className="mt-4 text-sm">
                            <a href="#" onClick={gotoLogin} className="text-blue-500 hover:underline">Already have an account? Login</a>
                        </div>
                        <Button className="mt-4" type="submit">Create Account</Button>
                    </form>
                </div>
            </div>
        </>
    )
}