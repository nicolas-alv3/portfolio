import React from 'react';
import '../../style/MainStyle/experience.css'
import LampIcon from './icons/LampIcon';

const items = [
    { title: "Desarrollador fullstack Java+React", period: "Julio 2021 - Presente", items: ["Maquetado y desarrollo frontend utilizando microservicios y diseños de Figma","Desarrollo de servicios web en Java con Springboot","Contacto con clientes en Inglés","Cliente Hyros tracking AI"], imgURL:"https://ensolvers.com/wp-content/uploads/2020/12/logo_ensolvers_2020.jpg" },
    { title: "Desarrollador fullstack Java+Angular", period: "Marzo 2021 - Julio 2021", items: ["Maquetado y desarrollo frontend consumiendo servicios REST","Desarrollo de servicios web en Java con Spring","Cliente BBVA área seguros"], imgURL:"https://ii.ct-stc.com/5/logos/empresas/2019/07/05/f977bb3068314eeea5bf170321314thumbnail.png" },
    { title: "Docente Instructor", period: "Julio 2021 - Presente", items: ["Preparación de clases prácticas","Corrección de parciales","Materia 'Introducción a la programación'"], imgURL:"https://lh3.googleusercontent.com/proxy/wFzn6LFV-qOgWO_AeS3wSv0ZdO30XZ-kowz67SzknCP6BuQFXQc9FtDrh6374aPUlJBFKkghjsHyInWpt9Mx0vOTQCHvOB58xGZotEwYj7OLJrwAqET2fBgcwEuPCqR_kS-5misLSqLzkqY" },
]

export default function Experience() {
    return(<div className="section-container">
    <h1 className="title">Experiencia Laboral</h1>
    {
        items.map( i => <div className="experience-item box-shadow">
        <div>
            <ul>
                <li>
                    <h3>{i.title}
                    <h4>{i.period}</h4></h3>
                    <ul>
                        {i.items.map( item => <li><span><LampIcon />{item}</span></li> )}
                    </ul>
                </li>                
            </ul>
        </div>
        <img src={i.imgURL} />
    </div>)
    }
    </div>
    )
}