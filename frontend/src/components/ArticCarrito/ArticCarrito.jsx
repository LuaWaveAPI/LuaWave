import { useEffect, useState } from "react";
import ComponenteArticulo from "../ComponenteArticulo/ComponenteArticulo";
function ArticCarrito({idx}){
    const [articulo, setArticulo] = useState (JSON.parse(localStorage.getItem("articulos"))[idx])
    const [articuloscantidad, setArticulosCantidad] = useState (articulo.Quantity)
    
    function operation(a){
        setArticulosCantidad(a)

    }
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("articulos"))
        data[idx].Quantity = articuloscantidad
        localStorage.setItem("articulos", JSON.stringify(data))}
        ,[articuloscantidad])
return(
    <>
        <ComponenteArticulo articulo={articulo}/>
        <input type="text" value={articuloscantidad}></input>
        <button onClick={()=>operation(articuloscantidad + 1)}>+</button>
        <button onClick={()=>operation(articuloscantidad - 1)}>-</button>
        <button onClick={()=>localStorage.removeItem(articulo)}>delete</button>
    </>
)
}
export default ArticCarrito