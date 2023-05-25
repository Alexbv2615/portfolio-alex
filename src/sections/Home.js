import Button from "@/components/Button";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div className="home">
            <motion.h1 
                className="home-title"
                initial={{ opacity: 0, y: 5}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6
                }}
            >
                Hi 👋, I am 
            </motion.h1>
            <motion.h2 
                className="home-title-large"
                initial={{ opacity: 0, y: 5}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.75
                }}
            >
                Alexander Noel
            </motion.h2>
            <motion.div
                className="home-title-large home-title-sub"
                initial={{ opacity: 0, y: 5}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.05
                }}
            >
                <TypeAnimation 
                    sequence={[
                    'Full Stack Developer',
                    3000,
                    'Front end Developer',
                    3000,
                    'Freelancer',
                    3000
                    ]}
                    speed={30}
                    wrapper="span"
                    repeat={Infinity}
                />
            </motion.div>
            
            <motion.p 
                className="home-text"
                initial={{ opacity: 0, y: 5}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.35
                }}
            >
                Soy un Desarrollador Web Full Stack, me desenvuelvo bien tanto en el Front-end como en el Back-end del desarrollo. Siempre busco aprender y dominar nuevas tecnologías, en especial las que me demanden 👨‍💻.
            </motion.p>
            <motion.div 
                className="home-button"
                initial={{ opacity: 0, y: 5}}
                animate={{ opacity: 1, y: 0}}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.65
                }}
            >
                <Button text="Check out my projects" link="/#projects" />
            </motion.div>
        </div>
    )
};

export default Home;