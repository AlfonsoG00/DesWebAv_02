import { useState } from 'react'

function Noticias({tittle, desc}){
    return(
        <>
            <div className='Noticias'>
                <h2>{tittle}</h2>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Noticias