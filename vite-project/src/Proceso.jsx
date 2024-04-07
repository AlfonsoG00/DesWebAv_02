import { useState } from 'react'
import BaseImg from './assets/Tier1_Final.png'
import Cucaracha from './assets/Personajes.png'
import Gusano from'./assets/Personajes2.png'
import Idea from './assets/Ilustración01.png'
import Idea2 from './assets/Ilustración.png'

import './CCS/procesopag.css'
import NoticiasProceso from './Noticiasproceso.jsx'

function Proceso(){
    return(
        <>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200..700&display=swap')
                </style>
            </head>
            <h1 className='titulo'>PROCESO DE DESAROLLO "DISASTER GARDEN"</h1>
            <hr></hr>
            <NoticiasProceso tittle='ILUSTRACIÓN' text='Disaster Garden es un juego de cartas, en donde tu eres un insecto agricultor, buscando tener un jardin que le de un toque agradable a tu vivienda.' 
            text2='Pero para poder lograr todo eso debemos de afrontar grandes retos y sobrevivir a los demás insectos que buscan destruir tus plantas y a las catastrofes climatológicas que se presentan para ti un diminuto insecto.'/>
        
            <div className='imgnoticia1'>
                <img src={BaseImg} className='imagendg' alt="ImagenPortada"/>
            </div>
            <NoticiasProceso tittle='PROPUESTA DE ILUSTRACIÓN PARA LAS CARTAS' text='La realización de las cartas se busca que sea un estilo cartoon o más estilizado a como serían en la vida real, las dos presentadas
            en la parte superior son solo bocetos o ideas que proximamente se descarten, ya que se ven muy simples y con poca personalidad.'
            text2='Estas dos cartas son algunos de los insectos que te ayudarán a poder tener un bello jardín, la cucaracha que con su habilidad de poder dar agua a las plantas te ayudará a
            que no se marchite por sequía, el gusano apoyará con el abono suficiente para poder hacer que tu planta crezca con los nutrientes necesarios.'/>

            <div className='imgnoticia1'>
                <img src={Cucaracha} className='imagendg' alt="Skecthcucaracha"/>
                <img src={Gusano} className='imagendg' alt="SkectGusano"/>
            </div>
            <NoticiasProceso tittle='DONDE NACE LA IDEA' text='Este juego posee mécanicas de jugador individual pero tambien tiene modo coperativo dependiendo el evento que este en ese momento
            en este momento se esta probando para ver si es viable mecanicamente y es divertido, se han hecho algunas prubeas y se ha visto que el tiempo de juego es de 1 hora aprox, 
            el juego esta hehco para 5 jugadores con 48 cartas de plantas que dan diferentes puntos para obtener la victoria y con varias cartas de apoyos de otros insectos.'/>
            <div className='imgnoticia1'>
                <img src={Idea} className='imagendg' alt="Skecthcucaracha"/>
                <img src={Idea2} className='imagendg' alt="Skecthcucaracha"/>
            </div>

        
        </>
    )
}

export default Proceso