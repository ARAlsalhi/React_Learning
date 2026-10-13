import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Places from "./pages/Places";
import NfcTags from "./pages/NfcTags";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Register from "./pages/Register";

function AppContent() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/register" || location.pathname === "/login";

  return (
    <div>
      {!isAuthPage && <Sidebar />}

      <main className={isAuthPage ? "" : "main-content"}>
        {!isAuthPage && <Topbar />}

        <Routes>
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Home />} />

          <Route path="/games" element={<Games />} />

          <Route path="/places" element={<Places />} />

          <Route path="/nfc-tags" element={<NfcTags />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
