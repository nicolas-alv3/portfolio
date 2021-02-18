import React, { useEffect } from 'react';
import { Card,Image,Button,Progress, Icon } from 'semantic-ui-react';
import "../style/Education.css";

export default function Languages(props) {

    const previousPage = () => props.history.goBack()

    const nextPage = () => props.history.push("/workProjects")

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
                <h1 className="education-title">Inglés<Icon size="small" name="pencil alternate" color="brown"/></h1>
                <hr color="gray" style={{margin:"-20px 3vw 10px 3vw"}}/>
                <p className="education-text">Me formé en este idioma durante 8 años y decidí formalizar el conocimiento por medio del FCE (First Certificate Exam) </p>
                <div className="education-card-group-container">
                <Card.Group >
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://i.pinimg.com/originals/4b/31/13/4b311365c1525d7ca2cfa273a7819142.jpg'
                            />
                            <Card.Header>Curso de Inglés con orientación docente.</Card.Header>
                            <Card.Meta>2010-2018</Card.Meta>
                            <Card.Description>
                                Comencé a estudiar Ingles en UTN FRA el primer año, luego me cambié a 
                                la escuela New English School de Florencio Varela, donde realicé los 6 años del profesorado y un año de preparación para rendir el First.
                            <Card.Meta>
                            <Progress className="education-progress" percent={100} progress color="green"/>
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
                                onClick={ () => window.open("http://ar.near-place.com/instituto-nes-25-de-mayo-de-1810-2198-florencio-varela/es")}
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
                            <Card.Header>First Certificate Exam (Cambridge University)</Card.Header>
                            <Card.Meta>2018</Card.Meta>
                            <Card.Description>
                                Luego de un año de capacitación intensiva, aprobé el examen con grado C.
                                Este grado corresponde al un nivel intermedio-avanzado representado como B2 en la escala de Cambridge
                            <Card.Meta>
                            <Progress className="education-progress" percent={100} progress color="green"/>
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
                                onClick={ () => window.open("https://www.cambridgeenglish.org/es/exams-and-tests/first/")}
                                content="Sitio"
                                />
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
            <div className="language-layer" />
        </div>
    );
}