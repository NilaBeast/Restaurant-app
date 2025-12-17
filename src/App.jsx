import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}