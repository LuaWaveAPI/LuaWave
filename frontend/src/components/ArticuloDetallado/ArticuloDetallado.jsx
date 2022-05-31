function ArticuloDetallado({articuloFull, showButton}) {
    function addNewProduct(article){
        const data = JSON.parse(localStorage.getItem("articulos"));
        const newdata = article;
        newdata.Quantity = 1;
        data.push(newdata)        
        localStorage.setItem("articulos", JSON.stringify(data));
    }   
    return (
    <>
    {showButton && 
    <div>    
        <h3>Este es el artículo detallado</h3> 
        <p>{articuloFull.Name}</p>
        <p>{articuloFull.Price}€</p>
        <p>{articuloFull.Description}</p>
        <img src={articuloFull.Photo} alt={articuloFull.Name} />
        {showButton && <button onClick={()=>addNewProduct(articuloFull)}>Añadir al carrito</button> }
    </div>}
    </>
    );
  }
  
  export default ArticuloDetallado;