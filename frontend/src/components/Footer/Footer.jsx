import { Link } from 'react-router-dom'
import style from './Footer.module.css';
import iconoFooter1 from "../../img/iconoFooter1.png";
import iconoFooter2 from "../../img/iconoFooter2.png";
import iconoFooter3 from "../../img/iconoFooter3.png";
import iconoFooter4 from "../../img/iconoFooter4.png";
import iconoFooter5 from "../../img/iconoFooter5.png";
import iconoFooter6 from "../../img/iconoFooter6.png";
import iconoFooter7 from "../../img/iconoFooter7.png";
import iconoFooter8 from "../../img/iconoFooter8.png";
import iconoFooter9 from "../../img/iconoFooter9.png";

function Footer() {
    return (
        <>

            <footer id="Footer">
                <div className={style.elFooter}>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img className={style.iconos} src={iconoFooter1} alt="iconoI"></img>
                    </a>
                    <a href="https://es-es.facebook.com/" target="_blank">
                        <img className={style.iconos} src={iconoFooter2} alt="iconoF"></img>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <img className={style.iconos} src={iconoFooter3} alt="iconoY"></img>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <img className={style.iconos} src={iconoFooter4} alt="iconoT"></img>
                    </a>
                    <a href="https://www.pinterest.es/" target="_blank">
                        <img className={style.iconos} src={iconoFooter5} alt="iconoP"></img>
                    </a>
                    <a href="https://outlook.live.com/owa/" target="_blank">
                        <img className={style.iconos} src={iconoFooter6} alt="iconoE"></img>
                    </a>
                    <a href="https://www.whatsapp.com/" target="_blank">
                        <img className={style.iconos} src={iconoFooter7} alt="iconoW"></img>
                    </a>
                    <a href="tel:881917587" target="_blank">
                        <img className={style.iconos} src={iconoFooter8} alt="iconoT"></img>
                    </a>
                    <a href="https://www.google.es/maps/@43.3409416,-8.3621853,16.53z" target="_blank">
                        <img className={style.iconos} src={iconoFooter9} alt="iconoM"></img>
                    </a>
                </div>
            </footer>


        </>
    )
}

export default Footer