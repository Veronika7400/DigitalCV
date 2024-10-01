import React from "react";
import Certificates from "./educationSections/CertificatesSection";
import Education from "./educationSections/EducationSection";
import { Fragment } from "react";
import "./Education.css";

const EducationSection: React.FC = () => {
  return (
    <Fragment>
      <Education />;
      <Certificates />;
    </Fragment>
  );
};

export default EducationSection;
