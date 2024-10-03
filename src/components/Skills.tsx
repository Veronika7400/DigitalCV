import React, { Fragment } from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const programmingLanguages = [
    { name: "Java", icon: "/images/javaIcon.png" },
    { name: "C#", icon: "/images/cSharpIcon.png" },
    { name: "SQL", icon: "/images/sqlIcon.png" },
    { name: "CSS", icon: "/images/cssIcon.png" },
    { name: "HTML", icon: "/images/HTMLIcon.png" },
    { name: "JavaScript", icon: "/images/javaScriptIcon.png" },
    { name: "PHP", icon: "/images/phpIcon.png" },
    { name: "React", icon: "/images/reactIcon.png" },
  ];

  const platformsAndTools = [
    "Eclipse IDE",
    "Visual Studio",
    "Visual Studio Code",
    "Atlassian Jira",
    "Atlassian Confluence",
    "Azure DevOps",
    "BigML",
    "Oracle Apex",
    "Ms SQL",
    "MySQL",
    "Docker (basic)",
    "Proto.io",
    "Draw.io",
    "Visual Paradigm",
    "Microsoft Dynamics 365 Business Central",
  ];

  return (
    <Fragment>
      <section className="container my-5">
        <div className="timeline-modern mb-4 p-4">
          <h3 className="section-title mb-4">DIGITAL SKILLS</h3>
          <div className="content p-4">
            <h3 className="section-title-left mb-4">Programming languages</h3>
            <div className="skills-grid">
              {programmingLanguages.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img
                    src={skill.icon}
                    alt={"${skill.name} Icon"}
                    className="skill-icon"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
            <h3 className="section-title-left mb-4 mt-5">
              Platforms and tools
            </h3>
            <div className="tools-grid">
              {platformsAndTools.map((tool, index) => (
                <div key={index} className="tool-item">
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="timeline-modern mb-4 p-4">
          <h3 className="experience-title text-center">LANGUAGE SKILLS</h3>
          <div className="content mb-4 p-4">
            <h3 className="section-title-left ">Native Language</h3>
            <p>Croatian</p>
            <div className="proficiency-bar">
              <div
                className="proficiency-level"
                style={{ width: "100%" }}
              ></div>
            </div>

            <h3 className="section-title-left mt-4">Other Languages</h3>
            <p>English</p>
            <ul className="language-list">
              <li>
                Understanding - C1
                <div className="proficiency-bar">
                  <div
                    className="proficiency-level"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </li>
              <li>
                Speaking - B2
                <div className="proficiency-bar">
                  <div
                    className="proficiency-level"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
              <li>
                Writing - B2
                <div className="proficiency-bar">
                  <div
                    className="proficiency-level"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
