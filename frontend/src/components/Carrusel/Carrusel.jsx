import React from 'react';
import Carousel from 'nuka-carousel';
import "./Carrusel.css";
import style from '../Carrusel/Carrusel.css'

const Carrusel = () => {
  return (
      <div className='divCarrusel'>
    <Carousel wrapAround={true} >
      <img src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/4.png" alt='Surf'/>
      <img src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/5.png" alt='Skate' />
      <img src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/2.png" alt='Surf'/>
      <img src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/3.png" alt='Skate' />
      <img src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/1.png" alt='Surf'/>
      <img src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/6.png" alt='Skate'/>
    </Carousel>
    </div>
  );
}

export default Carrusel