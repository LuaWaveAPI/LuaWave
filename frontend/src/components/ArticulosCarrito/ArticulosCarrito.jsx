import { useState } from "react"
import ArticCarrito from "../ArticCarrito/ArticCarrito"
import style from './ArticulosCarrito.module.css';

function ArticulosCarrito() {
    const [articulos, setArticulos] = useState(JSON.parse(localStorage.getItem("articulos")))
   
    return (
        <>
            <h2 className={style.carrito}><span className={style.colorWhite}>__________ </span>TU CARRITO <span className={style.colorWhite}>__________ </span></h2>
            <div className={style.divIzquierda}>
                {articulos.map((articulo,idx) =>
                    <>
                        <ArticCarrito key={articulo.Articles_ID} idx={idx} setArticulos={setArticulos} />
                    </>
                )}
            </div>
        </>
    )
}
export default ArticulosCarrito