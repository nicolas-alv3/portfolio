import React from "react";
import '../../style/MainStyle/navbar.css';
import logoUrl from '../../resources/logo_violet.png';
import notification from '../../resources/notification.mp3'

export default function Navbar() {
    const playAudio = () => {
        const audio = new Audio(notification);
        audio.play()
    }
    return <div className="navbar-container box-shadow">
        <img src={logoUrl} className="navbar-logo"/>
        <button className="btn btn-secondary">Experiencia</button>
        <button className="btn btn-secondary">Estudios</button>
        <button className="btn btn-secondary">Sobre mí</button>
        <button onClick={playAudio} className="btn btn-primary">Contactame</button>
    </div>
}