import React from 'react';
import '../../style/MainStyle/banner.css';
import rocketUrl from '../../resources/rocket.svg'

export default function Banner() {
    return <div className="banner-container box-shadow">
        <div className="banner-round"/>
        <h1 className="banner-name">Nicolás Álvarez</h1>
        <h3 className="banner-description"> Desarrollador fullstack Argentino, especializado en Java y ReactJS</h3>
        <button className="btn btn-primary">Hire me!</button>
        <div className="banner-rocket">
            <p>Scroll</p>
            <div>
                <img alt="rocket" src={rocketUrl}/>
            </div>
        </div>
    </div>
}