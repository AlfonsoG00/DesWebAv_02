import { useState } from 'react'
import DG from './assets/Pantalla.png'
import './CCS/homecss.css'

function Home(){
    return(
        <>  
            <div className='img1'>
                <img src={DG} className='Portada' alt='SoloYo'/>
            </div>
        </>
    )
}

export default Home