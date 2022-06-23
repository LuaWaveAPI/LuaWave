import { useState } from "react"
import ArticulosCarrito from "../../components/ArticulosCarrito/ArticulosCarrito"
import FormularioCarrito from "../../components/FormularioCarrito/FormularioCarrito"
import style from './Carrito.module.css';


function Carrito() {
    const [status, setStatus] = useState(true)

    return (
        <>
            <div className={style.mainDividido}>
                {!status && <p>Gracias por su reserva</p>}
                {status &&
                    <div>
                        <div>
                            <ArticulosCarrito />
                        </div>
                        <div>
                            <FormularioCarrito setStatus={setStatus} />
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default Carrito