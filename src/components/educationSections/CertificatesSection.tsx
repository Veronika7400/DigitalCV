import React from "react";

const CertificatesSection: React.FC = () => {
  return (
    <section className="container">
      <div className="timeline-modern mb-4 p-4">
        <h2 className="education-title  text-center">CERTIFICATES</h2>
        <div className="content text-center">
          <h3 className="section-title">Elements of AI</h3>
          <p className=" text-center">
            The Elements of AI is an online course created by MinnaLearn and the
            University of Helsinki
          </p>
          <div className="d-flex justify-content-center">
            <img
              src="/images/ElementsOfAI.jpg"
              alt="Elements Of AI Certificate"
              className="img-fluid w-50 mb-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
