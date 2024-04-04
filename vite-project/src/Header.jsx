import { useState } from 'react'
import LogoByN from './assets/Logo_Sin_fondo.png'
import './CCS/headercss.css'
import Nosotros from './Nosotros.jsx'

function Header() {

    return(
        <>
        <header>
            <div className='logojuego'>
                <img src={LogoByN} className="logoDG" alt="Logo Juego"/>
                <h2>Disaster Garden</h2>
            </div>
            <nav className='navbarra'>
                <a href='' className='Link'>Inicio</a>
                <a href='' className='Link'>Proceso</a>
                <a href='/Nosotros.jsx' className='Link'>Nosotros</a>
            </nav>
        </header>
        </>
    )
}

export default Header