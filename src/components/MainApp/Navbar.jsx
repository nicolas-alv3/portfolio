import React from "react";
import '../../style/MainStyle/navbar.css';
import logoUrl from '../../resources/logo_violet.png';
import { Dropdown } from 'semantic-ui-react';
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation();

    const goTo = (componentId) => {
        var elmnt = document.getElementById(componentId);
        elmnt.scrollIntoView();
    }
    return <div className="navbar-container box-shadow">
        <img src={logoUrl} className="navbar-logo" alt="logo"/>
        <LanguageDropdown />
        <button className="btn btn-secondary" onClick={() => goTo("Experiencia laboral")}>{t("experience")}</button>
        <button className="btn btn-secondary" onClick={() => goTo("Educación e idiomas")}>{t("education")}</button>
        <button className="btn btn-secondary" onClick={() => goTo("Proyectos personales")}>{t("personal projects")}</button>
        <button className="btn btn-primary" onClick={() => goTo("contact-me")}>{t("contact me")}</button>
    </div>
}
// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const LanguageDropdown = () => (
  <Dropdown text={i18n.language.toUpperCase()} simple>
    <Dropdown.Menu>
      <Dropdown.Item text='EN' description="English" onClick={() => i18n.changeLanguage('en')} />
      <Dropdown.Item text='ES' description="Español" onClick={() => i18n.changeLanguage('es')}/>
    </Dropdown.Menu>
  </Dropdown>
)