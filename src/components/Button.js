const { default: Link } = require("next/link");


function Button({text, link}) {
    return (
        <Link href={link} className="btn">{text}</Link>
    )
}

export default Button;