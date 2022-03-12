import React from "react";
import '../../style/MainStyle/navbar.css';
import logoUrl from '../../resources/logo_violet.png';

export default function Navbar() {
    return <div className="navbar-container box-shadow">
        <img src={logoUrl} className="navbar-logo" alt="logo"/>
        <button className="btn btn-secondary">Experiencia</button>
        <button className="btn btn-secondary">Estudios</button>
        <button className="btn btn-secondary">Sobre mí</button>
        <button className="btn btn-primary">Contactame</button>
    </div>
}