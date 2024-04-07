import { useState } from 'react'
import './CCS/noticiascss.css'

function Noticias({img, tittle, desc1}){
    return(
        <>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200..700&display=swap')
                </style>
            </head>
            <div className='Noticias'>
                <img src={img} className='flor' alt=''/>
                <div>
                    <h2>{tittle}</h2>
                    <p>{desc1}</p>
                </div>
            </div>
        </>
    )
}

export default Noticias