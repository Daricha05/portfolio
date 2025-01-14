import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaPython, FaLaravel, FaReact, FaNodeJs, FaLinux,
} from "react-icons/fa";
import {
    SiDjango, SiMysql, SiPostgresql, SiJquery, SiBootstrap, SiGithub,
} from "react-icons/si";

const skillsData = [
    { name: "HTML5", icon: <FaHtml5 className="text-danger" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-primary" /> },
    { name: "Bootstrap5", icon: <SiBootstrap className="text-primary" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-warning" /> },
    { name: "JQuery", icon: <SiJquery className="text-primary" /> },
    { name: "PHP", icon: <FaPhp className="text-secondary" /> },
    { name: "Python", icon: <FaPython className="text-info" /> },
    { name: "Laravel", icon: <FaLaravel className="text-danger" /> },
    { name: "Django", icon: <SiDjango className="text-success" /> },
    { name: "React.js", icon: <FaReact className="text-primary" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-success" /> },
];

const databaseData = [
    { name: "MySQL", icon: <SiMysql className="text-info" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-primary" /> },
];

const environmentData = [
    { name: "GitHub", icon: <SiGithub className="text-dark" /> },
    { name: "Linux", icon: <FaLinux className="text-success" /> },
];

const Skills = () => {
    const renderSkillSection = (title, skills) => (
        <div className="text-center mb-4">
            <h5 className="fw-bold">{title}</h5>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="d-flex align-items-center justify-content-center flex-column"
                        style={{
                            width: "100px",
                            height: "100px",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <div style={{ fontSize: "30px" }}>{skill.icon}</div>
                        <span className="mt-2 text-muted fw-bold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="skills section py-5">
            <div className="container">
                <div className="section-title text-center" data-aos="fade-up">
                    <h2 className="text-center fw-bold">Compétences</h2>
                </div>
                <div className="row">
                    {/* Colonne gauche */}
                    <div className="col-lg-7">
                        {renderSkillSection("Professionnel", skillsData)}
                    </div>
                    {/* Colonne droite */}
                    <div className="col-lg-5">
                        {renderSkillSection("Bases de données", databaseData)}
                        {renderSkillSection("Environnements", environmentData)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
