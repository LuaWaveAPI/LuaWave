import ListaArticulos from "../../components/ListaArticulos/ListaArticulos.jsx"
import { urls } from "../../defines/defines.jsx"
import ArticulosCarrito from "../../components/ArticulosCarrito/ArticulosCarrito.jsx"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado.jsx"


function Test (){
    return (
        <>

        <h3 className="centrado">Alquiler de tablas de Skate con y sin accesorios</h3>
        <h2>Surf con accesorios</h2>
        <ListaArticulos host={urls[0]}/>
        <h2>Surf sin accesorios</h2>
        <ListaArticulos host={urls[1]}/>
        <h2>Skate con accesorios</h2>
        <ListaArticulos host={urls[2]}/>
        <h2>Skate sin accesorios</h2>
        <ListaArticulos host={urls[3]}/>
        <ArticulosCarrito/>
        <ArticuloDetallado/>
        
    
        </>
    )// poner los componentes en el return
}
export default Test