import { useState } from "react"
import { urls } from "../../defines/defines"
import ListaArticulos from "../../components/ListaArticulos/ListaArticulos"
import ArticuloDetallado from "../../components/ArticuloDetallado/ArticuloDetallado"

function Skate () {
    const [showButton, setShowButton] = useState(false)
    const [articuloFull, setArticuloFull] = useState("")
    const [tittle, setTittle] = useState("con")
    const [ pag, setPag] = useState(urls[0])
    const data = JSON.parse(localStorage.getItem("articulos"))
    if(data === null){
        localStorage.setItem("articulos", JSON.stringify([]))
    }
   
    function changeView(url, x){
        setPag(url)
        setTittle(x)
        setArticuloFull("")
        setShowButton(false)
    }
    
   
    return (
        <>
            <button onClick={()=>changeView(urls[2], "con")}>con</button>
            <button onClick={()=>changeView(urls[3], "sin")}>sin</button>
            <h2>Skate {tittle} accesorios</h2>
            <ListaArticulos host={pag} tittle={tittle} setArticuloFull={setArticuloFull} setShowButton={setShowButton}/>
            <ArticuloDetallado articuloFull={articuloFull} showButton={showButton} />
        </>
    )
}

export default Skate