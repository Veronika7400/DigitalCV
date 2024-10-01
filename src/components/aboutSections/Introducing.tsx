import React from "react";

const Introducing: React.FC = () => {
  return (
    <section className="container d-flex justify-content-center align-items-center mt-5 pt-3 pb-5">
      <div className="row align-items-center w-100 mb-5 mt-2">
        <div className="col-md-6 text-center">
          <h2 className="about-title">Introducing</h2>
          <p className="about-description">
            As a Master's graduate in Informatics, I apply technology to solve
            real-world challenges. My experience as a student developer in the
            Application Solutions Development Department at mStart provided me
            with valuable hands-on knowledge and fostered my focus on innovation
            and continuous improvement.
          </p>
          <p className="about-description">
            Throughout my studies, I had the opportunity to work on numerous
            team projects, where I developed strong communication, collaboration
            and adaptability skills. These experiences deepened my understanding
            of the software development lifecycle and the implementation of
            high-quality solutions, fueling my aspiration to further advance my
            skills.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/images/AboutPicture1.jpg"
            alt="My Profile"
            className="img-fluid rounded-circle about-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Introducing;
