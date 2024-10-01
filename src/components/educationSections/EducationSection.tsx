import React from "react";

const EducationSection: React.FC = () => {
  const educationData = [
    {
      title: "University Master of Informatics",
      institution:
        "University of Zagreb Faculty of Organization and Informatics, Varaždin | 2022 - 2024",
      orientation:
        "Programme orientation: Information and Software Engineering",
    },
    {
      title: "University Bachelor of Informatics",
      institution:
        "University of Zagreb Faculty of Organization and Informatics, Varaždin | 2019 - 2022",
      orientation: "Programme orientation: Information systems",
    },
    {
      title: "High School Diploma",
      institution: "Gymnasium Požega | 2015 - 2019",
      orientation:
        "Programme orientation: Natural sciences and mathematics high school",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="education-title text-center">EDUCATION</h2>
      <div className="timeline-modern">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-modern-item">
            <div className="timeline-content">
              <h5>{item.title}</h5>
              <i>{item.institution}</i>
              {item.orientation && <p>{item.orientation}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
