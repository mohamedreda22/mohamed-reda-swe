import React from "react";
import { useTranslation } from "react-i18next";

const Contact = ({ handleSubmit }) => {
  const { t } = useTranslation();

  return (
    <div className="contact-bg" id="contact">
      <div className="section-wrap">
        <div className="section-eyebrow">{t("contact.eyebrow")}</div>
        <h2 className="section-heading">{t("contact.heading")}</h2>
        <div className="contact-grid">
          <div className="contact-left">
            <p>
              {t("contact.text")}
            </p>
            <div className="contact-links">
              <a href="mailto:mohamedreda.dev@gmail.com" className="contact-item">
                <div className="contact-icon">✉️</div>
                mohamedreda.dev@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/swe-mohamed-reda/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">💼</div>
                linkedin.com/in/swe-mohamed-reda
              </a>
              <a
                href="https://github.com/mohamedreda22"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">🐙</div>
                github.com/mohamedreda22
              </a>
              <a
                href="https://wa.me/201013201998"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">📱</div>
                WhatsApp: +20 101 320 1998
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={t("contact.placeholder_name")} required />
            <input type="email" name="email" placeholder={t("contact.placeholder_email")} required />
            <textarea name="message" placeholder={t("contact.placeholder_message")} required />
            <button
              type="submit"
              className="btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              {t("contact.send_button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
