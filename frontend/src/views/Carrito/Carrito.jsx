import { useState } from "react"
import ArticulosCarrito from "../../components/ArticulosCarrito/ArticulosCarrito"
import FormularioCarrito from "../../components/FormularioCarrito/FormularioCarrito"
import style from './Carrito.module.css';


function Carrito({setErrorLog, setAlertText}) {
    const [status, setStatus] = useState(true)

    return (
        <>
            <div className={style.mainDividido}>
                {!status && <p>Gracias por su reserva</p>}
                {status &&
                    <>
                        <div className={style.articulos}>
                            <ArticulosCarrito />
                        </div>
                        <div>
                            <FormularioCarrito setErrorLog={setErrorLog}
              setAlertText={setAlertText} setStatus={setStatus} />
                        </div>
                    </>}
            </div>
        </>
    )
}

export default Carrito