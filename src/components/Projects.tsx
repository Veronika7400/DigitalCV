import React, { Fragment, useState } from "react";
import "./Projects.css";

interface Project {
  name: string;
  description: JSX.Element | string;
  technologies: string[];
  link: string;
  media?: {
    image?: string;
    video?: string;
  };
}

const Projects: React.FC = () => {
  const projectCategories: { title: string; projects: Project[] }[] = [
    {
      title: "API",
      projects: [
        {
          name: "Vending machine API",
          description:
            "The entire vending machine system is the result of teamwork and collaboration with the company SICK Mobilisis, while the attached code for the API was written independently. The primary purpose of the application programming interface is to provide a service for communication between different parts of the software, specifically for the interaction between the database, application, user interface, and MQTT. A code-first approach is applied, where migrations are used to create the database based on the defined model. The program code is accompanied by documentation included in a PDF document.",
          technologies: ["SICK Mobilisis | .NET", "C#", "MS Sql"],
          link: "https://github.com/Veronika7400/Vending-machine-API",
        },
        {
          name: "Crawler API",
          description:
            "This project was developed in collaboration with the company mStart Plus. The API contains the business logic for managing application users, logic for retrieving the first image of each product, and can fetch the lowest-priced product from each store, as well as all products available in a specific store. A code-first approach was used for creating the database allowing for flexibility in the development of the database schema as the application grows.",
          technologies: [
            "mStart plus d.o.o. | .NET Core Web API",
            "C#",
            "MS Sql",
          ],
          link: "https://github.com/Veronika7400/WebApiCrawler",
          media: {
            image: "/images/projects/CrawlerAPI.png",
          },
        },
      ],
    },
    {
      title: "WEB PROGRAMMING",
      projects: [
        {
          name: "Running race management system",
          description: (
            <>
              <p>
                The system is designed for managing running races and tracking
                results, featuring functionalities for different user roles:
              </p>
              <ul>
                <li>
                  Unregistered users: Access basic information, leaderboards,
                  and a photo gallery
                </li>
                <li>
                  Registered users: Register and deregister for races, and view
                  their personal statistics
                </li>
                <li>
                  Moderators: Create and define race stages, list registered
                  users, and manage results
                </li>
                <li>
                  Administrators: Unlock and block user accounts, create
                  countries and races, and assign moderators
                </li>
              </ul>
            </>
          ),
          technologies: ["PHP", "HTML", "CSS"],
          link: "https://github.com/Veronika7400/Web",
          media: {
            image: "/images/projects/trcanje.png",
          },
        },
        {
          name: "Airport information system",
          description: (
            <>
              <p>
                The system consists of five applications that provide
                information about airports, distances, flights, and weather
                data:
              </p>
              <ul>
                <li>
                  1st application: A socket server for network communication
                </li>
                <li>2nd application: A RESTful/JAX-RS web service</li>
                <li>
                  3rd application: Retrieves flight departure data from the
                  OpenSky Network using multithreading
                </li>
                <li>4th application: A JAX-WS web service</li>
                <li>
                  5th application: Views for managing: users, received JMS
                  messages, airports, flights
                </li>
              </ul>
            </>
          ),
          technologies: ["Java"],
          link: "https://github.com/Veronika7400/Web-system",
        },
        {
          name: "Crawler UI",
          description:
            "The user interface was built using Bootstrap for responsiveness, ASP.NET Core Identity for managing application users and Hangfire for sending emails to application subscribers. The Crawler API is used to display the core functionalities of the application which include managing users, searching stores to find the lowest price for a specific product and displaying all products from a selected online store.",
          technologies: ["mStart plus d.o.o. | ASP.NET Core MVC", "C#"],
          link: "https://github.com/Veronika7400/CrawlerMVC",
          media: {
            video: "/videos/Crawler.mp4",
          },
        },
      ],
    },
    {
      title: "DESIGN PATTERNS",
      projects: [
        {
          name: "Package delivery system",
          description:
            "The implementation of reusable software architectures defined in the GOF book on software engineering has been applied in this project. The application is designed for a command-line terminal, facilitating the delivery of various types of packages with specific delivery services.",
          technologies: ["Java"],
          link: "https://github.com/Veronika7400/Dostava-paketa",
          media: {
            image: "/images/projects/uzdiz.jpg",
          },
        },
      ],
    },
    {
      title: "PREDICTIVE ANALYTICS",
      projects: [
        {
          name: "Predictive analytics in business",
          description:
            "This project illustrates, through a practical example, how decision tree models and neural networks can be applied in business and the results they can yield. It analyzes a dataset for IBM in Croatia and develops models to predict employee turnover. The online machine learning platform BigML is used to create these predictive models.",
          technologies: ["BigML", "Kaggle"],
          link: "https://www.dropbox.com/scl/fi/7kq1yxv7ft4wjrygicz2o/Tvrdy_Veronika-Prediktivna-analitika-u-poslovanju.pdf?rlkey=6siggpshdkf3m54g0i9803b7w&st=ezoa4lxi&dl=0",
        },
      ],
    },
    {
      title: "LOW CODE DEVELOPMENT",
      projects: [
        {
          name: "Vuestic - Vue Admin Template",
          description:
            "The focus of this project is on low-code software development as a discipline of automated programming that enables the creation of applications without extensive coding. As it becomes increasingly popular for its ability to accelerate development and reduce costs, this project demonstrates the application development process using a generated UI template from the Flatlogic platform. The template is customized to integrate with the Crawler API backend, incorporating functionalities for user management and displaying the lowest-priced products from online stores.",
          technologies: ["mStart plus d.o.o. | Vue.js"],
          link: "https://www.dropbox.com/scl/fi/zvhsn9k0g8o174v6oal4r/Generatori-aplikacija.pdf?rlkey=545lb0r1q8ptce9a9xc2wsary&st=yrby18ym&dl=0",
          media: {
            image: "/images/projects/LowCodeUsers.png",
          },
        },
      ],
    },
    {
      title: "CRYPTOGRAPHY",
      projects: [
        {
          name: "Cryptography toolkit",
          description:
            "The program enables the creation and storage of cryptographic keys in files, encryption and decryption of a given file using RSA and AES algorithms, message digest calculation (of the input file), digital signing and verification of the digital signature.",
          technologies: ["C#", "Windows Forms"],
          link: "https://github.com/Veronika7400/Encryption",
        },
      ],
    },
    {
      title: "COMPUTER GRAPHICS",
      projects: [
        {
          name: "2D and 3D graphics fundamentals",
          description:
            "Understanding the principles underlying the implementation of 2D and 3D graphics on a computer. The implementation is based on mathematical concepts, leading to solutions for coordinate systems, transformations, perspective projection, and geometric modeling.",
          technologies: ["JavaScript"],
          link: "https://github.com/Veronika7400/Racunalna-grafika",
          media: {
            image: "/images/projects/2D.png",
            video: "/videos/3D.mp4",
          },
        },
      ],
    },
    {
      title: "DATABASES",
      projects: [
        {
          name: "Database development for a driving school",
          description:
            "This project involves the development of a comprehensive database for a driving school, focusing on the essential elements required for efficient management and operation. Emphasis is placed on creating triggers and queries that enhance the functionality of the database, ensuring that it effectively handles various aspects of the driving school's operations. ",
          technologies: ["MS SQL", "C#", "Windows Forms"],
          link: "https://www.dropbox.com/scl/fi/gde2qjr9i3ej4emyi7cnb/Veronika_Tvrdy-Baza_podataka_za_auto-kolu.pdf?rlkey=2anpgpi4tk18r3h14dj4jl0qb&dl=0",
        },
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleDetailsClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const renderProjectMedia = (media?: { image?: string; video?: string }) => {
    if (!media) return null;

    return (
      <div className="text-center my-3 d-flex justify-content-center">
        {media.image && (
          <img
            src={media.image}
            alt={media.image}
            className={`img-fluid rounded ${media.video ? "me-2" : ""}`}
            style={media.video ? { width: "45%" } : { width: "100%" }}
          />
        )}
        {media.video && (
          <video
            className={`video-custom-size rounded ${media.image ? "ms-2" : ""}`}
            src={media.video}
            controls
            style={media.image ? { width: "45%" } : { width: "100%" }}
          />
        )}
      </div>
    );
  };

  return (
    <Fragment>
      {projectCategories.map((category, categoryIndex) => (
        <section className="container my-5" key={categoryIndex}>
          <div className="timeline-modern mb-4 p-4">
            <h3 className="section-title mb-4">{category.title}</h3>
            <ul className="projects-list">
              {category.projects.map((project, projectIndex) => (
                <div className="content p-4">
                  <li key={projectIndex} className="mb-4">
                    <h5 className="mt-2">{project.name}</h5>
                    <div className="technologies mb-1">
                      {project.technologies.join(", ")}
                    </div>
                    <a
                      href={project.link}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Access resources
                    </a>
                    <button
                      className="btn ms-2"
                      onClick={() => handleDetailsClick(project)}
                    >
                      Details
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {showModal && selectedProject && (
        <section className="modal-overlay">
          <div className="modal-content">
            <button className="btn close-btn" onClick={closeModal}>
              X
            </button>
            <h3>{selectedProject.name}</h3>
            <div className="technologies mb-2">
              {selectedProject.technologies.join(", ")}
            </div>
            <div>{selectedProject.description}</div>
            {renderProjectMedia(selectedProject.media)}
            <a
              href={selectedProject.link}
              className="btn view-project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access resources
            </a>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Projects;
