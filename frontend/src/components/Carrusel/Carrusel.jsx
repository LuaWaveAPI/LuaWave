import React from 'react';
import Carousel from 'nuka-carousel';

const Carrusel = () => {
  return (
    <Carousel wrapAround={true}>
      <img src="https://i.ibb.co/tBDzFJk/sunset.png"/>
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/src/img/skateCarretera.jpg" />
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/project/chicoSurf4%20-%20copia.jpg" />
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/src/img/tablasSkate1.jpg" />
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/src/img/underwater.jpg" />
      <img src="https://raw.githubusercontent.com/Maitlla/ProyectoFinal/main/project/peliculas-de-skate.jpg" />
    </Carousel>
  );
}

export default Carrusel