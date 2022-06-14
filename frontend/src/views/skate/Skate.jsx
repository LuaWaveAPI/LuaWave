import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"
import style from './Skate.module.css';

// import FondoSkate from "../../img/FondoSkate.jpg";

// import rectanguloFondo from "../../img/rectanguloFondo.png";
// import skate1 from "../../img/skate1.png";
// import skate1H from "../../img/skate1H.png";
// import skate7H from "../../img/skate7H.png";
// import skate2H from "../../img/skate2H.png";
// import skate8H from "../../img/skate8H.png";
/*
import skate12 from "../../img/skate12.png";
import skate5H from "../../img/skate5H.png";
import skate3H from "../../img/skate3H.png";
import skate12H from "../../img/skate12H.png";
import skate4H from "../../img/skate4H.png";
*/

function Skate() {
    const [showButton, setShowButton] = useState(false)
    const [articuloFull, setArticuloFull] = useState("")
    const [tittle, setTittle] = useState("con")
    const [pag, setPag] = useState(urls[2])
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
                        <button className={style.buttonConSin + " " + style.marginCon} onClick={() => changeView(urls[2], "con")}>Skate con accesorios</button>
                        <button className={style.buttonConSin + " " + style.marginSin} onClick={() => changeView(urls[3], "sin")}>Skate sin accesorios</button>
                    </div>
                    <div>
                        <h2>Skate {tittle} accesorios</h2>
                    </div>
                    <ListaArticulos host={pag} tittle={tittle} setArticuloFull={setArticuloFull} setShowButton={setShowButton} />
                    <ArticuloDetallado articuloFull={articuloFull} showButton={showButton} />
                </div>
            </div>
        </>
    )
}

export default Skate