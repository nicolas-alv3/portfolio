import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Experience from "./Experience";
import Stats from "./Stats";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import SpotiPlayer from "./Spotiplayer";

export default function MainApp() {

    // Design inspired in https://dribbble.com/shots/15293127/attachments/7047508?mode=media
    return(
        <div style={{position:"relative"}}>
            <Navbar/>
            <Banner />
            <AboutMe />
            <Experience type="work" />
            <Experience type="education" />
            <Experience type="projects" />
            <Stats />
            <Footer />
            <SpotiPlayer />
        </div>
    )
}