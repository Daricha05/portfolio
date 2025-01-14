import React from "react";

const Header = () => {
    return (
        <>
            <header id="header" className="header d-flex flex-column justify-content-center">
                <i className="header-toggle d-xl-none bi bi-list" />
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active"><i className="bi bi-house navicon" /><span>Accueil</span></a></li>
                        <li><a href="#about"><i className="bi bi-person navicon" /><span>A propos</span></a></li>
                        <li><a href="#skills"><i className="bi bi-hdd-stack navicon" /><span>Compétence</span></a></li>
                        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon" /><span>Resume</span></a></li>
                        <li><a href="#contact"><i className="bi bi-envelope navicon" /><span>Contact</span></a></li>
                    </ul>
                </nav>
            </header>

            <section id="hero" className="hero section light-background">

                <img src="/img/profile.png" alt="" />

                <div className="container" data-aos="zoom-out">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h2>Johnny Richard ANDRIAMANALINA</h2>
                            <p>Je suis un <span>Développeur web</span></p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/johny.richard.129/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook" />
                                </a>
                                <a href="https://github.com/Daricha05" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github" />
                                </a>
                                <a href="https://www.linkedin.com/in/johnny-richard-andriamanalina-5453401ba/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Header;
