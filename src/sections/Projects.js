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
            "Firebase",
            "Nodejs",
            "Mongodb"
          ],
          projectExternalLinks: {
            github: "https://github.com/CodeFusionPF/pacto",
            externalLink: "https://hand2hand.vercel.app/",
          },
        },

        // {
        //   image: "/project2.png",
        //   projectName: "Realtime Chat App",
        //   projectLink: "https://netlify.com",
        //   projectDescription:
        //     "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
        //   projectTech: [
        //     "React",
        //     "Sockets",
        //     "Node.js",
        //     "Express",
        //     "MongoDB",
        //     "Styled Components",
        //   ],
        //   projectExternalLinks: {
        //     github: "",
        //     externalLink: "",
        //   },
        // }
      ];

    return (
        <div className="projects" id="projects">
            <motion.div 
            className="title" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
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
                transition={{ duration: 0.6 }}
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