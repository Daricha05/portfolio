import React from "react";

const About = () => {
    return (
        <section id="about" className="about section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="section-title text-center mb-5" data-aos="fade-up">
                    <h2 className="fw-bold">À propos de moi</h2>
                    <p className="text-muted">
                        Apprenez-en davantage sur mon parcours et mes passions pour le développement web.
                    </p>
                </div>

                {/* Profile and Description */}
                <div className="row align-items-center gy-4">
                    {/* Left Column: Profile Image */}
                    <div className="col-lg-5">
                        <div
                            className="profile-image-container"
                            style={{
                                backgroundImage: `url('/img/profile1.png')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100%",
                                minHeight: "350px",
                                borderRadius: "15px",
                            }}
                        ></div>
                    </div>

                    {/* Right Column: About Me */}
                    <div className="col-lg-7">
                        <div className="about-content" style={{ textAlign: "justify" }}>
                            <h3 className="text-primary fw-bold mb-3">
                                Un passionné du web
                            </h3>
                            <p className="text-muted">
                                Moi c’est <strong>Johnny Richard</strong>, un développeur web passionné avec une année d'expérience.
                                J'adore créer des solutions modernes qui non seulement résolvent des problèmes réels, mais offrent également des expériences utilisateur exceptionnelles.
                            </p>
                            <p className="text-muted">
                                Mes compétences incluent des technologies comme <strong>Laravel</strong> et <strong>Django</strong>, me permettant de concevoir des applications performantes. Mon objectif est de continuer à apprendre et à m'adapter aux dernières innovations technologiques.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <i className="bi bi-telephone-fill text-primary me-2"></i>
                                        <strong>Téléphone :</strong> +261 32 60 089 84
                                    </li>
                                    <li>
                                        <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                        <strong>Ville :</strong> Antananarivo, Madagascar
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <i className="bi bi-envelope-fill text-warning me-2"></i>
                                        <strong>Email :</strong> johnnyricharde5@gmail.com
                                    </li>
                                    <li>
                                        <i className="bi bi-github text-dark me-2"></i>
                                        <strong>GitHub :</strong>{" "}
                                        <a
                                            href="https://github.com/Daricha05"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Daricha05
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
