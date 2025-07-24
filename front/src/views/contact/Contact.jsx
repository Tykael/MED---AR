import styles from "./Contact.module.css";
import developerImg from "../../assets/img/dev.png";
import { FaReact, FaNodeJs, FaGithub, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";

function Contact() {
  const technologies = [
    {
      name: "React",
      icon: <FaReact color="#61DAFB" />,
      url: "https://react.dev/",
    },
    {
      name: "Vite",
      icon: <SiVite color="#646CFF" />,
      url: "https://vitejs.dev/",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178C6" />,
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs color="#339933" />,
      url: "https://nodejs.org/",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 color="#E34F26" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt color="#1572B6" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "GitHub",
      icon: <FaGithub color="#000000" />,
      url: "https://github.com/",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contacto</h1>
        <h2 className={styles.subtitle}>Gracias por visitar MED-/-AR</h2>

        <div className={styles.devSection}>
          <img src={developerImg} alt="Desarrollador" className={styles.devImage} />
          <div className={styles.devInfo}>
            <p>
              Este proyecto fue desarrollado por <strong>Sebastian Arriagada</strong>, con el
              objetivo de mejorar la atención médica digital.
            </p>
            <p>Puedes contactarme o revisar mi trabajo en plataformas como GitHub o LinkedIn.</p>
          </div>
        </div>

        <h3>Tecnologías utilizadas</h3>
        <div className={styles.techStack}>
          {technologies.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tech}
              title={tech.name}
            >
              <span style={{ marginRight: "8px" }}>{tech.icon}</span>
              {tech.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
