import { Article } from "../../models/ArticleClass.mjs";
function ArticuloDetallado({articuloFull, showButton}) {
    function addNewProduct(article){
        const data = JSON.parse(localStorage.getItem("articulos"));
        const newdata = new Article(article);
        data.push(newdata)        
        localStorage.setItem("articulos", JSON.stringify(data));
    }   
    // const [id] = JSON.parse(localStorage.getItem("articulos"));      
    //     localStorage.setItem("articulos", JSON.stringify(new Article(id)));
    return (
    <>
    {showButton && 
    <div>    
        <h3>Este es el artículo detallado</h3> 
        <p>{articuloFull.Name}</p>
        <p>{articuloFull.Price}€</p>
        <p>{articuloFull.Description}</p>
        <img src={"http://localhost:4000/public/"+articuloFull.Photo} alt={articuloFull.Name} />
        {showButton && <button onClick={()=>addNewProduct(articuloFull)}>Añadir al carrito</button> }
    </div>}
    </>
    );
  }
  
  export default ArticuloDetallado;