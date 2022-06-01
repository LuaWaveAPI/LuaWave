import React from 'react';
import Carousel from 'nuka-carousel';
import style from '../Carrusel/Carrusel.module.css'

const Carrusel = () => {
  return (
      <div className={style.mainContainer}>
    <Carousel wrapAround={true} >
      <img className={style.imgCarrusel} src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/5.png" alt='Skate' />
      <img className={style.imgCarrusel}  src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/2.png" alt='Surf'/>
      <img className={style.imgCarrusel}  src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/3.png" alt='Skate' />
      <img className={style.imgCarrusel}  src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/1.png" alt='Surf'/>
      <img className={style.imgCarrusel}  src="https://raw.githubusercontent.com/LuaWaveAPI/LuaWave/main/frontend/src/img/carrusel/6.png" alt='Skate'/>
    </Carousel>
    </div>
  );
}

export default Carrusel