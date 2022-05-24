import { useState } from "react";
import ListaArticulos from "../ListaArticulos/ListaArticulos";
import styles from "./ComponenteArticulo.module.css";

function ComponenteArticulo({articulo}) {
    
    return (
    <>
        <div>

        </div>
        <p>{articulo.Name}</p>
        <p>{articulo.Description}</p>
        <p>{articulo.Price}</p>
    </>
    );
  }
  
  export default ComponenteArticulo;