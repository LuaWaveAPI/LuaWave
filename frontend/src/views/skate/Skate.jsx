import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"
import style from './Skate.module.css';
import { LogoGrande } from "../../components/LogoGrande/LogoGrande";

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
                    <div className={style.centrarBotones}>
                        <button className={style.buttonConSin + " " + style.marginCon} onClick={() => changeView(urls[2], "con")}>Alquiler tablas de Skate con accesorios</button>
                        <button className={style.buttonConSin + " " + style.marginSin} onClick={() => changeView(urls[3], "sin")}>Alquiler tablas de Skate sin accesorios</button>
                    </div>
                    <div>
                        <h2>Alquiler tablas de Skate {tittle} accesorios</h2>
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

export default Skate