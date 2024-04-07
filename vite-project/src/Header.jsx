import { useState } from 'react'
import LogoByN from './assets/Logo_Sin_fondo.png'
import './CCS/headercss.css'

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
                <a href='' className='Link'>HOME</a>
                <a href='' className='Link'>PROCESS</a>
                <a href='/Nosotros.jsx' className='Link'>ABOUT US</a>
            </nav>
        </header>
        </>
    )
}

export default Header