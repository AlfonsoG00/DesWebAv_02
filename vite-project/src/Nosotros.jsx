import { useState } from 'react'
import YoUno from './assets/Yo_Uno.png'
import './CCS/nosotroscss.css'
import Header from './Header.jsx'
import Rem from './assets/Rem.jpg'

function Nosotros() {
    return(
        <>
            <div>
                <Header/>
            </div>
            <div className='sobremi'>
                <div className='logoautor'> 
                    <img src={YoUno} className="personajeyo"alt="LogoAutorYO"/>
                    <h1 className='biografia'>Alfonso Ramriez</h1>
                </div>
                <div>
                    <p className='textobio'>
                        Soy un estuidante de de Universidad bla bla bla
                    </p>
                </div>
            </div>
            <div className='sobremi2'>
                <h1 className='tituloexp'>Experiencia</h1>
                <div className='imgproyecto'>
                    <img src={Rem} className="imgRem" alt="ImagenDeRem"/>
                </div>
            </div>
        </>
    )
}

export default Nosotros