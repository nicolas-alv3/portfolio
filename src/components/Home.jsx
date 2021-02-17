import React from 'react';
import { Button, Form, Icon, Input } from 'semantic-ui-react';
import "../style/Home.css";

export default function Home(props) {
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            props.history.push({ pathname: '/greetings', state: { } });
        }
    }
    return (
        <div className="home-background">
            <div className="home-container">
                <img alt="" className="home-image-container" />
                    <h1 className="home-welcome">Bienvenid@!</h1>
                    <h2 className="home-text">Mi nombre es Nico, y el tuyo?</h2>
                    <div className="home-input-name-container">
                        <Input 
                            iconPosition="right"
                            >
                            <Icon name='arrow alternate circle right' color="green"/>
                            <input
                                className="home-input-name"
                                placeholder='Ingresa tu nombre :)' 
                                value={props.name}
                                onChange={ (e) => props.setName(e)}
                                onKeyDown={ (e) => handleKeyDown(e)}
                                />
                        </Input>
                    </div>
            </div>
        </div>
    );
}