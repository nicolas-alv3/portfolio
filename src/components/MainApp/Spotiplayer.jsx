import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'semantic-ui-react';
import '../../style/MainStyle/spotiplayer.css'

export default function SpotiPlayer() {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    return <div className="spotify-player">
            {!show && <div className="podcast-trigger" onClick={() => setShow(prevState => !prevState)}><h3>{t("todavia no escuchaste")}</h3><Icon name="chevron circle up"  size="large"/></div>}
            {show && <iframe title="La nave geek" style={{borderRadius:"12px 12px 0 0"}} src="https://open.spotify.com/embed/episode/1bnDfIAfD83vvTK1s5QPFD?utm_source=generator&t=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>}
        </div>
}