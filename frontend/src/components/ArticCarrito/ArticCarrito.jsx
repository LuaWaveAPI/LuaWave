import { useEffect, useState } from "react";
import ComponenteArticulo from "../ComponenteArticulo/ComponenteArticulo";
import style from './ArticCarrito.module.css';

import iconoFooter9 from "../../img/iconoFooter9.png";

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
        <input className={style.inputCarro} type="text" value={articuloscantidad} />
        <button className={style.bold} onClick={()=>operation(articuloscantidad + 1)}>+</button>
        <button className={style.bold} onClick={()=>operation(articuloscantidad - 1)}>-</button>
        <button onClick={()=>operation(0)}><img className={style.papelera} src={iconoFooter9} alt="Eliminar"></img></button>
    </>
)
}
export default ArticCarrito