import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";

export default function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
}
