import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="bg-white text-dark">
            <div className="container text-center">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p className="text-muted">N'hésitez pas à me contacter pour toute question ou opportunité.</p>
                </div>

                <div className="row gy-4 justify-content-center">
                    {/* Address */}
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="info-item d-flex align-items-center">
                            <i className="bi bi-geo-alt fs-3 me-3 text-primary"></i>
                            <div>
                                <h5 className="fw-bold">Adresse</h5>
                                <p>Antananarivo, Madagascar</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="info-item d-flex align-items-center">
                            <i className="bi bi-telephone fs-3 me-3 text-success"></i>
                            <div>
                                <h5 className="fw-bold">Téléphone</h5>
                                <p>+261 32 60 089 84</p>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="info-item d-flex align-items-center">
                            <i className="bi bi-envelope fs-3 me-3 text-danger"></i>
                            <div>
                                <h5 className="fw-bold">Email</h5>
                                <a href="mailto:johnnyricharde5@gmail.com" className="text-dark">
                                    johnnyricharde5@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Facebook */}
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-facebook fs-3 me-3 text-primary"></i>
                            <a
                                href="https://www.facebook.com/johny.richard.129/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark mt-3 text-decoration-none">
                                <h5 className="fw-bold">Facebook</h5>
                            </a>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="info-item d-flex align-items-center">
                            <i className="bi bi-linkedin fs-3 me-3 text-info"></i>
                            <a
                                href="https://www.linkedin.com/in/johnny-richard-andriamanalina-5453401ba/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark mt-3 text-decoration-none">
                                <h5 className="fw-bold">LinkedIn</h5>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-5 text-muted">
                    <p>© 2024 Johnny Richard. Tous droits réservés.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
