import ListaArticulos from "../../components/ListaArticulos/ListaArticulos.jsx"
import { urls } from "../../defines/defines.jsx"

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
        </>
    )// poner los componentes en el return
}
export default Test