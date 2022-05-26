
import ArticCarrito from "../ArticCarrito/ArticCarrito"
function ArticulosCarrito(){
    const articulos2 = localStorage.getItem("articulos")
    const articulos = [
        {
            Name: "hola",
            Description: "mundo",
            Price: 12,
            Quantity:1
        },
        {
            Name: "hola2",
            Description: "mundo2",
            Price: 122,
            Quantity:2
        }
    ]

    return(
        <>
        <h2>Carrito</h2>
        {articulos.map( articulo => 
            <>
            <ArticCarrito articulo={articulo}/>
            </>
            )}
            
        </>
    )
}
export default ArticulosCarrito