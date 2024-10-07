import React from "react";
import { useTranslation } from "react-i18next";

const Introducing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-image">
          <img
            src="/images/AboutPicture1.jpg"
            alt="Veronika"
            className="img-fluid"
          />
        </div>

        <div className="intro-text">
          <h1>
            {t("about.intro.title")} <br /> {t("about.intro.name")}
          </h1>
          <h3>{t("about.intro.subtitle")}</h3>
          <p>{t("about.intro.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default Introducing;
