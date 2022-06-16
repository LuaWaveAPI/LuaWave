import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"
import style from './Surf.module.css';
import Navbar from '../../components/Navbar/Navbar.jsx';

import FondoSurf from "../../img/FondoSurf.jpg";

import rectanguloFondo from "../../img/rectanguloFondo.png";
import tablaSurf2 from "../../img/tablaSurf2.png";
import tablaSurf2H from "../../img/tablaSurf2H.png";
import tablaSurf9H from "../../img/tablaSurf9H.png";
import tablaSurf12H from "../../img/tablaSurf12H.png";
import tablaSurf11H from "../../img/tablaSurf11H.png";
/*
import tablaSurf14 from "../../img/tablaSurf14.png";
import tablaSurf4H from "../../img/tablaSurf4H.png";
import tablaSurf1H from "../../img/tablaSurf1H.png";
import tablaSurf14H from "../../img/tablaSurf14H.png";
import tablaSurf3H from "../../img/tablaSurf3H.png";
*/


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
                    <div>
                        <button className={style.buttonConSin + " " + style.marginCon} onClick={() => changeView(urls[1], "sin")}>Alquiler tablas de Surf sin neopreno</button>
                        <button className={style.buttonConSin + " " + style.marginSin} onClick={() => changeView(urls[0], "con")}>Alquiler tablas de Surf con neopreno</button>
                    </div>
                    <div>
                        <h2>Alquiler tablas de Surf {tittle} neopreno</h2>
                    </div>
                    <ListaArticulos host={pag} tittle={tittle} setArticuloFull={setArticuloFull} setShowButton={setShowButton} />
                    <ArticuloDetallado articuloFull={articuloFull} showButton={showButton} />
                </div>
            </div>

        </>
    )
}

export default Surf