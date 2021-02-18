import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import "../style/Home.css";

export default function End(props) {
    return (
        <div className="home-background">
            <div className="home-container">
                <img alt="" className="home-image-container" />
                    <h1 className="home-welcome end">Gracias por tu tiempo {props.name}!</h1>
                    <h2 className="home-text end-text">Espero que te haya gustado el recorrido</h2>
                    <div className="contact-container">
                        <div><Icon name="mail" size="big" color="yellow" /> nicolas.alv3@gmail.com</div>
                        <div><Icon name="phone" size="big" color="blue" /> +54 11 68896776</div>
                        <div><Icon name="linkedin" size="big" color="blue" /> Nicolas Alvarez</div>
                    </div>
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