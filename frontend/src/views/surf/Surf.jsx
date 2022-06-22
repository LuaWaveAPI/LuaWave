import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"
import style from './Surf.module.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { LogoGrande } from "../../components/LogoGrande/LogoGrande";

import FondoSurf from "../../img/FondoSurf.jpg";
import rectanguloFondo from "../../img/rectanguloFondo.png";


function Surf() {
    const [showButton, setShowButton] = useState(false)
    const [articuloFull, setArticuloFull] = useState("")
    const [tittle, setTittle] = useState("con")
    const [pag, setPag] = useState(urls[0])
    const data = JSON.parse(localStorage.getItem("articulos"))
    if (data === null) {
        localStorage.setItem("articulos", JSON.stringify([]))
    }

    function changeView(url, x) {
        setPag(url)
        setTittle(x)
        setArticuloFull("")
        setShowButton(false)
    }


    return (
        <>

            <div className={style.mainDividido}>
                <div className={style.conSin}>
                    <div className={style.centrarBotones}>
                        <button className={style.buttonConSin + " " + style.marginSin} onClick={() => changeView(urls[0], "con")}>Alquiler tablas de Surf con neopreno</button>
                        <button className={style.buttonConSin + " " + style.marginCon} onClick={() => changeView(urls[1], "sin")}>Alquiler tablas de Surf sin neopreno</button>
                    </div>
                    <div>
                        <h2>Alquiler tablas de Surf {tittle} neopreno</h2>
                    </div>
                    <div className={style.contenedortotal}>
                        <ListaArticulos host={pag} tittle={tittle} setArticuloFull={setArticuloFull} setShowButton={setShowButton} />
                        {showButton ? <ArticuloDetallado articuloFull={articuloFull} showButton={showButton}/>
                         : <LogoGrande />}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Surf