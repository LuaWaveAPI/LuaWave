import imagen from "../../img/logoLuaWave.png"
import style from './LogoGrande.module.css';

export function LogoGrande(){
    return(
        <>
        <div className={style.centrarLogo}>
            <img src={imagen} alt="hola" />
        </div>
        </>
    )
}
