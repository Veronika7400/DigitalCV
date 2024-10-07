import React from "react";
import { useTranslation } from "react-i18next";

const contactDetails = [
  {
    icon: "/images/adressIcon.png",
    titleKey: "contact.address",
    description: "Resnik 39, 34310 Pleternica, Hrvatska",
  },
  {
    icon: "/images/phoneIcon.png",
    titleKey: "contact.phone",
    description: "+385 98 131 0755",
  },
  {
    icon: "/images/emailIcon.png",
    titleKey: "contact.email",
    description: "veronika.tvrdy@gmail.com",
  },
  {
    icon: "/images/linkedIn.png",
    titleKey: "contact.linkedin",
    description: (
      <a
        className="link"
        href="http://linkedin.com/in/veronika-tvrdy-02255a26b"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link na profil
      </a>
    ),
  },
  {
    icon: "/images/GitHub.jpg",
    titleKey: "contact.github",
    description: (
      <a
        className="link"
        href="https://github.com/Veronika7400"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link na profil
      </a>
    ),
  },
];

const ContactDetails: React.FC = () => {
  const { t } = useTranslation(); // Hook for translation

  return (
    <section className="container my-5">
      <div className="timeline-modern mb-4 p-4">
        <h3 className="experience-title text-center mb-4">
          {t("contact.title")}
        </h3>

        {contactDetails.map((info, index) => (
          <div key={index} className="timeline-item mb-4">
            <div className="timeline-content d-flex align-items-center">
              <div style={{ marginRight: "15px" }}>
                <img
                  src={info.icon}
                  alt={`${t(info.titleKey)} Ikona`}
                  className="img-fluid rounded-circle"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>
              <div>
                <h5 className="text-left mt-2">{t(info.titleKey)}</h5>
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
