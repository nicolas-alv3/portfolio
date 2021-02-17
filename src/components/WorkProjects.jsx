import React from 'react';
import { Card,Image,Button,Progress, Icon } from 'semantic-ui-react';
import "../style/Education.css";
import ProjectModal from './ProjectModal';

export default function WorkProjects(props) {
    return (
        <div className="education-background-languages">
                <h1 className="education-title">Experiencia laboral</h1>
                <p className="education-text">A mediados de 2020 comencé a programar sistemas de stock, ventas y facturación para clientes personales.</p>
                <div className="education-card-group-container">
                <Card.Group >
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://i.pinimg.com/originals/4b/31/13/4b311365c1525d7ca2cfa273a7819142.jpg'
                            />
                            <Card.Header>DistribuidoraJD</Card.Header>
                            <Card.Meta>Distribuidora de Golosinas</Card.Meta>
                            <Card.Description>
                                El proyecto se centra en brindarle al cliente una forma comoda y eficiente de vender, facturar y controlar su stock. Fue entregada la version 1.0 y actualmente continuo trabajando en el para extender compras y balances.
                            <Card.Meta>
                            <Progress className="education-progress" percent={60} progress color="yellow"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <ProjectModal 
                                name="Distribuidora JD"
                                meta="Distribuidora de kioscos y almacenes"
                                description="El proyecto se basa en la sarasas de lña sacasc asd as d  fgfg fg sf g  sdfsdfsdfsfd sd f sdf  s sdfsdfsdf sdf"
                                imgURLs={[]}
                                stack={["Java","Spring","React","MaterialUI","API Rest","MySQL","Hibernate","JSReport"]}
                                ytId={"ge89vTz5x_k"}

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
                            <Card.Header>Los Hermanos</Card.Header>
                            <Card.Meta>Corralón y Ferretería Industrial</Card.Meta>
                            <Card.Description>
                                Este trabajo solucionó el problema de control de stock que afectaba al cliente. Además se realizó un sistema de actualización de precios por porcentajes y categorías que redujo el tiempo de trabajo por inflación.
                            <Card.Meta>
                            <Progress className="education-progress" percent={90} progress color="green"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <ProjectModal 
                                    name="Los Hermanos"
                                    meta="Corralón y ferretería industrial"
                                    description="El proyecto se basa en la sarasasasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                    imgURLs={[]}
                                    stack={["Kotlin","Spring","React","SemanticUI","API Rest","MySQL","Hibernate"]}
                                    githublink="https://github.com/nicolas-alv3/DistribuidoraJDBack"
                                    ytId="hij2fPb0EHY"
                                /> 
                        </Card.Content>
                    </Card>
                </Card.Group>
                </div>
            <div className="home-input-name-container">
                <Button 
                    circular 
                    className="greetings-button" 
                    onClick={ () => props.history.push("/workProjects")}
                    icon="arrow alternate circle right"
                    labelPosition="right"
                    color="purple"
                    content="Continuar"
                    />
            </div>
        </div>
    );
}