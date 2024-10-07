import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const projectCategories: { title: string; projects: Project[] }[] = [
    {
      title: t("projects.api"),
      projects: [
        {
          name: t("projects.vendingMachineApi.name"),
          description: t("projects.vendingMachineApi.description"),
          technologies: ["SICK Mobilisis | .NET", "C#", "MS Sql"],
          link: "https://github.com/Veronika7400/Vending-machine-API",
        },
        {
          name: t("projects.crawlerApi.name"),
          description: t("projects.crawlerApi.description"),
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
      title: t("projects.webProgramming"),
      projects: [
        {
          name: t("projects.runningRaceManagement.name"),
          description: (
            <>
              <p>{t("projects.runningRaceManagement.description.intro")}</p>
              <ul>
                <li>
                  {t(
                    "projects.runningRaceManagement.description.unregisteredUsers"
                  )}
                </li>
                <li>
                  {t(
                    "projects.runningRaceManagement.description.registeredUsers"
                  )}
                </li>
                <li>
                  {t("projects.runningRaceManagement.description.moderators")}
                </li>
                <li>
                  {t(
                    "projects.runningRaceManagement.description.administrators"
                  )}
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
          name: t("projects.airportInformationSystem.name"),
          description: (
            <>
              <p>{t("projects.airportInformationSystem.description.intro")}</p>
              <ul>
                <li>
                  {t("projects.airportInformationSystem.description.app1")}
                </li>
                <li>
                  {t("projects.airportInformationSystem.description.app2")}
                </li>
                <li>
                  {t("projects.airportInformationSystem.description.app3")}
                </li>
                <li>
                  {t("projects.airportInformationSystem.description.app4")}
                </li>
                <li>
                  {t("projects.airportInformationSystem.description.app5")}
                </li>
              </ul>
            </>
          ),
          technologies: ["Java"],
          link: "https://github.com/Veronika7400/Web-system",
        },
        {
          name: t("projects.crawlerUI.name"),
          description: t("projects.crawlerUI.description"),
          technologies: ["mStart plus d.o.o. | ASP.NET Core MVC", "C#"],
          link: "https://github.com/Veronika7400/CrawlerMVC",
          media: {
            video: "/videos/Crawler.mp4",
          },
        },
      ],
    },
    {
      title: t("projects.designPatterns"),
      projects: [
        {
          name: t("projects.packageDeliverySystem.name"),
          description: t("projects.packageDeliverySystem.description"),
          technologies: ["Java"],
          link: "https://github.com/Veronika7400/Dostava-paketa",
          media: {
            image: "/images/projects/uzdiz.jpg",
          },
        },
      ],
    },
    {
      title: t("projects.predictiveAnalytics"),
      projects: [
        {
          name: t("projects.predictiveAnalyticsInBusiness.name"),
          description: t("projects.predictiveAnalyticsInBusiness.description"),
          technologies: ["BigML", "Kaggle"],
          link: "https://www.dropbox.com/scl/fi/7kq1yxv7ft4wjrygicz2o/Tvrdy_Veronika-Prediktivna-analitika-u-poslovanju.pdf?rlkey=6siggpshdkf3m54g0i9803b7w&st=ezoa4lxi&dl=0",
        },
      ],
    },
    {
      title: t("projects.lowCodeDevelopment"),
      projects: [
        {
          name: t("projects.vuesticVueAdminTemplate.name"),
          description: t("projects.vuesticVueAdminTemplate.description"),
          technologies: ["mStart plus d.o.o. | Vue.js"],
          link: "https://www.dropbox.com/scl/fi/zvhsn9k0g8o174v6oal4r/Generatori-aplikacija.pdf?rlkey=545lb0r1q8ptce9a9xc2wsary&st=yrby18ym&dl=0",
          media: {
            image: "/images/projects/LowCodeUsers.png",
          },
        },
      ],
    },
    {
      title: t("projects.cryptography"),
      projects: [
        {
          name: t("projects.cryptographyToolkit.name"),
          description: t("projects.cryptographyToolkit.description"),
          technologies: ["C#", "Windows Forms"],
          link: "https://github.com/Veronika7400/Encryption",
        },
      ],
    },
    {
      title: t("projects.computerGraphics"),
      projects: [
        {
          name: t("projects.graphicsFundamentals.name"),
          description: t("projects.graphicsFundamentals.description"),
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
      title: t("projects.databases"),
      projects: [
        {
          name: t("projects.databaseDevelopmentDrivingSchool.name"),
          description: t(
            "projects.databaseDevelopmentDrivingSchool.description"
          ),
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
                <div className="content p-4" key={projectIndex}>
                  <li className="mb-4">
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
                      {t("projects.accessResources")}
                    </a>
                    <button
                      className="btn ms-2"
                      onClick={() => handleDetailsClick(project)}
                    >
                      {t("projects.details")}
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
              {t("projects.accessResources")}
            </a>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Projects;
