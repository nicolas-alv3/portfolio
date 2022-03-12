import React from 'react';
import { getEmailLinkFor, getLinkedinLink, getSpotifyPodcastLink, getTelegramLink } from '../../service/socialMediaService';
import '../../style/MainStyle/stats.css';

export default function Stats() {
    return (<div className="section-container">
        <h1 className="title" style={{marginBottom:0}}>Podés contactarme vía...</h1>
        <div className="stats-container">
            <img label="Send me a message!" alt="linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" onClick={() => window.open(getLinkedinLink(),"_blank")}/>
            <img alt="gmail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" onClick={() => window.open(getEmailLinkFor("nicolas.alv3@gmail.com", "Contacto vía portfolio", "Hey Nico, como estas?"),"_blank")} />
            <img alt="telegram" src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Telegram.png" onClick={() => window.open(getTelegramLink(), "_blank")} />
            <img alt="spotify" src="https://images.vexels.com/media/users/3/137413/isolated/preview/4acb8e52632aa9b7c874b878eaf02bc4-logotipo-del-icono-de-spotify.png" onClick={() => window.open(getSpotifyPodcastLink()) } />
        </div>
    </div>
    )
}