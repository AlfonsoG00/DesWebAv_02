import { useState } from 'react'
import LogoByN from './assets/Logo_Sin_fondo.png'
import './CCS/headercss.css'
import { Link } from 'react-router-dom'

function Header() {

    return(
        <>
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Oswald:wght@200..700&display=swap')
                @import url('https://fonts.googleapis.com/css2?family=Cuprum:ital,wght@0,400..700;1,400..700&display=swap')
                @import url('https://fonts.googleapis.com/css2?family=Arya:wght@400;700&family=Cuprum:ital,wght@0,400..700;1,400..700&display=swap')
            </style>
        </head>
        <header>
            <div className='logojuego'>
                <img src={LogoByN} className="logoDG" alt="Logo Juego"/>
                <h2 className='nombre'>Disaster Garden</h2>
            </div>
            <nav className='navbarra'>
                <Link className='Link' to = "/Home">NOTICIAS</Link>
                <Link className ='Link' to = "/Proceso">PROCESS</Link>
                <Link className ='Link' to ="/Nosotros">ABOUT US</Link>
            </nav>
        </header>
        </>
    )
}

export default Header