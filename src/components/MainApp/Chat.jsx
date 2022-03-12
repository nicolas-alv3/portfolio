import { Widget } from 'react-chat-widget';
import React, { useEffect } from 'react';
import notification from '../../resources/notification.mp3'
import { addResponseMessage } from 'react-chat-widget';
import profileAvatar from '../../resources/foto-cv-square.jpeg'
import { getEmailLinkFor, getSpotifyPodcastLink, getSpotifyPodcastProgrammingEpisodeLink } from '../../service/socialMediaService';

export default function Chat() {
    useEffect(() => {
        setTimeout(() => {
            const audio = new Audio(notification);
                    audio.play();
                    addResponseMessage("Hola, gracias por la visita! Al final del sitio se encuentran los links de contacto.");
                    addResponseMessage(`Por cierto, todavía no has escuchado [mi podcast?](${getSpotifyPodcastLink()})`)
                    addResponseMessage(`Te recomiendo el capítulo sobre [Programación](${getSpotifyPodcastProgrammingEpisodeLink()}), nos vemos allá!`)                    
        }, 10000);
    }, [])
    
    const handleNewUserMessage = (newMessage) => {
        window.open(getEmailLinkFor("nicolas.alv3@gmail.com", "Contacto vía portfolio", newMessage),"_blank")
      };

    return (<Widget 
                title="¡Bienvenid@!"
                subtitle=""  
                handleNewUserMessage={handleNewUserMessage}
                senderPlaceHolder="Hola Nico, quiero contactarme con vos"
                profileAvatar={profileAvatar}
                />)
}