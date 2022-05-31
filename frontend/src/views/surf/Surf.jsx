import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"

function Surf () {
    const [showButton, setShowButton] = useState(false)
    const [articuloFull, setArticuloFull] = useState("")
    const [tittle, setTittle] = useState("con")
    const [ pag, setPag] = useState(urls[0])
   
    function changeView(url, x){
        setPag(url)
        setTittle(x)
        setArticuloFull("")
        setShowButton(false)
    }
    
   
    return (
        <>
            <button onClick={()=>changeView(urls[0], "con")}>con</button>
            <button onClick={()=>changeView(urls[1], "sin")}>sin</button>
            <h2>Surf {tittle} accesorios</h2>
            <ListaArticulos host={pag} setArticuloFull={setArticuloFull} setShowButton={setShowButton}/>
            <ArticuloDetallado articuloFull={articuloFull} showButton={showButton} />
        </>
    )
}

export default Surf