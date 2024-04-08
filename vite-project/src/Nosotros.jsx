import { useEffect, useRef, useState } from 'react'
import YoUno from './assets/Yo_Uno.png'
import './CCS/nosotroscss.css'
import Header from './Header.jsx'
import Rem from './assets/Rem.jpg'
import { data } from './imagenes.jsx'

function Nosotros() {

    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img") [currentIndex];

        if (imgNode){ 
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex])

    const scrolltoImage = (direccion) => {
        if (direccion == 'prev') {
            setCurrentIndex(curr =>{
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1; 
            })
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if(!isLastSlide){
                setCurrentIndex(curr => curr     + 1);
            }
        }
    }

    return(
        <>
            <div className='sobremi'>
                <div className='logoautor'> 
                    <img src={YoUno} className="personajeyo"alt="LogoAutorYO"/>
                    <h1 className='biografia'>Alfonso Ramirez Gamboa</h1>
                </div>
                <div>
                    <p className='textobio'>
                        Estudiante de la Universidad Autonoma del Carmen, casi egresado de la carrera
                        de Ing. en Diseño Multimedia. Tengo aproximadamente 3 años y media en el mundo de ilustración.
                        He tenido la oportunidad de trabajr con emprededores de Cd del Carmen, mas en el área de Diseño
                        Grafico y en la publicidad para hacer que su empresa consiga un mejor posicionamiento o logre llegar a más 
                        personas.
                        <p classname= 'textochico'>
                        Desde hace 3 años como ya se mencionó comence a tomarme más enserio la ilustración y es algo en lo que me 
                        gustaria enfocarme y dedicarme, sigo explorando intentando poder encontrar un estilo que me guste y se 
                        cómodo para mi, algo tengo claro el realismo no me agrada, este es un proyecto que comence ya que me gustan
                        mucho los juegos de mesa y es un mundo nuevo para mi, aproximadamente llevo 3 meses desarrollando este proyecto
                        por mi cuenta, mecánicamente ya esta desarrollado solo faltan las ilustraciones de cada carta jugable.
                        </p>
                    </p>
                </div>
                <div className='sobremi2'>
                    <h1 className='EXPERIENCIA' > TRABAJOS REALIZADOS</h1>
                </div>
            </div>
            <div className='main-container'>
                <div className='slider-container'>
                    <div className='leftArrow' onClick = {() => scrolltoImage('prev')}> &#10094;</div>
                    <div className = 'rightArrow' onClick = {() => scrolltoImage('next')}> &#10095; </div>
                     <div className='container-images'> 
                        <ul ref={listRef}>
                            {
                                data.map((item) => {
                                    return <li key={item.id}>
                                        <img src= {item.imgUrl} width={600} height={300}/>
                                    </li>
                                })
                            }
                        </ul>
                     </div> 
                </div>
            </div>
        </>
    )
}

export default Nosotros