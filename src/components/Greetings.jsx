import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'semantic-ui-react';
import "../style/Greetings.css";

function Greetings(props) {
    const getGreetings = (hour) => {
        if(hour >= 13){
            if(hour >19)
                return "Buenas noches"
            return "Buenas tardes"
        }
        return "Buenos días"

    }
    const greetings = getGreetings(new Date().getHours())
    return (
        <div className="home-background">
            <div className="home-container">
                <img alt="" className="home-image-container" />
                    <h1 className="home-welcome greetings-welcome">{greetings} {props.name}</h1>
                    <h2 className="home-text greetings-text">Te voy a contar un poco sobre mí...</h2>
                    <div className="buttons-container">
                        <Button 
                            inverted
                            circular 
                            className="" 
                            onClick={ () => props.history.goBack()}
                            icon="arrow alternate circle left"
                            labelPosition="left"
                            color="white"
                            content="Regresar"
                        />
                        <Button 
                            circular 
                            className="greetings-button" 
                            onClick={ () => props.history.push("/education")}
                            icon="arrow alternate circle right"
                            labelPosition="right"
                            color="purple"
                            content="Continuar"
                        />
                    </div>
                    <div className="background-layer" />
            </div>
        </div>
    );
}

export default withRouter(Greetings)