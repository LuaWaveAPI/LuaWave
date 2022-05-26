import { useState } from "react";

function ArticuloDetallado() {
    const articulo = 
    {
        Name: "hola",
        Description: "mundo",
        Price: 12,
        Photo: ""
    }
    

    
    return (
    <>
    <h3>Este es el artículo detallado</h3>
    <div>     
        <p>{articulo.Name}</p>
        <p>{articulo.Price}</p>
        <p>{articulo.Description}</p>
        <img src={articulo.Photo} alt={articulo.Name} />
    </div>
    </>
    );
  }
  
  export default ArticuloDetallado;