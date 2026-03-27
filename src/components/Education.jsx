import React from "react";

const Education = ({ education }) => (
  <div className="edu-bg" id="education">
    <div className="section-wrap">
      <div className="section-eyebrow">Background</div>
      <h2 className="section-heading">Education</h2>
      {education.map((edu, index) => (
        <div className="edu-card" key={index}>
          <img
            src={`${process.env.PUBLIC_URL}/${edu.logo}`}
            alt={edu.institution}
            className="edu-logo"
          />
          <div>
            <div className="edu-title">{edu.institution}</div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-facts">
              <span className="edu-fact">📍 {edu.location}</span>
              <span className="edu-fact">🗓 {edu.duration}</span>
              <span className="edu-fact">Major: {edu.major}</span>
              <span className="edu-fact">Minor: {edu.minor}</span>
            </div>
            <div className="edu-gpa">{edu.gpa}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
