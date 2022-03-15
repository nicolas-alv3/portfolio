import React from 'react';
import '../../style/MainStyle/banner.css';
import rocketUrl from '../../resources/rocket.svg'
import { useTranslation } from 'react-i18next';

export default function Banner() {
    const { t } = useTranslation();
    return <div className="banner-container box-shadow">
        <div className="banner-round"/>
        <h1 className="banner-name">Nicolás Álvarez</h1>
        <h3 className="banner-description"> {t("Argentinian Java & ReactJS Fullstack Developer")}</h3>
        <button className="btn btn-primary">Hire me!</button>
        <div className="banner-rocket">
            <p>Scroll</p>
            <div>
                <img alt="rocket" src={rocketUrl}/>
            </div>
        </div>
    </div>
}