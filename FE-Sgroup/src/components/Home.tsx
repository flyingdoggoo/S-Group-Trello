// import "react-toastify/dist/ReactToastify.css";
// import { Login } from "./Login"
// import { Register } from "./Register"
// import { Dashboard } from "./Dashboard"
// import { useState } from "react"
// import axios from 'axios'
// export default function Home() {
//     const [showLogin, setShowLogin] = useState(true);
//     const [showRegister, setShowRegister] = useState(false);
//     const accessToken = localStorage.getItem("accessToken");
//     function gotoRegister() {
//         setShowLogin(false);
//         setShowRegister(true);
//     }
//     function gotoLogin() {
//         setShowLogin(true);
//         setShowRegister(false);
//     }
//     function onLoginSuccess(data: any) {
//         const accessToken = data?.data?.accessToken || data?.accessToken;
//         if (accessToken) {
//             localStorage.setItem("accessToken", accessToken);
//             axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
//         } else {
//             console.warn('onLoginSuccess: accessToken not found in response', data);
//         }
//     setShowLogin(false);
//     setShowRegister(false);
//     }
//     return (
//         <div>
//             {accessToken != null ? <Dashboard /> :
//             <>
//                 {showLogin && <Login gotoRegister={gotoRegister} onLoginSuccess={onLoginSuccess} />}
//                 {showRegister && <Register gotoLogin={gotoLogin} />}
//             </>}
//         </div>
//     );
// }
