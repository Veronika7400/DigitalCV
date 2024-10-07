import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="language-switcher">
      {currentLanguage === "en" ? (
        <button onClick={() => changeLanguage("hr")} className="lang-btn">
          <img
            src="/images/flags/hr.png"
            alt="Hrvatski"
            className="flag-icon"
          />
          <span>HR</span>
        </button>
      ) : (
        <button onClick={() => changeLanguage("en")} className="lang-btn">
          <img src="/images/flags/en.png" alt="English" className="flag-icon" />
          <span>EN</span>
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
