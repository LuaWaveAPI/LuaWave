import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"
import "./Surf.css";
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
            <main className="fondo">
                <div>
                    <div className="divbutton">
                        <button className="buttonConSin" onClick={() => changeView(urls[1], "sin")}>Alquiler tablas de Surf sin neopreno</button>
                        <button className="buttonConSin" onClick={() => changeView(urls[0], "con")}>Alquiler tablas de Surf con neopreno</button>
                    </div>
                    <div className="dividirMain">
                        <div className="divIzq">
                            <ListaArticulos host={pag} setArticuloFull={setArticuloFull} setShowButton={setShowButton} tittle={tittle} />

                            {/* para probar directamente en React NO esta generado por la Base de datos */}
                            <div className="divRectangulos">
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={tablaSurf2H} alt="tablaSurf"></img>
                                        <p className="rectanguloTexto">Sin neopreno - 1 día</p>
                                    </div>

                                </div>
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={tablaSurf9H} alt="tablaSurf"></img>
                                        <p className="rectanguloTexto">Sin neopreno - 2 días</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={tablaSurf12H} alt="tablaSurf"></img>
                                        <p className="rectanguloTexto">Sin neopreno - 5 días</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={tablaSurf11H} alt="tablaSurf"></img>
                                        <p className="rectanguloTexto">Sin neopreno - 7 días</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="divDer">
                            <div>
                                <img className="imagenTablaH" src={tablaSurf2} alt="tablaSurf"></img>
                            </div>
                            <div className="textoDerecha">
                                <p className="tituloDerecha">Tabla de Surf </p>
                                <p className="tituloDerecha">{tittle} accesorios</p>
                                <p>-</p>
                                <h2>5 días - 28 €</h2>
                                
                                <ArticuloDetallado articuloFull={articuloFull} showButton={showButton} />
                                <button class="buttonGeneral"><a href="./carrito.html">Añadir al Carro</a></button>
                                <div class="textoSurf textoDescripcion">
                                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Eveniet modi neque id officiis commodi earum repellat,
                                        totam nam iusto ea sed cumque dolorum ab numquam laudantium provident delectus.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
        </main>
     </>
    )
}

export default Surf