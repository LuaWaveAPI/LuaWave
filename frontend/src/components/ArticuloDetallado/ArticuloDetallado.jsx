import { useState } from "react";

function ArticuloDetallado({articulo}) {
    const [articulo, setArticulo] = useState();

    
    return (
    <>
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