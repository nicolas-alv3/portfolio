import React from 'react';
import { Button, Form, Icon, Input } from 'semantic-ui-react';
import "../style/Home.css";

export default function Home(props) {
    const [name, setName] = React.useState("")

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            props.history.push({ pathname: '/greetings', state: { recruiterName: name } });
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
                                value={name}
                                onChange={ (e) => setName(e.target.value)}
                                onKeyDown={ (e) => handleKeyDown(e)}
                                />
                        </Input>
                    </div>
            </div>
        </div>
    );
}