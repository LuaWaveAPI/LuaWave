import ListaArticulos from "../../components/ListaArticulos/ListaArticulos.jsx"
import { urls } from "../../defines/defines.jsx"
import ArticulosCarrito from "../../components/ArticulosCarrito/ArticulosCarrito.jsx"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado.jsx"
import { useState } from "react"


function Test (){
    const [articuloFull, setArticuloFull] = useState("")
    const data = JSON.parse(localStorage.getItem("articulos"))
    if(data === null){
        localStorage.setItem("articulos", JSON.stringify([]))
    }
    return (
        <>

        <h3 className="centrado">Alquiler de tablas de Skate con y sin accesorios</h3>
        <h2>Surf con accesorios</h2>
        <ListaArticulos host={urls[0]} setArticuloFull={setArticuloFull} />
        <h2>Surf sin accesorios</h2>
        <ListaArticulos host={urls[1]}setArticuloFull={setArticuloFull}/>
        <h2>Skate con accesorios</h2>
        <ListaArticulos host={urls[2]}setArticuloFull={setArticuloFull}/>
        <h2>Skate sin accesorios</h2>
        <ListaArticulos host={urls[3]}setArticuloFull={setArticuloFull}/>
        <ArticulosCarrito/>
        {<ArticuloDetallado articuloFull={articuloFull}/>}
        
    
        </>
    )// poner los componentes en el return
}
export default Test