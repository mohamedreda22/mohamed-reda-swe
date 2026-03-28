import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-logo">
        Mohamed<span>.</span>Reda
      </div>
      <div className="footer-copy">
        {t("footer.copy", { year: new Date().getFullYear() })}
      </div>
      <div className="socials">
        <a
          href="https://github.com/mohamedreda22"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/swe-mohamed-reda/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
