import Button from "@/components/Button";


function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Hi 👋, I am </h1>
            <h2 className="home-title-large">Alexander Noel</h2>
            <h3 className="home-title-large home-title-sub">Full Stack Developer</h3>
            <p className="home-text">
                Soy un Desarrollador Web Full Stack, me desenvuelvo bien tanto en el Front-end como en el Back-end del desarrollo. Siempre busco aprender y dominar nuevas tecnologías, en especial las que me demanden 👨‍💻.
            </p>
            <div className="home-button">
                <Button text="Check out my projects" link="/#projects" />
            </div>
        </div>
    )
};

export default Home;