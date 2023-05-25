import Image from "next/image";
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div 
            className="about" 
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <div className="title">
                <h2>About me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Hola!👋, me llamo Alexander, soy un apasionado del desarrollo 
                        Full Stack con una sólida formación en un campo técnico relacionado. Mi
                        interés por la tecnología y la programación me impulsó
                        a adentrarme en el mundo del desarrollo web, donde he
                        adquirido habilidades en la creación de aplicaciones y
                        sitios web completos.

                    </p>
                    <p className="about-grid-info-text">
                        Mi trayectoria profesional refleja mi compromiso y
                        entusiasmo por enfrentar nuevos desafíos. Siempre
                        estoy buscando oportunidades para expandir mis
                        conocimientos y mantenerme actualizado en las últimas
                        tendencias del desarrollo web.
                    </p>
                    <p className="about-grid-info-text">
                        Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
                    </p>
                    <ul className="about-grid-info-list">
                        <li className="about-grid-info-list-item">Next.js</li>
                        <li className="about-grid-info-list-item">Redux Toolkit</li>
                        <li className="about-grid-info-list-item">Sass</li>
                        <li className="about-grid-info-list-item">Framer Motion</li>
                        <li className="about-grid-info-list-item">React</li>
                        <li className="about-grid-info-list-item">Node.js</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/profile2.jpg" alt="profile" fill/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default About;