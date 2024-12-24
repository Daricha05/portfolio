import React from "react";

const Projects = () => {
    const projects = [
        { title: "Projet 1", description: "Description du projet 1" },
        { title: "Projet 2", description: "Description du projet 2" },
    ];

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Mes Projets</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
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
