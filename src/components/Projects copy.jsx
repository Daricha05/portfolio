import React from "react";
import "../Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "Application Web",
            role: "Développeur Laravel",
            technologie: "Laravel 10, Bootstrap5, Livewire",
            societe: "BIENFE",
            date: "2024",
            description: "CRM, Gestion des écoles complet",
        },
        {
            title: "Stage de Fin d'étude pour licence professionnel",
            role: "Développeur web",
            technologie: "Laravel 10, Amchart4, Bootstrap5, JavaScript",
            societe: "INSTAT Madagascar",
            date: "Janvier 2024 - Juillet 2024",
            description: "Réalisation d'une maquette en site web avec la technologie choisie",
        },
        {
            title: "Projet personnel (Réseau Social)",
            role: "Intégrateur Web",
            date: "2021",
            description: "Réalisation d'un site type Facebook, sans maquette",
        },
        {
            title: "Projet personnel",
            role: "Intégrateur Web",
            date: "2019-2022",
            description: "Réalisation d'une maquette de site web (site vitrine) et création de sites sans maquette",
        },
        {
            title: "Projet personnel (Site e-commerce)",
            role: "Développeur CMS",
            date: "2019",
            description: "Réalisation de sites vitrines et e-commerce avec WordPress",
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
                            <div className="timeline-content shadow p-4 rounded rounded bg-white">
                                <h4 className="fw-bold">{project.title}</h4>
                                <h5 className="text-primary">{project.role}</h5>
                                <p className="text-muted mb-2">
                                    <small>
                                        <i className="far fa-clock"></i> {project.date}
                                    </small>
                                </p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
