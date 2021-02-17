import React from 'react';
import { withRouter } from 'react-router';
import { Card,Image,Button,Progress, Icon } from 'semantic-ui-react';
import "../style/Education.css";

function Education(props) {
    return (
        <div className="education-background">
            <div className="education-container">
                <h1 className="education-title">Formación académica<Icon size="small" name="book" color="olive"/></h1>
                <hr color="gray" style={{margin:"-20px 3vw 10px 3vw"}}/>
                <p className="education-text">Durante los últimos 5 años la UNQ fue mi segunda casa, desarrollé capacidad para razonar problemas complejos y resolverlos en equipo en las siguientes carreras: </p>
                <div className="education-card-group-container">
                <Card.Group >
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://i.pinimg.com/originals/4b/31/13/4b311365c1525d7ca2cfa273a7819142.jpg'
                            />
                            <Card.Header>Tecnicatura en programación informática.</Card.Header>
                            <Card.Meta>2016-2019</Card.Meta>
                            <Card.Description>
                                Terminé de cursar las 24 materias en 2019, actualmente estoy finalizando el TIP (Trabajo de inserción profesional) para recibirme.
                            <Card.Meta>
                            <Progress className="education-progress" percent={99} progress color="green"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button 
                                style={{float:"right"}} 
                                basic 
                                circular
                                icon="info circle" 
                                color='blue' 
                                onClick={ () => window.open("http://www.unq.edu.ar/carreras/32-tecnicatura-universitaria-en-programaci%C3%B3n-inform%C3%A1tica.php")}
                                content="Sitio"
                                />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://i.pinimg.com/originals/4b/31/13/4b311365c1525d7ca2cfa273a7819142.jpg'
                            />
                            <Card.Header>Licenciatura en informática.</Card.Header>
                            <Card.Meta>2016-Presente</Card.Meta>
                            <Card.Description>
                                Habiéndo cursado 33 materias, solo me quedan 12 para finalizar, que representan un 27% y aproximadamente un año y medio de plan de estudios.
                            <Card.Meta>
                            <Progress className="education-progress" percent={73.3} progress color="yellow"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button 
                                style={{float:"right"}} 
                                basic 
                                circular
                                icon="info circle" 
                                color='blue' 
                                onClick={ () => window.open("http://www.unq.edu.ar/carreras/58-licenciatura-en-inform%C3%A1tica.php")}
                                content="Sitio"
                                />
                        </Card.Content>
                    </Card>
                </Card.Group>
                </div>
            </div>
            <div className="home-input-name-container">
                <Button 
                    circular 
                    className="greetings-button" 
                    onClick={ () => props.history.push("/languages")}
                    icon="arrow alternate circle right"
                    labelPosition="right"
                    color="purple"
                    content="Continuar"
                    />
            </div>
            <div className="education-layer-wrapper">
                <div className="education-layer" />
            </div>
        </div>
    );
}

export default withRouter(Education);