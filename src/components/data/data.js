const DistribuidoraJD = {
    name : "DistribuidoraJD",
    meta:"Distribuidora de kioscos y almacenes",
    description:"Dentro de la aplicación se pueden cargar productos, editarlos y eliminarlos, además modificar su stock desde una pestaña específica y vender identificando productos por código y descripción. También se pueden buscar productos y ventas por separado. Una vez finalizada la venta, se puede ver el comprobante de venta en una plantilla de JSReport.\n Actualmente me encuentro desarrollando la parte de Balances y Compras con el objetivo futuro de realizar listas de compra automáticas y realizar balances contables mensuales.",
    stack:["Java","Spring","React","MaterialUI","API Rest","MySQL","Hibernate","JSReport", "UnitTesting"],
    githublink:"https://github.com/nicolas-alv3/DistribuidoraJDBack",
    ytId:"ge89vTz5x_k",
}

const gliderInfo = {
    name : "Glider software",
    meta:"Emprendimiento de software",
    description:"Hace un tiempo decidí ponerle un nombre a la serie de trabajos independientes que realicé, generando una marca que me permita conseguir mas y mejores clientes.",
    stack:[],
    githublink:"",
}

const LosHermanos = {
    name:"Los Hermanos",
        meta:"Corralón y ferretería industrial",
        description:"Dentro de la aplicación se pueden cargar productos, editarlos y eliminarlos, además modificar su stock desde una pestaña específica y vender identificando productos por código y descripción. También existe un buscador de productos por similtud de palabras. Se ha agregado a pedido del cliente un apartado de modificación de precios por producto y por porcentaje. \n Actualmente me encuentro realizando modificaciones pequeñas para mejorar la experiencia del usuario dado que el programa se utiliza diariamente.",
        stack:["Kotlin","Spring","React","SemanticUI","API Rest","MySQL","Hibernate","UnitTesting"],
        githublink:"https://github.com/nicolas-alv3/Corralon-y-ferreteria-los-dos-hermanos",
        ytId:"hij2fPb0EHY",
}

const PomeloBebes = {
    name:"Pomelo Bebes",
        meta:"Tienda de ropa online",
        description:"El cliente llego con la idea de hacer un catalogo online, a lo que ofrecí utilizar los microservicios de whatsapp para completar el ciclo de venta, pudiendo integrar algun metodo de pago en el futuro. Realmente aprendi mucho de Angular y sodifiqué mis conocimientos en Javascript y diseño",
        stack:["Angular","Bootstrap","Reactive forms"],
        ytId:"-ZIlGy2ew0g",
}


const workItems = [
    { title: "Desarrollador fullstack Java+React", period: "Julio 2021 - Presente", items: ["Maquetado y desarrollo frontend utilizando microservicios y diseños de Figma","Desarrollo de servicios web en Java con Springboot","Contacto con clientes en Inglés","Cliente Hyros tracking AI"], imgURL:"https://www.empleosit.com.ar/files/pictures/ensolvers.png" },
    { title: "Docente Instructor", period: "Julio 2021 - Diciembre 2021", items: ["Preparación de clases prácticas","Corrección de parciales","Materia 'Introducción a la programación'"], imgURL:"https://deya.unq.edu.ar/wp-content/uploads/2018/08/UNQ-e1575983202836.jpg" },
    { title: "Desarrollador fullstack Java+Angular", period: "Marzo 2021 - Julio 2021", items: ["Maquetado y desarrollo frontend consumiendo servicios REST","Desarrollo de servicios web en Java con Spring","Cliente BBVA área seguros"], imgURL:"https://ii.ct-stc.com/5/logos/empresas/2019/07/05/f977bb3068314eeea5bf170321314thumbnail.png" },
]

const educationItems = [
    { title: "Tecnicatura en programación informática", period: "2016 - 2019", items: ["Desarrollo de aplicaciones fullstack","Patrones de diseño", "Programación orientada a objetos y funcional"], imgURL:"https://deya.unq.edu.ar/wp-content/uploads/2018/08/UNQ-e1575983202836.jpg" },
    { title: "Licenciatura en informática (En curso)", period: "2016 - Presente", items: ["Algoritmos de optimización","Computación formal"], imgURL:"https://deya.unq.edu.ar/wp-content/uploads/2018/08/UNQ-e1575983202836.jpg" },
    { title: "Inglés", period: "2012 - 2018", items: ["Nivel Upper-intermediate","Speaking", "Listening", "Writing"], imgURL:"https://upload.wikimedia.org/wikipedia/commons/9/9a/English_language.png" },
]

const projectItems = [
    { title: "Glider software", period: "2020 - Presente", items: ["Desarrollo de Software a medida", "Desarrollo de sistemas de ventas y facturación"], imgURL:"https://glidersoftware.web.app/static/media/gliderlogo.72278e90.png", modalInfo: gliderInfo},
   // { title: "La nave geek", period: "2016 - Presente", items: ["Algoritmos de optimización","Computación formal"], imgURL:"https://deya.unq.edu.ar/wp-content/uploads/2018/08/UNQ-e1575983202836.jpg", modalInfo: gliderInfo },
    { title: "Pomelo bebés", period: "2020", items: ["Backend en NodeJS","Frontend en Angular", "Deployment en firebase"], imgURL:"https://pomelobebes.web.app/assets/logo.jpeg", modalInfo: PomeloBebes },
    { title: "Distribuidora JD", period: "2016 - Presente", items: ["Backend en Java + Springboot","Frontend React + MaterialUI", "Reportes con JSReport"], imgURL:"https://raw.githubusercontent.com/nicolas-alv3/DistribuidoraJDFront/master/src/icons/logo.png", modalInfo: DistribuidoraJD },
    { title: "Ferretería y corralon Los Hermanos", period: "2021", items: ["Backend en Kotlin + Springboot","Frontend React + SemanticUI", "Desktop app con Electron"], imgURL:"https://raw.githubusercontent.com/nicolas-alv3/Corralon-y-ferreteria-los-dos-hermanos/master/frontend/src/icons/logo-horizontal.png", modalInfo: LosHermanos },
]


export const experienceTypes = {
    work : {
        title : "Experiencia laboral",
        items : workItems,
    },
    education : {
        title : "Educación e idiomas",
        items : educationItems
    },
    projects : {
        title : "Proyectos personales",
        items : projectItems,
    }
}


