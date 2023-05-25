import Image from "next/image";
import { delay, motion } from 'framer-motion';

function Skills() {
   
    return (
        <motion.div 
            className="skills" 
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
                delay: 2
            }}
        >
            <div className="title">
                <h2>Skills</h2>
            </div>
            <div className="skills-container">
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.2 
                }}>
                    <Image src="/skills/html-5.png" alt="" width='110' height='110'/>
                </motion.div>
                <motion.div className="skills-container-img"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }} 
               variants={{
                   visible: { opacity: 1, y: 0 },
                   hidden: { opacity: 0, y: 25 }
               }}
               transition={{
                   duration: 0.3,
                   ease: "easeInOut",
                   delay: 0.3 
               }}>
                    <Image src="/skills/css-3.png" alt="" width='110' height='110'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.4
                }}>
                    <Image src="/skills/js.png" alt="" width='90' height='90'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.5
                }}>
                    <Image src="/skills/react.png" alt="" width='100' height='90'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6
                }}>
                    <Image src="/skills/redux.png" alt="" width='140' height='140'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.7
                }}>
                    <Image src="/skills/nextjs.png" alt="" width='100' height='100'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.8
                }}>
                    <Image src="/skills/framer-motion.png" alt="" width='100' height='90'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.9
                }}>
                    <Image src="/skills/sass.png" alt="" width='100' height='100'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1
                }}>
                    <Image src="/skills/bootstrap.png" alt="" width='120' height='110'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.1
                }}>
                    <Image src="/skills/nodejs.png" alt="" width='160' height='100'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.2
                }}>
                    <Image src="/skills/express.png" alt="" width='110' height='110'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.3
                }}>
                    <Image src="/skills/sequelize.png" alt="" width='200' height='200'/>
                </motion.div>
                <motion.div className="skills-container-img"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 25 }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.4
                }}>
                    <Image src="/skills/postgre.png" alt="" width='110' height='110'/>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Skills;