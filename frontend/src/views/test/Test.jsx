import ListaPacks from "../../components/ListaArticulos/ListaArticulos.jsx"
import ComponenteArticulo from "../../components/ComponenteArticulo/ComponenteArticulo.jsx"

const articuloMockup = {
    "Articles_id": 2,
    "Name": "menganito",
    "Description": "as2d",
    "Category": 1,
    "Price": 123123
}

function Test (){
    return (
        <>
        <h1>Test</h1>
        <ComponenteArticulo articulo={articuloMockup}/>
        </>
    )// poner los componentes en el return
}
export default Test