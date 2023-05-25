import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div 
            className="contact" 
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 }
            }}
        >
            <h2 className="contact-title">What&apos;s Next?</h2>
            <h2 className="contact-sub-title">Contáctame!</h2>
            <p className="contact-text">
            Actualmente estoy en búsqueda activa de nuevas oportunidades laborales y estoy abierto a explorar roles desafiantes. Si tienes alguna pregunta o conoces alguna oportunidad que pueda ser de mi interés, no dudes en contactarme. Estaré encantado de escuchar y responder lo más pronto posible.
            </p>
            <div className="contact-cta">
                <a className="codepen-button" href="mailto: alexbv2615@gmail.com"><span>Say Hello</span></a>
            </div>
        </motion.div>
    )
}

export default Contact;