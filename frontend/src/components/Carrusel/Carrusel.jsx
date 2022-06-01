import React from 'react';
import Carousel from 'nuka-carousel';
import "./Carrusel.css";
import style from '../Carrusel/Carrusel.css'

const Carrusel = () => {
  return (
      <div className='divCarrusel'>
    <Carousel wrapAround={true} >
      <img src="https://i.ibb.co/tBDzFJk/sunset.png" alt='Surf'/>
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/src/img/skateCarretera.jpg" alt='Skate' />
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/project/chicoSurf4%20-%20copia.jpg" alt='Surf'/>
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/src/img/tablasSkate1.jpg" alt='Skate' />
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/src/img/underwater.jpg" alt='Surf'/>
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/project/peliculas-de-skate.jpg" alt='Skate'/>
    </Carousel>
    </div>
  );
}

export default Carrusel