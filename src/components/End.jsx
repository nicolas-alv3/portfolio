import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import "../style/Home.css";

export default function End(props) {
    return (
        <div className="home-background">
            <div className="home-container">
                <img alt="" className="home-image-container" />
                    <h1 className="home-welcome end">Gracias {props.name}!</h1>
                    <h2 className="home-text end-text">Espero que te haya gustado el recorrido</h2>
                    <div style={{fontSize:"1.5em", display:"flex",justifyContent:"space-around"}}>
                        <div><Icon name="mail" size="big" color="yellow" /> nicolas.alv3@gmail.com</div>
                        <div><Icon name="phone" size="big" color="blue" /> 1168896776</div>
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
            </div>
        </div>
    );
}