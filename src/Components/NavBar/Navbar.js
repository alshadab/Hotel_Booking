import React from "react";
import "./NavBar.css";
const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navContainer">
        <span class="logo">FutuTech Booking</span>
        <div class="navItems">
          <button class="navButton">Register</button>
          <button class="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
