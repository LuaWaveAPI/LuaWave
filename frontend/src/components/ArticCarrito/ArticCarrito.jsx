import { useState } from "react";
import ComponenteArticulo from "../ComponenteArticulo/ComponenteArticulo";
function ArticCarrito({articulo}){
    const [articuloscantidad, setArticulosCantidad] = useState (articulo.Quantity);
    
    function operation(a){
        setArticulosCantidad(a)
        articulo.Quantity = articuloscantidad
    }

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