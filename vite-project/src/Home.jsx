import { useState } from 'react'
import DG from './assets/Pantalla.png'
import './CCS/homecss.css'
import Noticias from './Noticias.jsx'
import Orquidea from './assets/Ejemplo01.png'
import Trabajo from './assets/1111.png'

function Home(){
    return(
        <>  
            <div className='img1'>
                <img src={DG} className='Portada' alt='SoloYo'/>
            </div>
            <div className='noticiaorden'>
                <Noticias img={Orquidea} tittle='ETAPA ILUSTRACIÓN' desc1='Se tienen en mente las proximas
                ideas a ilustrar y se estan proponiendos nuevas ideas para que las ilustraciones sean más atractivas y llamativas
                para el público, como podemos ver en esta ilustración, es una carta de una flor llamada "Orquídea Mariposa" en donde será
                una de las 48 flores a plantar en el jeugo Disaster Garden, esta posee identifativos para que el juagdor pueda ver la
                información necesaria para poder jugar de una manera efectiva y fácil, la carta posee las siguientes características:
                1 - Los puntos que otoga al jugador cuando la logra plantar (3), 2 - El nombre la carta (Orquídea Mariposa), 3 - 
                La ilustración y el color de fondo ayudan a clasificar a la plata para saber el tipo de planta que es, 4 - Lo que necesita
                para poder crecer (iconos de insectos), 5 - El efecto que da al ser plantada'/>
            </div>
            <div className='noticiaordern'>
                <Noticias img={Trabajo} tittle='Detrás de cámara' desc1='Las ilustraciones se trabajaron en la aplicación de dibujo 
                "Clip Studio Paint" y los iconos, los textos y la maquetación en general en Adobe Illustrator ya que facilita más el hecho de 
                grafos y tiene una major funcionalidad al momento de diseñar'/>
            </div>

        </>
    )
}

export default Home