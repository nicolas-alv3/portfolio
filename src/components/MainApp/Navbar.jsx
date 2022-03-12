import React from "react";
import '../../style/MainStyle/navbar.css';
import logoUrl from '../../resources/logo_violet.png';

export default function Navbar() {

    const goTo = (componentId) => {
        var elmnt = document.getElementById(componentId);
        elmnt.scrollIntoView();
    }
    return <div className="navbar-container box-shadow">
        <img src={logoUrl} className="navbar-logo" alt="logo"/>
        <button className="btn btn-secondary" onClick={() => goTo("Experiencia laboral")}>Experiencia</button>
        <button className="btn btn-secondary" onClick={() => goTo("Educación e idiomas")}>Estudios</button>
        <button className="btn btn-secondary" onClick={() => goTo("Proyectos personales")}>Proyectos personales</button>
        <button className="btn btn-primary" onClick={() => goTo("contact-me")}>Contactame</button>
    </div>
}