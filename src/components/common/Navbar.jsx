import React from "react";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav style={{"padding":"10px","display":"flex", "justifyContent": "flex-end", "background":"red"}}>
      {/* <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link> */}
      <ul style={{"padding":"10px","display":"flex", "justifyContent": "flex-end", "color":"yellow"}}>

      <NavItem to="/" nav="Home" icon="bx bx-tachometer" />
      <NavItem to="/cart" nav="Cart" icon="bx bx-tachometer" />
      <NavItem to="/menu" nav="Menu" icon="bx bx-tachometer" />
      </ul>
    </nav>
  );
}
