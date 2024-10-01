import React from "react";
import ContactDetails from "./contactSections/ContactDetails";
import LocatonOnMap from "./contactSections/LocationOnMap";
import SendEmail from "./contactSections/SendEmail";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="container my-5">
      <ContactDetails />
      <SendEmail />
      <LocatonOnMap />
    </section>
  );
};

export default Contact;
