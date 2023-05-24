import Button from "@/components/Button";


function Contact() {
    return (
        <div className="contact" id="contact">
            <h2 className="contact-title">What&apos;s Next?</h2>
            <h2 className="contact-sub-title">Get In Touch</h2>
            <p className="contact-text">
            Actualmente estoy en búsqueda activa de nuevas oportunidades laborales y estoy abierto a explorar roles desafiantes. Si tienes alguna pregunta o conoces alguna oportunidad que pueda ser de mi interés, no dudes en contactarme. Estaré encantado de escuchar y responder lo más pronto posible.
            </p>
            <div className="contact-cta">
                <a className="codepen-button" href="mailto: alexbv2615@gmail.com"><span>Say Hello</span></a>
            </div>
        </div>
    )
}

export default Contact;