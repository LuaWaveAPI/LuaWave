import { useEffect, useState, useContext } from "react";
import ComponenteArticulo from "../ComponenteArticulo/ComponenteArticulo";
import { Context } from "../../storage/SharedStorage";

/**
 * Muestra la lista de artículos.
 * Obtiene la lista de artículos en base al valor de props.categoria
 * @param {*} props - props.categoria = "Surf" | "Skate"
 */
function ListaArticulos({host}) {
    
    const [ store, setStore ] = useContext(Context)
    const [articulos, setArticulos] = useState([])
    async function get(url){
        const response = await fetch(url);
        const data = await response.json();
        setArticulos(data)
        }
        
    
    useEffect(
        ()=>{
            get(host)
        },
        []
    )

    return (
    <>
        {articulos.map( articulo => <ComponenteArticulo articulo={articulo}/>)}
    </>
    )
  }

  export default ListaArticulos;