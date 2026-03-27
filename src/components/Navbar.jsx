import React, { useState, useEffect } from "react";

const Navbar = ({ navLinks, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo">
        Mohamed<span>.</span>Reda
      </a>
      <div className="nav-links">
        {navLinks.map((l, i) => (
          <a key={l} href={`#${l.toLowerCase()}`}>
            <span style={{ color: "var(--accent)", marginRight: "4px", fontSize: "12px" }}>
              0{i + 1}.
            </span>
            {l}
          </a>
        ))}
        <a 
          href="mailto:mohamedreda.dev@gmail.com" 
          className="nav-contact-btn"
          style={{
            marginLeft: "12px",
            padding: "10px 20px",
            border: "1px solid var(--accent)",
            borderRadius: "4px",
            color: "var(--accent)",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(100, 255, 218, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
          }}
        >
          Get in Touch
        </a>
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
};

export default Navbar;
