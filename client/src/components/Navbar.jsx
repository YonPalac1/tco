import { useEffect, useState } from "react";
import icon from "../assets/images/tco-icon.webp"
import instagram from "../assets/images/instagram.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
    }

    return <nav>
        <div className="container desk">
            <div className="logo">
                <img src={ icon } alt="tu contador online icon" />
                <p>Tu contador <br /> online</p>
            </div>
            <div className="items">
                <ul className="container">
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#como-trabajamos">Como Trabajamos</a></li>
                    <li><a href="#hablemos">Contacto</a></li>
                    <li><a href="#preguntas-frecuentes">Preguntas</a></li>
                </ul>
            </div>
            <div className="contact">
                <a href=""><img src={ instagram } alt="instagram de Tucontadoronline" /></a>
            </div>
        </div>

        <div className="container mobile">
            <div className="logo">
                <img src={icon} alt="tu contador online icon" />
            </div>
            <button className="burger" onClick={handleMenuClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </button>

            <div className={`items ${menuOpen ? "open" : ""}`}>
                <ul className="container">
                    <li><a href="#nosotros">* Nosotros *</a></li>
                    <li><a href="#servicios">* Servicios *</a></li>
                    <li><a href="#como-trabajamos">* Como Trabajamos *</a></li>
                    <li><a href="#hablemos">* Agendá un meet *</a></li>
                    <li><a href="#preguntas-frecuentes">* Preguntas *</a></li>
                </ul>
            </div>
        </div>
    </nav>
}
export default Navbar;