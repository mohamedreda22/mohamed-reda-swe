import React from "react";

const Navbar = ({ navLinks, setMenuOpen }) => (
  <nav>
    <a href="#hero" className="nav-logo">
      Mohamed<span>.</span>Reda
    </a>
    <div className="nav-links">
      {navLinks.map((l) => (
        <a key={l} href={`#${l.toLowerCase()}`}>
          {l}
        </a>
      ))}
    </div>
    <button
      className="hamburger"
      onClick={() => setMenuOpen(true)}
      aria-label="Open menu"
    >
      <span />
      <span />
      <span />
    </button>
  </nav>
);

export default Navbar;
