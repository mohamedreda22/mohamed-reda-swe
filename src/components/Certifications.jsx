import React from "react";

const Certifications = ({ certifications }) => (
  <div className="certs-bg" id="certifications">
    <div className="section-wrap">
      <div className="section-eyebrow">Learning</div>
      <h2 className="section-heading">
        Certifications
        <a
          href="https://drive.google.com/drive/folders/1AY5E9a4IXnIOR3lwJLI-uMeMGmSGdiwP?usp=drive_link"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗
        </a>
      </h2>
      <div className="certs-grid">
        {certifications.map((c) => (
          <div className="cert-card" key={c.title}>
            <div className="cert-title">{c.title}</div>
            <div className="cert-meta">
              <span>{c.issuer}</span> · {c.date}
            </div>
            <div className="cert-chips">
              {c.skills.map((s) => (
                <span className="cert-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <ul className="cert-includes">
              {c.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Certifications;
