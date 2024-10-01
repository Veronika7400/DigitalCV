import React, { Fragment } from "react";
import Logos from "./aboutSections/Logos";
import Introducing from "./aboutSections/Introducing";
import "./About.css";

const About: React.FC = () => {
  return (
    <Fragment>
      <Introducing />
      <Logos />
    </Fragment>
  );
};

export default About;
