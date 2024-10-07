import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

interface NavigationBarProps {
  setCurrentSection: (section: string) => void;
  currentSection: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  setCurrentSection,
  currentSection,
}) => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container">
        <span
          className="navbar-brand text-center w-100"
          onClick={() => setCurrentSection("about")}
        >
          VERONIKA TVRDY
        </span>
        <div className="d-flex justify-content-center w-100">
          <div className="navbar-nav d-flex flex-column flex-md-row">
            {[
              "about",
              "education",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((section) => (
              <a
                key={section}
                className={`nav-link ${
                  currentSection === section ? "active" : ""
                }`}
                onClick={() => setCurrentSection(section)}
              >
                {t(`navbar.${section}`).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
