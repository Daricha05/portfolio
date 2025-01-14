import React from "react";
import "../Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "CRM pour une école",
            role: "Développeur Laravel",
            techno: "Laravel 10, Bootstrap5, Livewire",
            societe: "BIENFE",
            date: "(2024)",
            description: "CRM, Gestion des écoles complet",
            image: "/img/crm.png",
        },
        {
            title: "Visualisation dynamique des données",
            role: "Développeur web",
            techno: "Laravel 10, Amchart4, Bootstrap5, JavaScript",
            societe: "INSTAT Madagascar",
            date: "(Janvier 2024 - Juillet 2024)",
            description: "Réalisation d'une maquette en site web avec la technologie choisie",
        },
        {
            title: "Application web pour gérer une association",
            role: "Développeur Laravel",
            techno: "Laravel 8, Bootstrap5, JavaScript",
            societe: "Projet pro",
            date: "(2024)",
            description: "Réalisation d'une maquette de site web (site vitrine) et création de sites sans maquette",
        },
        {
            title: "Gestion de stock",
            role: "Développeur python",
            techno: "Framework Django",
            societe: "Projet pro",
            date: "(2023)",
            description: "Réalisation d'un site type Facebook, sans maquette",
            image: "/img/stock.png",
        },
        {
            title: "Système d'authentification",
            role: "Développeur python",
            techno: "Framework Django",
            societe: "Projet perso",
            date: "(2023)",
            description: "Réalisation de sites vitrines et e-commerce avec WordPress",
            image: "/img/login.png",
        },
        {
            techno: "Contact moi si vous voulez en savoir plus :)",
        },
    ];

    return (
        <section id="resume" className="py-5 bg-light">
            <div className="container">
                <div className="section-title text-center" data-aos="fade-up">
                    <h2 className="fw-bold">Expériences Professionnelles</h2>
                </div>
                <div className="timeline">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="timeline-content shadow p-4 rounded bg-white">
                                <div className="d-flex align-items-center flex-wrapper">
                                    <div className="col">
                                        <h4 className="fw-bold">{project.title}</h4>
                                        <div className="text-primary">
                                            <span className="fs-5">{project.role}  </span>
                                            <small className="text-muted">
                                                <i className="far fa-clock"></i>{project.date}
                                            </small>
                                        </div>
                                        <i className="text-muted fs-6">{project.techno}</i>
                                        <p className="text-primary mb-2">
                                            {project.societe}
                                        </p>
                                    </div>
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={`${project.title} illustration`}
                                            className="img-fluid"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
