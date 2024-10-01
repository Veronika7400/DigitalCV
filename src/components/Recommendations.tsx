import "./Recommendations.css";

const Recommendations: React.FC = () => {
  const professionalExperience = [
    {
      company: "mStart Plus d.o.o.",
      person: "Ime Prezime",
      role: "Pozicija",
      recommendation: "Preporuka",
      icon: "/images/companies/mStart2.png",
    },
  ];

  return (
    <section className="container my-5">
      <div className="timeline-modern mb-4 p-4">
        {professionalExperience.map((exp, index) => (
          <div key={index} className="mb-4 recommendation-item">
            <div className="d-flex align-items-center">
              <div className="logo-container">
                <img
                  src={exp.icon}
                  alt="Logo"
                  className="img-fluid rounded-circle  company-logo"
                />
              </div>
              <div className="recommendation-content">
                <p className="recommendation-text text-justify">
                  {exp.recommendation}
                </p>
                <i>
                  {exp.company} | {exp.person}, {exp.role}
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
