import { useState } from 'react'
import './CCS/procesocss.css'

function NoticiasProceso({tittle, text, text2}){
    return(
        <>
            <div className='fondonosotros'>
                <head>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap')
                        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200..700&display=swap')
                    </style>
                </head>

                <div className='noticia1'>
                    <h2>{tittle}</h2>
                    <p>{text}</p>
                    <p>{text2} </p>
                </div>
            </div>
        </>
    )
}

export default NoticiasProceso