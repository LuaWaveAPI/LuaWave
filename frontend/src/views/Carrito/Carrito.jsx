import { useState} from "react"
import ArticulosCarrito from "../../components/ArticulosCarrito/ArticulosCarrito"
import FormularioCarrito from "../../components/FormularioCarrito/FormularioCarrito"
function Carrito () {
    const [status, setStatus] = useState(true)

    return (
        <>
        {!status && <p>Gracias por su reserva</p>}
        {status &&
        <div>
            <ArticulosCarrito/>
            <FormularioCarrito setStatus={setStatus}/>
        </div>}
        </>
    )
}

export default Carrito