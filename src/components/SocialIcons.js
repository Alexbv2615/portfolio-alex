import Link from "next/link";
import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";

function SocialIcons() {

    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://github.com/Alexbv2615" },
        { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/alexbv2615/" },
        { name: "Instagram", icon: <FiInstagram />, link: "https://instagram.com" },
        { name: "Twitter", icon: <FiTwitter />, link: "https://twitter.com/AlexanderNoelY1" },
    ];

    return (
        <div className="social-icons">
            <ul className="social-icons-list">
                {
                    socialLinks.map(({name, icon, link}) => (
                        <li key={name} title={name} className="social-icons-list-item">
                            <Link href={link} className="social-icons-list-item-link" target="_blank">{icon}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default SocialIcons;