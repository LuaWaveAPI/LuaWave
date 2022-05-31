import { useEffect, useState } from "react";
import ComponenteArticulo from "../ComponenteArticulo/ComponenteArticulo";
function ArticCarrito({idx, setArticulos}){
    const [articulo] = useState (JSON.parse(localStorage.getItem("articulos"))[idx])
    const [articuloscantidad, setArticulosCantidad] = useState (articulo.Quantity)
    
    function operation(a){
        setArticulosCantidad(a)
    }
    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("articulos"))
        if(articuloscantidad <= 0){
        data.splice(idx,1)
        }else{
        data[idx].Quantity = articuloscantidad
        }
        localStorage.setItem("articulos", JSON.stringify(data))
        setArticulos(JSON.parse(localStorage.getItem("articulos")))
        }
        ,[articuloscantidad])
        
return(
    <>
        <ComponenteArticulo articulo={articulo}/>
        <input type="text" value={articuloscantidad}></input>
        <button onClick={()=>operation(articuloscantidad + 1)}>+</button>
        <button onClick={()=>operation(articuloscantidad - 1)}>-</button>
        <button onClick={()=>operation(0)}>delete</button>
    </>
)
}
export default ArticCarrito