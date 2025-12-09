import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import AppShell from "../pages/AppShell";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        {/* <div>
          <Link to="/">LandingPage</Link>
          <Link to="/login">LandingPage</Link>
          <Link to="/app/*">LandingPage</Link>
        </div> */}
        <Routes>
          {/* Landing / marketing site */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />

          {/* Main system (everything under /app) */}
          <Route path="/app/*" element={<AppShell />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
