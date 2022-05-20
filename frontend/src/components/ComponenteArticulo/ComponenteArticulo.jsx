import { useState } from "react";
import ListaArticulos from "../ListaArticulos/ListaArticulos";
import styles from "./ComponenteArticulo.module.css";

function ComponenteArticulo({articulo}) {

    return (
    <>
        <h1 className={styles.test}>saludo: {articulo.Name}</h1>
        <p>{articulo.Description}</p>
    </>
    );
  }
  
  export default ComponenteArticulo;