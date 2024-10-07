import React from "react";
import { useTranslation } from "react-i18next";

const Logos: React.FC = () => {
  const { t } = useTranslation();

  const logos = [
    "/images/companies/mStart.png",
    "/images/companies/mobilisis.png",
    "/images/companies/studenac.png",
    "/images/companies/jadranka.png",
    "/images/companies/punta.png",
    "/images/companies/laguna.png",
  ];

  return (
    <section className="container my-5 pt-5">
      <h3 className="text-center mb-5">{t("about.logos.title")}</h3>
      <div className="row">
        {logos.map((logo, index) => (
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="logo-card d-flex justify-content-center align-items-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="img-fluid logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
