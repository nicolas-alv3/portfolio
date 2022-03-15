import { Widget } from 'react-chat-widget';
import React, { useEffect } from 'react';
import notification from '../../resources/notification.mp3'
import { addResponseMessage } from 'react-chat-widget';
import profileAvatar from '../../resources/foto-cv-square.jpeg'
import { getEmailLinkFor, getSpotifyPodcastLink, getSpotifyPodcastProgrammingEpisodeLink } from '../../service/socialMediaService';
import { useTranslation } from 'react-i18next';

export default function Chat() {
    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
            const audio = new Audio(notification);
                    audio.play();
                    addResponseMessage(t("Hola gracias por la visita"));
                    addResponseMessage(t("Por cierto todavia no has escuchado") +`(${getSpotifyPodcastLink()})`)
                    addResponseMessage(t("Te recomiendo el capítulo sobre") + `(${getSpotifyPodcastProgrammingEpisodeLink()})`+ t(", nos vemos allá!"))
        }, 10000);
    // eslint-disable-next-line
    }, [])
    
    const handleNewUserMessage = (newMessage) => {
        window.open(getEmailLinkFor("nicolas.alv3@gmail.com", "Contacto vía portfolio", newMessage),"_blank")
      };

    return (<Widget 
                title={t("¡Bienvenid@!")}
                subtitle=""  
                handleNewUserMessage={handleNewUserMessage}
                senderPlaceHolder={t("Hola Nico quiero contactarme con vos")}
                profileAvatar={profileAvatar}
                />)
}