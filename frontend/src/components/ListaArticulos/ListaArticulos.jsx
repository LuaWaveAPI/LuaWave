import { useEffect, useState } from "react";
import ComponenteArticulo from "../ComponenteArticulo/ComponenteArticulo";
/**
 * Muestra la lista de artículos.
 * Obtiene la lista de artículos en base al valor de props.categoria
 * @param {*} props - props.categoria = "Surf" | "Skate"
 */
function ListaArticulos({host,setArticuloFull, setShowButton}) {
    
    const [articulos, setArticulos] = useState([])
    async function get(url){
        const response = await fetch(url);
        const data = await response.json();
        setArticulos(data)
    }
    function showArticle(article){
        setArticuloFull(article)
        setShowButton(true)
        //Cambiar css
    }
    
    useEffect(
        ()=>{
            get(host)
        },
        [articulos]
    )

    return (
    <>
        {articulos.map( articulo => <div onClick={()=>showArticle(articulo)}><ComponenteArticulo articulo={articulo}/></div>)}
    </>
    )
  }

  export default ListaArticulos;