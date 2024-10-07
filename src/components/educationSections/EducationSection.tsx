import React from "react";
import { useTranslation } from "react-i18next";

const EducationSection: React.FC = () => {
  const { t } = useTranslation();

  const educationData = [
    {
      title: t("education.universityMaster.title"),
      institution: t("education.universityMaster.institution"),
      orientation: t("education.universityMaster.orientation"),
    },
    {
      title: t("education.universityBachelor.title"),
      institution: t("education.universityBachelor.institution"),
      orientation: t("education.universityBachelor.orientation"),
    },
    {
      title: t("education.highSchool.title"),
      institution: t("education.highSchool.institution"),
      orientation: t("education.highSchool.orientation"),
    },
  ];

  return (
    <section className="container my-5">
      <div className="timeline-modern">
        <h2 className="education-title text-center">{t("education.title")}</h2>
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
