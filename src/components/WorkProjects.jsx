import React from 'react';
import { Card,Image,Button,Progress, Icon } from 'semantic-ui-react';
import "../style/Education.css";
import ProjectModal from './ProjectModal';

const DistribuidoraJD = {
    name : "DistribuidoraJD",
    meta:"Distribuidora de kioscos y almacenes",
    description:"Dentro de la aplicación se pueden cargar productos, editarlos y eliminarlos, además modificar su stock desde una pestaña específica y vender identificando productos por código y descripción. También se pueden buscar productos y ventas por separado. Una vez finalizada la venta, se puede ver el comprobante de venta en una plantilla de JSReport.\n Actualmente me encuentro desarrollando la parte de Balances y Compras con el objetivo futuro de realizar listas de compra automáticas y realizar balances contables mensuales.",
    stack:["Java","Spring","React","MaterialUI","API Rest","MySQL","Hibernate","JSReport", "UnitTesting"],
    githublink:"https://github.com/nicolas-alv3/DistribuidoraJDBack",
    ytId:"ge89vTz5x_k",
}

const LosHermanos = {
    name:"Los Hermanos",
        meta:"Corralón y ferretería industrial",
        description:"Dentro de la aplicación se pueden cargar productos, editarlos y eliminarlos, además modificar su stock desde una pestaña específica y vender identificando productos por código y descripción. También existe un buscador de productos por similtud de palabras. Se ha agregado a pedido del cliente un apartado de modificación de precios por producto y por porcentaje. \n Actualmente me encuentro realizando modificaciones pequeñas para mejorar la experiencia del usuario dado que el programa se utiliza diariamente.",
        stack:["Kotlin","Spring","React","SemanticUI","API Rest","MySQL","Hibernate","UnitTesting"],
        githublink:"https://github.com/nicolas-alv3/Corralon-y-ferreteria-los-dos-hermanos",
        ytId:"hij2fPb0EHY",
}

export default function WorkProjects(props) {
    return (
        <div className="home-background">
                <h1 className="education-title">Experiencia laboral <Icon size="small" name="terminal" color="red"/></h1>
                <hr color="gray" style={{margin:"-20px 3vw 10px 3vw"}}/>    
                <p className="education-text">A mediados de 2020 comencé a programar sistemas de stock, ventas y facturación para clientes personales.</p>
                <div className="education-card-group-container">
                <Card.Group >
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='data:image/png;base64,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'
                            />
                            <Card.Header>DistribuidoraJD</Card.Header>
                            <Card.Meta>Distribuidora de Golosinas</Card.Meta>
                            <Card.Description>
                                El proyecto se centra en brindarle al cliente una forma comoda y eficiente de vender, facturar y controlar su stock.
                                 Fue entregada la version 1.0 y actualmente continuo trabajando en el para extender las secciones de compras y balances.
                            <Card.Meta>
                            <Progress className="education-progress" percent={65} progress color="olive"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <ProjectModal 
                                name={DistribuidoraJD.name}
                                meta={DistribuidoraJD.meta}
                                description={DistribuidoraJD.description}
                                stack={DistribuidoraJD.stack}
                                githublink={DistribuidoraJD.githublink}
                                ytId={DistribuidoraJD.ytId}

                            />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='data:image/png;base64,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'
                            />
                            <Card.Header>Los Hermanos</Card.Header>
                            <Card.Meta>Corralón y Ferretería Industrial</Card.Meta>
                            <Card.Description>
                                Este trabajo solucionó el problema de control de stock que afectaba al cliente.
                                 Además se realizó un sistema de actualización de precios por porcentajes
                                  y categorías que redujo el tiempo del modificación de precios por ajuste de inflación.
                            <Card.Meta>
                            <Progress className="education-progress" percent={90} progress color="green"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <ProjectModal 
                                    name={LosHermanos.name}
                                    meta={LosHermanos.meta}
                                    description={LosHermanos.description}
                                    stack={LosHermanos.stack}
                                    githublink={LosHermanos.githublink}
                                    ytId={LosHermanos.ytId}
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
                    onClick={ () => props.history.goBack()}
                    icon="arrow alternate circle left"
                    labelPosition="left"
                    color="white"
                    content="Regresar"
                    />
                <Button 
                    circular 
                    className="greetings-button" 
                    onClick={ () => props.history.push("/personalProjects")}
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