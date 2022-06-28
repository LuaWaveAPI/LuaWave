import { useState } from "react"
import ArticCarrito from "../ArticCarrito/ArticCarrito"
import style from './ArticulosCarrito.module.css';

function ArticulosCarrito() {
    const [articulos, setArticulos] = useState(JSON.parse(localStorage.getItem("articulos")))
    /*localStorage.setItem("articulos", JSON.stringify([
        {
            Name: "hola",
            Description: "mundo",
            Price: 12,
            Quantity:1
        },
        {
            Name: "hola2",
            Description: "mundo2",
            Price: 122,
            Quantity:2
        }
    ]))*/
    //Copiar lo de arriba en la consola del navegador para añadir al localstorage

    return (
        <>
            <h2 className={style.carrito}><span className={style.colorWhite}>__________ </span>TU CARRITO <span className={style.colorWhite}>__________ </span></h2>
            <div className={style.divIzquierda}>
                {articulos.map((articulo, idx) =>
                    <>
                        <ArticCarrito idx={idx} setArticulos={setArticulos} />
                    </>
                )}
            </div>
        </>
    )
}
export default ArticulosCarrito