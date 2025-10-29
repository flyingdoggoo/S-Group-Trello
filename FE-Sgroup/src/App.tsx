import "react-toastify/dist/ReactToastify.css";
import {Login} from "./components/Login"
import {Register} from "./components/Register"
import { Dashboard } from "./components/Dashboard"
import { useState } from "react"
import axios from 'axios'
export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  function gotoRegister() {
    setShowLogin(false);
    setShowRegister(true);
    setShowDashboard(false);
  }

  function gotoLogin() {
    setShowLogin(true);
    setShowRegister(false);
    setShowDashboard(false);
  }
  function onLoginSuccess(data: any) {
    const accessToken = data?.data?.accessToken || data?.accessToken;
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    } else {
      console.warn('onLoginSuccess: accessToken not found in response', data);
    }
    setShowLogin(false);
    setShowRegister(false);
    setShowDashboard(true);
  }
  return (
    <div>
      {showLogin && <Login gotoRegister={gotoRegister} onLoginSuccess={onLoginSuccess} />}
      {showRegister && <Register gotoLogin={gotoLogin} />}
      {showDashboard && <Dashboard />}
    </div>
  );
}
