import React, { useEffect } from 'react';
import { Card,Image,Button, Icon } from 'semantic-ui-react';
import "../style/Education.css";
import PodcastModal from './PodcastModal';

export default function OnWeekends(props) {

    const previousPage = () => props.history.goBack()

    const nextPage = () => props.history.push("/end")

    const handleEnter = (e) => {
        if(e.keyCode === 13 || e.keyCode === 39)
            nextPage();
        if(e.keyCode === 37)
            previousPage();
    }


    useEffect(() => {
        window.addEventListener('keydown', handleEnter);
        return () => window.removeEventListener('keydown', handleEnter);
      });

    return (
        <div className="home-background">
                <h1 className="education-title">Y los findes... <Icon size="small" name="microphone" color="blue"/></h1>
                <hr color="gray" style={{margin:"-20px 3vw 10px 3vw"}}/>    
                <p className="education-text">Me gusta despejarme para volver a arrancar el lunes renovado!</p>
                <div className="education-card-group-container">
                    <Card.Group>
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://toppng.com/uploads/preview/microphone-transparent-background-png-recording-studio-mic-115632436336lx3xzdxwn.png'
                            />
                            <Card.Header>Grabo un podcast</Card.Header>
                            <Card.Meta>La nave Geek</Card.Meta>
                            <Card.Description>
                                Comencé a grabar un podcast en mayo de 2021 con el fin de difundir los cosas mas interesantes de la tecnología
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <PodcastModal/>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://w7.pngwing.com/pngs/146/525/png-transparent-29er-mountain-bike-bicycle-specialized-stumpjumper-cycling-bicycle-bicycle-frame-bicycle-mountain-biking.png'
                            />
                            <Card.Header>Pedaleo</Card.Header>
                            <Card.Meta>Cicloturista aficionado</Card.Meta>
                            <Card.Description>
                                Me gusta salir con amigos a pedalear destinos como la plata, brandsen o chascomús!
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                    </Card.Group>
                </div>
            <div className="buttons-container">
                <Button 
                    inverted
                    circular 
                    className="" 
                    onClick={ () => previousPage()}
                    icon="arrow alternate circle left"
                    labelPosition="left"
                    color="white"
                    content="Regresar"
                    />
                <Button 
                    circular 
                    className="greetings-button" 
                    onClick={ () => nextPage()}
                    icon="arrow alternate circle right"
                    labelPosition="right"
                    color="purple"
                    content="Continuar"
                    />
            </div>
            <div className="background-layer" />
        </div>
    );
}