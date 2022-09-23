import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Performance from "./pages/Performance";
import Referral from "./pages/Referral";
import Traffic from "./pages/Traffic";


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Landing /> } /> */}
        <Route path="/" element={<Navigate replace to="/performance" />} />
        <Route exact path="/performance" element={<Performance />} />
        <Route exact path="/behaviour" element={<Traffic />} />
        <Route exact path="/referral" element={<Referral />} />
        <Route exact path="*" element={<Performance />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
