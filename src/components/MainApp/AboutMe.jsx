import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../style/MainStyle/aboutMe.css';

export default function AboutMe() {
    const { t } = useTranslation();
    return <div id={"About me"} className="section-container about-me">
            <h1 className="title">{t("About me")}</h1>
            <div>
                <h3>{t("about-me-description")}</h3>
                <img alt=""/>
            </div>
    </div>
}