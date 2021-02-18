import React from 'react';
import { Card,Image,Button,Progress, Icon } from 'semantic-ui-react';
import "../style/Education.css";
import ProjectModal from './ProjectModal';
import mirtapImg from "../resources/Mirtapp.png"
import viandasYaImg from "../resources/ViandasYa.png"

const Mirtapp = {
    name : "Mirtapp",
    meta:"Sugerencias de pedidos para mayoristas",
    description:"Mirtapp surge de la problematica de escribir pedidos a mano, siendo que tienen una lógica comun y un producto puede ser comprado en multiples lugares. La aplicación sugiere la forma mas eficiente de conseguir la mercaderia faltante sin que te olvides de nada. \n Actualmente solo se encuentra operativo el backend, el frontend esta siendo desarrollado con firebase hosting y google signin.",
    stack:["Kotlin","OAuth","UnitTesting", "TravisCI","Spring","React","MaterialUI","API Rest","PostgreSQL","Hibernate"],
    githublink:"https://github.com/nicolas-alv3/mirtapp-back",
    srcImg : mirtapImg
}

const ViandasYa = {
    name:"Viandas Ya",
        meta:"Pedidos de viandas empresariales",
        description:"Proyecto que desarrolle junto a un compañero para la materias Desarrollo de Aplicaciones UNQ, aquí apliqué e integré muchos de los conocimientos que me proporcionó la tecnicatura. Se trata de una aplicación con negocios, menues y usuarios donde se puede ordenar comida de un día para otro.",
        stack:["Java","Spring","React","API Rest","PostgreSQL","Hibernate","GoogleAuth","Heroku"],
        githublink:"https://github.com/nicolas-alv3/grupo-c1e-022020",
        srcImg : viandasYaImg
    }

export default function PersonalProjects(props) {
    return (
        <div className="home-background">
                <h1 className="education-title">Proyectos personales <Icon size="small" name="code" color="orange"/></h1>
                <hr color="gray" style={{margin:"-20px 3vw 10px 3vw"}}/>
                <p className="education-text">Con el pasar del tiempo aprendí a identificar problemas de la vida cotidiana y solucionarlos con informática</p>
                <div className="education-card-group-container">
                <Card.Group >
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://www.nicepng.com/png/full/128-1285086_green-icon-code-back-flat-icon-png.png'
                            />
                            <Card.Header>Mirtapp</Card.Header>
                            <Card.Meta>Realización de pedidos para mayoristas</Card.Meta>
                            <Card.Description>
                                El proyecto se centra en facilitar y mejorar la forma de realizar pedidos a mayoristas de negocios.
                            <Card.Meta>
                            <Progress className="education-progress" percent={65} progress color="olive"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <ProjectModal 
                                name={Mirtapp.name}
                                meta={Mirtapp.meta}
                                description={Mirtapp.description}
                                stack={Mirtapp.stack}
                                githublink={Mirtapp.githublink}
                                srcImg={Mirtapp.srcImg}
                            />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content className="eduaction-card">
                            <Image
                            floated='right'
                            size='mini'
                            src='https://www.nicepng.com/png/full/128-1285086_green-icon-code-back-flat-icon-png.png'
                            />
                            <Card.Header>ViandasYa</Card.Header>
                            <Card.Meta>Pedidos de viandas ejecutivas</Card.Meta>
                            <Card.Description>
                                Una aplicación de negocios, menues, compras y usuarios con un modelo complejo de programar desarrollada en la UNQ.
                            <Card.Meta>
                            <Progress className="education-progress" percent={90} progress color="green"/>
                            </Card.Meta>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <ProjectModal 
                                    name={ViandasYa.name}
                                    meta={ViandasYa.meta}
                                    description={ViandasYa.description}
                                    stack={ViandasYa.stack}
                                    srcImg={ViandasYa.srcImg}
                                    githublink={ViandasYa.githublink}
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
                    onClick={ () => props.history.push("/end")}
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