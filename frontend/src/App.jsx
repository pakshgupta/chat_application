import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home.jsx"));
const Chat=lazy(()=>import("./pages/Chat.jsx"))
const Groups=lazy(()=>import("./pages/Groups.jsx"))
const Login=lazy(()=>import("./pages/Login.jsx"))
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat/>} />
        <Route path="/groups" element={<Groups/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
