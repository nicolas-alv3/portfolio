import React from 'react';
import { withRouter } from 'react-router';
import { Button} from 'semantic-ui-react';
import "../style/Greetings.css";

function Greetings(props) {
    const getGreetings = (hour) => {
        if(hour >= 13){
            if(hour >=19)
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
                    <h1 className="home-welcome greetings-welcome">{greetings} {props.location.state.recruiterName}</h1>
                    <h2 className="home-text greetings-text">Te voy a contar un poco sobre mí...</h2>
                    <div className="home-input-name-container">
                        <Button className="greetings-button" onClick={ () => props.history.push("/education")}>Continuar</Button>
                    </div>
            </div>
        </div>
    );
}

export default withRouter(Greetings)