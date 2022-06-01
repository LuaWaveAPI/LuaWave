import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"
import "./Skate.css";
import FondoSkate from "../../img/FondoSkate.jpg";

import rectanguloFondo from "../../img/rectanguloFondo.png";
import skate1 from "../../img/skate1.png";
import skate1H from "../../img/skate1H.png";
import skate7H from "../../img/skate7H.png";
import skate2H from "../../img/skate2H.png";
import skate8H from "../../img/skate8H.png";
/*
import skate12 from "../../img/skate12.png";
import skate5H from "../../img/skate5H.png";
import skate3H from "../../img/skate3H.png";
import skate12H from "../../img/skate12H.png";
import skate4H from "../../img/skate4H.png";
*/

function Skate () {
    const [showButton, setShowButton] = useState(false)
    const [articuloFull, setArticuloFull] = useState("")
    const [tittle, setTittle] = useState("con")
    const [ pag, setPag] = useState(urls[0])
    const data = JSON.parse(localStorage.getItem("articulos"))
    if(data === null){
        localStorage.setItem("articulos", JSON.stringify([]))
    }
   
    function changeView(url, x){
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
                        <button className="buttonConSin" onClick={() => changeView(urls[1], "sin")}>Alquiler de Skate sin accesorios</button>
                        <button className="buttonConSin" onClick={() => changeView(urls[0], "con")}>Alquiler de Skate con accesorios</button>
                    </div>
                    <div className="dividirMain">
                        <div className="divIzq">
                            <ListaArticulos host={pag} setArticuloFull={setArticuloFull} setShowButton={setShowButton} tittle={tittle} />

                            {/* para probar directamente en React NO esta generado por la Base de datos */}
                            <div className="divRectangulos">
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={skate1H.png} alt="tablaSkate"></img>
                                        <p className="rectanguloTexto">Sin accesorios - 1 día</p>
                                    </div>

                                </div>
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={skate7H.png} alt="tablaSkate"></img>
                                        <p className="rectanguloTexto">Sin accesorios - 2 días</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={skate2H.png} alt="tablaSkate"></img>
                                        <p className="rectanguloTexto">Sin accesorios - 5 días</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="rectanguloBase" src={rectanguloFondo} alt="tablaFondo"></img>
                                    <div className="divIzq">
                                        <img className="imagenTablaH" src={skate8H.png} alt="tablaSkate"></img>
                                        <p className="rectanguloTexto">Sin accesorios - 7 días</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="divDer">
                            <div>
                                <img className="imagenTablaH" src={skate1.png} alt="tablaSkate"></img>
                            </div>
                            <div className="textoDerecha">
                                <p className="tituloDerecha">Tabla Skate </p>
                                <p className="tituloDerecha">{tittle} accesorios</p>
                                <p>-</p>
                                <h2>5 días - 28 €</h2>
                                
                                <ArticuloDetallado articuloFull={articuloFull} showButton={showButton} />
                                <button class="buttonGeneral"><a href="./carrito.html">Añadir al Carro</a></button>
                                <div class="textoSkate textoDescripcion">
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








            <button onClick={()=>changeView(urls[3], "sin")}>sin</button>
            <button onClick={()=>changeView(urls[2], "con")}>con</button>
            <h2>Skate {tittle} accesorios</h2>
            <ListaArticulos host={pag} tittle={tittle} setArticuloFull={setArticuloFull} setShowButton={setShowButton}/>
            <ArticuloDetallado articuloFull={articuloFull} showButton={showButton} />
        </>
    )
}

export default Skate