import { useState } from "react";
import ListaArticulos from "../ListaArticulos/ListaArticulos";
import styles from "./ComponenteArticulo.module.css";

function ComponenteArticulo({articulo}) {

    return (
    <>
        <div>

        </div>
        <h2 className={styles.test}>
            <span className={styles.derecha}>con accesorios</span><br /><span className={styles.derecha}>5 días</span>{articulo.Name}</h2>
        <p>{articulo.Description}</p>
    </>
    );
  }
  
  export default ComponenteArticulo;