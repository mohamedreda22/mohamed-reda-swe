import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({ navLinks, setMenuOpen, profile, toggleProfile }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        Mohamed<span>.</span>Reda
      </a>
      <div className="nav-links">
        {navLinks.map((l) => (
          <a key={l.key} href={`#${l.key.toLowerCase()}`}>
            {l.label}
          </a>
        ))}
        <button
          onClick={toggleProfile}
          className="profile-toggle"
          style={{
            background: "var(--accent)",
            border: "none",
            color: "white",
            padding: "4px 12px",
            borderRadius: "40px",
            fontSize: "11px",
            fontWeight: "600",
            cursor: "pointer",
            marginLeft: "10px",
            transition: "all 0.25s var(--ease)",
            boxShadow: "0 0 15px rgba(224, 23, 92, 0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
        >
          {profile === "engineering" ? "Switch to IT Support" : "Switch to Software Engineer"}
        </button>
        <button
          onClick={toggleLanguage}
          className="lang-toggle"
          style={{
            background: "none",
            border: "1px solid var(--border-card)",
            color: "var(--text-secondary)",
            padding: "4px 10px",
            borderRadius: "40px",
            fontSize: "12px",
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "10px",
            transition: "all 0.25s var(--ease)",
          }}
        >
          {i18n.language === "ar" ? "English" : "عربي"}
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
