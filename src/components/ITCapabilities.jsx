import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const ITCapabilities = () => {
  const { t } = useTranslation();

  const capabilities = [
    t("it_capabilities.item1"),
    t("it_capabilities.item2"),
    t("it_capabilities.item3"),
    t("it_capabilities.item4"),
    t("it_capabilities.item5"),
    t("it_capabilities.item6"),
  ];

  return (
    <div className="it-caps-bg" id="it-capabilities">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">Expertise</div>
          <h2 className="section-heading">{t("it_capabilities.heading")}</h2>
        </motion.div>

        <div className="capabilities-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              className="cap-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                background: "var(--bg-card)",
                padding: "20px",
                borderRadius: "15px",
                border: "1px solid var(--border-card)",
                color: "var(--text-primary)"
              }}
            >
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: "var(--accent)" }} />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITCapabilities;
