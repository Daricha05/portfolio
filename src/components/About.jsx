import React from "react";

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <h2>À propos de moi</h2>
                <p>
                    Je suis un <span className="border-bottom">Développeur web</span> passionné par les technologies modernes.
                    J'adore créer des solutions interactives et performantes.
                </p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4">
                        <img src="../assets/img/profile-img.jpg" className="img-fluid" alt />
                    </div>
                    <div className="col-lg-8 content">
                        <h2>Développeur web.</h2>
                        <p className="fst-italic py-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right" /> <strong>Téléphone:</strong> <span>+261 32 60 089 84</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Ville:</strong> <span>Antananarivo, MADAGASCAR</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right" /> <strong>Diplôme:</strong> <span>Master I en Informatique de gestion</span></li>
                                    <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>johnnyricharde5@gmail.com</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;
