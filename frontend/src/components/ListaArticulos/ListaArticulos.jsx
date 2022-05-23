import { useEffect, useState } from "react";
import ComponenteArticulo from "../ComponenteArticulo/ComponenteArticulo";

/**
 * Muestra la lista de artículos.
 * Obtiene la lista de artículos en base al valor de props.categoria
 * @param {*} props - props.categoria = "Surf" | "Skate"
 */
function ListaArticulos(props) {
    
    const [articulos, setArticulos] = useState([])

    useEffect(
        ()=>{
            //TODO: fetch que obtenga la lista de artículos en base a props.categoria
            //Mocked fetch
            setArticulos([
                {
                    "Articles_id": 1,
                    "Name": "pepito",
                    "Description": "as2d",
                    "Category": 1,
                    "Price": 2
                },
                {
                    "Articles_id": 2,
                    "Name": "menganito",
                    "Description": "as2d",
                    "Category": 1,
                    "Price": 123123
                }
            ])
            // End mocked fetch
        },
        [props.categoria]
    )

    return (
    <>
        {articulos.map( articulo => <ComponenteArticulo articulo={articulo}/> )}
    </>
    );
  }
  export default ListaArticulos;