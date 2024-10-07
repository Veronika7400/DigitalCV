import React from "react";
import { useTranslation } from "react-i18next";

const CertificatesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="timeline-modern mb-4 p-4">
        <h2 className="education-title text-center">
          {t("certificates.title")}
        </h2>
        <div className="content text-center">
          <h3 className="section-title">
            {t("certificates.elementsOfAI.title")}
          </h3>
          <p className="text-center">
            {t("certificates.elementsOfAI.description")}
          </p>
          <div className="d-flex justify-content-center">
            <img
              src="/images/ElementsOfAI.jpg"
              alt="Elements Of AI Certificate"
              className="img-fluid w-50 mb-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
