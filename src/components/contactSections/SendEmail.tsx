import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SendEmail: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:veronika.tvrdy@gmail.com?subject=Poruka od ${name}&body=${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="container my-5">
      <div className="timeline-modern mb-4 p-4">
        <h3 className="experience-title text-center mb-4">
          {t("sendEmail.title")}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {t("sendEmail.nameLabel")}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              {t("sendEmail.emailLabel")}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              {t("sendEmail.messageLabel")}
            </label>
            <textarea
              className="form-control"
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn text-center">
            {t("sendEmail.sendButton")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendEmail;
