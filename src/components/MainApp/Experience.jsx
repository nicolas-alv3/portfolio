import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../style/MainStyle/experience.css'
import { experienceTypes } from '../data/data';
import ProjectModal from '../ProjectModal';
import LampIcon from './icons/LampIcon';


export default function Experience(props) {

    const { t } = useTranslation();


    return (<div id={experienceTypes[props.type].title} className="section-container">
        <h1 className="title">{t(experienceTypes[props.type].title)}</h1>
        {
            experienceTypes[props.type].items.map(i => <div className="experience-item box-shadow">
                <div className="see-more-modal">
                        {props.type === "projects" && <ProjectModal
                        meta={i.modalInfo.meta}
                        description={i.modalInfo.description}
                        stack={i.modalInfo.stack}
                        githublink={i.modalInfo.githublink}
                        srcImg={i.modalInfo.srcImg}
                        ytId={i.modalInfo.ytId}
                        />}
                    </div>
                <div>
                    <ul>
                        <li>
                            <h3>{t(i.title)}
                                <h4>{t(i.period)}</h4></h3>
                            <ul>
                                {i.items.map(item => <li><span><LampIcon />{t(item)}</span></li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
                <img src={i.imgURL} alt="experience"/>
            </div>)
        }
    </div>
    )
}