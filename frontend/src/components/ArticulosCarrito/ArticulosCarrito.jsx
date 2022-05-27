
import { useState } from "react"
import ArticCarrito from "../ArticCarrito/ArticCarrito"
function ArticulosCarrito(){
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

    return(
        <>
        <h2>Carrito</h2>
        {articulos.map( (articulo, idx) => 
            <>
            <ArticCarrito idx={idx} setArticulos={setArticulos} />
            </>
            )}
            
        </>
    )
}
export default ArticulosCarrito