import React from "react";

const Introducing: React.FC = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-image">
          <img
            src="/images/AboutPicture1.jpg"
            alt="Veronika"
            className="img-fluid"
          />
        </div>

        <div className="intro-text">
          <h1>
            Hi! <br /> I'm Veronika
          </h1>
          <h3>Junior Software Developer</h3>
          <p>
            As a Master's graduate in Informatics, I apply technology to solve
            real-world challenges, drawing on hands-on experience as a student
            developer at mStart where I focused on innovation and continuous
            improvement. Throughout my studies, I had the opportunity to work on
            numerous team projects where I developed strong communication,
            collaboration and adaptability skills while deepening my
            understanding of the software development lifecycle and inspiring my
            commitment to continuous growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introducing;
