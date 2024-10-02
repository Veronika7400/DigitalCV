import React from "react";

const contactDetails = [
  {
    icon: "/images/adressIcon.png",
    title: "Address",
    description: "Resnik 39, 34310 Pleternica, Croatia",
  },
  {
    icon: "/images/phoneIcon.png",
    title: "Phone",
    description: "+385 98 131 0755",
  },
  {
    icon: "/images/emailIcon.png",
    title: "Email",
    description: "veronika.tvrdy@gmail.com",
  },
  {
    icon: "/images/linkedIn.png",
    title: "LinkedIn",

    description: (
      <a
        className="link"
        href="http://linkedin.com/in/veronika-tvrdy-02255a26b"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to profile
      </a>
    ),
  },
  {
    icon: "/images/GitHub.jpg",
    title: "GitHub",
    description: (
      <a
        className="link"
        href="https://github.com/Veronika7400"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to profile
      </a>
    ),
  },
];

const ContactDetails: React.FC = () => {
  return (
    <section className="container my-5">
      <h3 className="experience-title text-center">CONTACT INFORMATION</h3>
      <div className="timeline-modern mb-4 p-4">
        {contactDetails.map((info, index) => (
          <div key={index} className="timeline-item mb-4">
            <div className="timeline-content d-flex align-items-center">
              <div style={{ marginRight: "15px" }}>
                <img
                  src={info.icon}
                  alt={`${info.title} Icon`}
                  className="img-fluid rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>
              <div>
                <h5 className="text-left mt-2">{info.title}</h5>
                <p>{info.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactDetails;
