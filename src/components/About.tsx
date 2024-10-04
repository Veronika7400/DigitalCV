import React, { Fragment } from "react";
import Logos from "./aboutSections/Logos";
import Introducing from "./aboutSections/Introducing";
import CV from "./aboutSections/CVAccess";
import "./About.css";

const About: React.FC = () => {
  return (
    <Fragment>
      <Introducing />
      <Logos />
      <CV />
    </Fragment>
  );
};

export default About;
