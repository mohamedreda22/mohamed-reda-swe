import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = ({ downloadCV, profile }) => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="#about"
            className="hero-badge anim d1"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            <span className="badge-dot" />
            {t("hero.badge")}
          </a>
          <h1 className="hero-name anim d2">
            Mohamed
            <br />
            <span className="accent">Reda</span>
          </h1>
          <p className="hero-role anim d3">
            {profile === "engineering" ? t("hero.role") : t("hero.role_it")}
          </p>
          <p className="hero-bio anim d3">
            {profile === "engineering" ? t("hero.bio") : t("hero.bio_it")}
          </p>
          <div className="hero-mission anim d3" style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#00d4ff",
                  boxShadow: "0 0 10px rgba(0, 212, 255, 0.45)",
                }}
              ></span>
              <strong>{t("hero.status_label")}</strong> {t("hero.status_value")}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "4px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 10px rgba(224, 23, 92, 0.45)",
                }}
              ></span>
              <strong>{t("hero.mission_label")}</strong> {t("hero.mission_value")}
            </div>
          </div>
          <div className="hero-cta anim d4">
            <button className="btn-primary" onClick={downloadCV}>
              {t("hero.download_cv")}
            </button>
            <a href="#projects" className="btn-ghost">
              {t("hero.explore_projects")}
            </a>
          </div>
          <div className="hero-stats anim d4">
            {profile === "engineering" ? (
              <>
                <div>
                  <div className="stat-num">
                    12<span>+</span>
                  </div>
                  <div className="stat-label">{t("hero.stat_deployments")}</div>
                </div>
                <div>
                  <div className="stat-num">
                    6<span>+</span>
                  </div>
                  <div className="stat-label">{t("hero.stat_institutions")}</div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="stat-num">
                    5<span>+</span>
                  </div>
                  <div className="stat-label">{t("hero.stat_deployments")}</div>
                </div>
                <div>
                  <div className="stat-num">
                    100<span>+</span>
                  </div>
                  <div className="stat-label">Users Supported</div>
                </div>
              </>
            )}
            <div>
              <div className="stat-num">
                100<span>%</span>
              </div>
              <div className="stat-label">{t("hero.stat_mission_ready")}</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="photo-ring anim d2">
            <img
              src={`${process.env.PUBLIC_URL}/gp_photo.jpg`}
              alt="Mohamed Reda - Staff Engineer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
