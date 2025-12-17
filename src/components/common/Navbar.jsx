import React from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="bg-violet-900 p-4 flex gap-6 6">
      {/* <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link> */}
     

      <NavItem to="/" nav="Home" icon="bx bx-tachometer" className="text-white hover:text-yellow-400" />
      <NavItem to="/cart" nav="Cart" icon="bx bx-tachometer" className="text-white hover:text-yellow-400" />
      <NavItem to="/menu" nav="Menu" icon="bx bx-tachometer" className="text-white hover:text-yellow-400" />
     
    </nav>
  );
}
