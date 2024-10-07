import React from "react";
import { useTranslation } from "react-i18next";
import "./Experience.css";

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const professionalExperience = [
    {
      title: t("experience.studentDeveloper"),
      company: "mStart Plus d.o.o.",
      period: t("experience.currentPeriod"),
      location: t("location.zagreb"),
      description: t("experience.studentDeveloperDescription"),
      icon: "/images/laptopIcon.png",
    },
  ];
  const seasonalWork = [
    {
      title: t("experience.cashier"),
      company: "Studenac d.o.o.",
      period: "07/2022 – 09/2022",
      location: t("location.pag"),
      description: t("experience.cashierDescription"),
      icon: "/images/shopIcon.png",
    },
    {
      title: t("experience.cashier"),
      company: "Jadranka Trgovina",
      period: "07/2021 – 09/2021",
      location: t("location.maliLosinj"),
      description: t("experience.cashierDescription"),
      icon: "/images/cashIcon.png",
    },
    {
      title: t("experience.waitress"),
      company: "Caffe Bar Punta",
      period: "07/2020 – 09/2020",
      location: t("location.umag"),
      description: t("experience.waitressDescription"),
      icon: "/images/caffeeIcon.png",
    },
    {
      title: t("experience.laundryWorker"),
      company: "Plava Laguna",
      period: "07/2019 – 09/2019",
      location: t("location.umag"),
      description: t("experience.laundryWorkerDescription"),
      icon: "/images/documentationIcon.png",
    },
    {
      title: t("experience.laundryWorker"),
      company: "Plava Laguna",
      period: "07/2018 – 09/2018",
      location: t("location.umag"),
      description: t("experience.laundryWorkerDescription"),
      icon: "/images/loundryIcon.png",
    },
  ];

  return (
    <section className="container my-5">
      <div className="timeline-modern mb-4 p-4">
        <h3 className="section-title mb-4">
          {t("experience.professionalExperience")}
        </h3>
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
        <h3 className="section-title mb-4">{t("experience.seasonalWork")}</h3>
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
                <h5 className="text-left">{exp.title}</h5>
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
