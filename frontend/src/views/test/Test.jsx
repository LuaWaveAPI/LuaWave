import ListaPacks from "../../components/ListaArticulos/ListaArticulos.jsx"
import ComponenteArticulo from "../../components/ComponenteArticulo/ComponenteArticulo.jsx"

const articuloMockup = {
    "Articles_id": 3,
    "Name": "Skate",
    "Description": "asef2d",
    "Category": 1,
    "Price": 12323
}



function Test (){
    return (
        <>
        <h3 className="centrado">Alquiler de tablas de Skate con y sin accesorios</h3>
        <ComponenteArticulo articulo={articuloMockup}/>
        </>
    )// poner los componentes en el return
}
export default Test