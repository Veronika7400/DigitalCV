import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  const professionalExperience = [
    {
      title: "Student Developer",
      company: "mStart Plus d.o.o.",
      period: "03/2024 - Present",
      location: "Zagreb, Croatia",
      description:
        "Working as a developer with various programming languages and technologies including C#, React, HTML, CSS, and JavaScript",
      icon: "/images/laptopIcon.png",
    },
  ];

  const seasonalWork = [
    {
      title: "Cashier",
      company: "Studenac d.o.o.",
      period: "07/2022 – 09/2022",
      location: "Pag, Croatia",
      description: "Worked as a cashier, stocked shelves, received goods",
      icon: "/images/shopIcon.png",
    },
    {
      title: "Cashier",
      company: "Jadranka Trgovina",
      period: "07/2021 – 09/2021",
      location: "Mali Lošinj, Croatia",
      description: "Worked as a cashier and stocked shelves",
      icon: "/images/cashIcon.png",
    },
    {
      title: "Waitress",
      company: "Caffe Bar Punta",
      period: "07/2020 – 09/2020",
      location: "Umag, Croatia",
      description:
        "Served at the bar and prepared food in the fast food section",
      icon: "/images/caffeeIcon.png",
    },
    {
      title: "Laundry Worker",
      company: "Plava Laguna",
      period: "07/2019 – 09/2019",
      location: "Umag, Croatia",
      description:
        "Worked in the operational part of the laundry and handled administrative tasks related to its operations",
      icon: "/images/documentationIcon.png",
    },
    {
      title: "Laundry Worker",
      company: "Plava Laguna",
      period: "07/2018 – 09/2018",
      location: "Umag, Croatia",
      description:
        "Worked in the operational part of the laundry and handled administrative tasks related to its operations",
      icon: "/images/loundryIcon.png",
    },
  ];

  return (
    <section className="container my-5">
      <div className="timeline-modern mb-4 p-4">
        <h3 className="section-title mb-4">PROFESSIONAL EXPERIENCE</h3>
        {professionalExperience.map((exp, index) => (
          <div key={index} className="timeline-item mb-4">
            <div className="timeline-content d-flex align-items-center">
              <div style={{ marginRight: "15px" }}>
                <img
                  src={exp.icon}
                  alt="Icon"
                  className="img-fluid rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>
              <div>
                <h5 className="text-left mt-2">{exp.title}</h5>
                <i>
                  {exp.company} | {exp.location} | {exp.period}
                </i>
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-modern mb-4 p-4">
        <h3 className="section-title mb-4">SEASONAL WORK</h3>
        {seasonalWork.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="timeline-content d-flex align-items-center">
              <div style={{ marginRight: "15px" }}>
                <img
                  src={exp.icon}
                  alt="Icon"
                  className="img-fluid rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>
              <div>
                <h5 className="text-left ">{exp.title}</h5>
                <i>
                  {exp.company} | {exp.location} | {exp.period}
                </i>
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
