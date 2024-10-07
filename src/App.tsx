import React, { useState } from "react";
import NavigationBar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.css";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("about");

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <NavigationBar
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <LanguageSwitcher />
      {renderSection()}
    </>
  );
};

export default App;
