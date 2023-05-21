import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";


function Navbar(){

    const sectionLinks = [
        { name: "About", link: "/#about" },
        { name: "Skills", link: "/#skills" },
        { name: "Works", link: "/#works" },
        { name: "Contact", link: "/#contact" },
    ];


    return(
        <nav>
            <div className="wrapper">
                <div className="brand">
                    <Link href="https://www.linkedin.com/in/alexbv2615/">
                        <Logo/>
                    </Link>
                </div>
                <div className="nav-items">
                    <ul className="nav-items-list">
                        {
                            sectionLinks.map(({ name, link }) => (
                                <li key={name} className="nav-items-list-item">
                                    <Link href={link} className="nav-items-list-item-link">{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="nav-items-button">
                        <Button text="Curriculum Vitae" link="/cv-alex.pdf" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;