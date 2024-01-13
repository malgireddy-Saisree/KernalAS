import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import ForgetPassword from "./components/auth/ForgetPassword"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from "./firebase/firebase";
import DashMain from "./components/dashboard/DashMain";
import CreateWorkspace from "./components/dashboard/CreateWorkspace"

import { useEffect } from "react"
import { user } from "./context/atoms"
import ChatWindow from "./containers/ChatWindow";
import ChatPage from "./pages/ChatPage";

export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/dash" element={<DashMain />} />
        <Route path="/chat/:bot_slug" element={<ChatPage />} />

      </Routes>
    </Router>
  )
}