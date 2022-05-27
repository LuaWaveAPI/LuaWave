function ArticuloDetallado({articuloFull}) {
    function addNewProduct(article){
        const data = JSON.parse(localStorage.getItem("articulos"));
        const newdata = article;
        newdata.Quantity = 1;
        data.push(newdata)        
        localStorage.setItem("articulos", JSON.stringify(data));
    }   
    return (
    <>
    <h3>Este es el artículo detallado</h3>
    <div>     
        <p>{articuloFull.Name}</p>
        <p>{articuloFull.Price}</p>
        <p>{articuloFull.Description}</p>
        <img src={articuloFull.Photo} alt={articuloFull.Name} />
        {<button onClick={()=>addNewProduct(articuloFull)}>Añadir al carrito</button> }
    </div>
    </>
    );
  }
  
  export default ArticuloDetallado;