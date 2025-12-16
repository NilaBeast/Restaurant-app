import NavItem from "./NavItem";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link> */}
      <NavItem to="/" nav="Home" icon="bx bx-tachometer" />
      <NavItem to="/cart" nav="Cart" icon="bx bx-tachometer" />
      <NavItem to="/menu" nav="Menu" icon="bx bx-tachometer" />
    </nav>
  );
}
