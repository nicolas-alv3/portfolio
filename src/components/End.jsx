import React from 'react';
import { Icon, Button, Segment, Popup } from 'semantic-ui-react';
import "../style/Home.css";

export default function End(props) {
    return (
        <div className="home-background">
            <div className="home-container">
                <img alt="" className="home-image-container" />
                    <h1 className="home-welcome end">Gracias por tu tiempo {props.name}!</h1>
                    <h2 className="home-text end-text">Espero que te haya gustado el recorrido</h2>
                    <Segment inverted size="large" className="contact-container">
                        <Popup content="Click for a surprise!" trigger={<div class="end-link" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=nicolas.alv3@gmail.com&su=Contacto&body=Hola Nico, ¿como estas? Me interesa tu perfil!","_blank")}><Icon name="mail" size="big" color="yellow" /> nicolas.alv3@gmail.com</div>}/>
                        <Popup content="&#127873;" trigger={<div class="end-link" onClick={() => window.open(encodeURI(`https://wa.me/+541168896776?text=Hola Nico! ¿Como estas? me interesó tu perfil :)`), '_blank')}><Icon name="phone" size="big" color="blue" /> +54 11 68896776</div>}/>
                        <Popup content="Vamos allá!" trigger={<div class="end-link" onClick={() => window.open("https://www.linkedin.com/in/nicol%C3%A1s-sebastian-alvarez/","_blank")}><Icon name="linkedin" size="big" color="blue" /> Nicolas Alvarez</div>}/>
                    </Segment>
                <div className="buttons-container" style={{marginTop :"3vw"}}>
                    <Button 
                        inverted
                        circular 
                        className="" 
                        onClick={ () => props.history.push("/")}
                        icon="arrow alternate circle left"
                        labelPosition="left"
                        color="white"
                        content="Inicio"
                    />
                </div>
                <b className="extra-end" ><Icon name="github" />Tambien podés ver el <a href="https://github.com/nicolas-alv3/portfolio">código</a> de este portfolio</b>
            </div>
        </div>
    );
}