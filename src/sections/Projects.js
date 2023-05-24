import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {

    const projectsData = [

        {
          image: "/project1.png",
          projectName: "Hand2Hand",
          projectLink: "https://hand2hand.vercel.app/",
          projectDescription:
            "Junto a un equipo de trabajo, estuvimos a cargo de elaborar una página del tipo e-commerce, orientada a la venta de productos reutilizables. Me desenvolví más como front-end, aplicando siempre buenas prácticas, como desarrollar componentes que sea responsivos, código legible, etc.",
          projectTech: [
            "Nextjs",
            "Redux Toolkit",
            "Bootstrap",
            "Nodejs",
            "Mongodb"
          ],
          projectExternalLinks: {
            github: "https://github.com/CodeFusionPF/pacto",
            externalLink: "https://hand2hand.vercel.app/",
          },
        },

        {
          image: "/project2.png",
          projectName: "Pokemon App",
          projectLink: "https://pokemon-pi-alexbv2615.vercel.app/",
          projectDescription:
          "Este proyecto individual trata de una aplicación web donde podrás encontrar diferentes tipos de pokémon, utilizando una API externa. A partir de ella, puedes buscar pokémones, filtrarlos por origen o tipo, ordenarlos e incluso crear tu propio pokémon.",
          projectTech: [
            "React",
            "Redux",
            "Node.js",
            "Express",
            "Sequelize",
            "PostgreSQL",
          ],
          projectExternalLinks: {
            github: "https://github.com/Alexbv2615/Pokemon_PI",
            externalLink: "https://pokemon-pi-alexbv2615.vercel.app/",
          },
        },

        {
          image: "/project3.png",
          projectName: "Portfolio",
          projectLink: "https://portfolio-alex-alexbv2615.vercel.app/",
          projectDescription:
          "Esta es la primera versión de mi portafolio personal. Me desafié a implementar nuevas tecnologías, como Sass para los estilos y Framer Motion para darle más vida a la página. Posiblemente, más adelante aplique nuevas técnicas para hacerlo aún más agradable.",
          projectTech: [
            "Nextjs",
            "Sass",
            "FramerMotion"
          ],
          projectExternalLinks: {
            github: "https://github.com/Alexbv2615/portfolio-alex",
            externalLink: "https://portfolio-alex-alexbv2615.vercel.app/",
          },
        }
      ];

    return (
        <div className="projects" id="projects">
            <motion.div 
            className="title" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            variants={{ visible: {opacity: 1, y: -50}, hidden: {opacity: 1, y: 0}}} 
            >
                <h2>Projects</h2>
            </motion.div>
            <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
    )
};

export default Projects;