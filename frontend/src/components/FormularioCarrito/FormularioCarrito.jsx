import { useState } from "react";
import { urls } from "../../defines/defines.jsx";
import { ShortArticle } from "../../models/ShortArticle.mjs";
import style from './FormularioCarrito.module.css';
import iconoFooter9 from "../../img/iconoFooter9.png";

function FormularioCarrito({ setStatus }) {
    const [name, setName] = useState("");
    const [DNI, setDNI] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [codepostal, setCodepostal] = useState("");
    console.log(urls[4])

    function changeHandler(event, set) {
        set(event.target.value);
    }

    function postOrder() {
        if (name === "" || DNI === "" || email === "" || phone === "" || codepostal === "") {
            alert("Algun campo esta vacio")
        } else {
            const data = JSON.parse(localStorage.getItem("articulos"));
            const newdata = [];
            data.map(item => newdata.push(new ShortArticle(item)))
            const bodyOrder = {
                Name: name,
                DNI: DNI,
                Email: email,
                Phone: phone,
                Code_postal: codepostal,
                Articles: newdata
            };
            if (data.length === 0) {
                alert("No has seleccionado ningun producto")

            } else {
                console.log("->", urls[4])
                fetch(urls[4],
                    {
                        method: 'POST',
                        body: JSON.stringify(bodyOrder),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
                localStorage.removeItem("articulos");
                setName("");
                setDNI("");
                setEmail("");
                setPhone("");
                setCodepostal("");
                setStatus(false)
            }
        }
    }


    return (
        <>
            <div className={style.divDerecha}>
                <div className={style.cuadrarFormulario}>
                    <p className={style.fuente}>Nombre </p>
                    <input className={style.formulario} type="text" value={name} placeholder="Escribe tu nombre" onChange={(event) => changeHandler(event, setName)} />
                </div>
                <div className={style.cuadrarFormulario}>
                    <p className={style.fuente}>DNI </p>
                    <input className={style.formulario} type="text" value={DNI} placeholder="Escribe tu DNI" onChange={(event) => changeHandler(event, setDNI)} />
                </div>
                <div className={style.cuadrarFormulario}>
                    <p className={style.fuente}>Email </p>
                    <input className={style.formulario} type="text" value={email} placeholder="Escribe tu email" onChange={(event) => changeHandler(event, setEmail)} />
                </div>
                <div className={style.cuadrarFormulario}>
                    <p className={style.fuente}>Teléfono </p>
                    <input className={style.formulario} type="text" value={phone} placeholder="Escribe tu telefono" onChange={(event) => changeHandler(event, setPhone)} />
                </div>
                <div className={style.cuadrarFormulario}>
                    <p className={style.fuente}>C.P. </p>
                    <input className={style.formulario} type="text" value={codepostal} placeholder="Escribe tu Codigo postal" onChange={(event) => changeHandler(event, setCodepostal)} />
                </div>
                <div className={style.centrarBoton}>
                    <button className={style.buttonBlue} onClick={postOrder}>Pagar</button>
                </div>
                <div className={style.maps}>
                    <p>Dirección de recogida de la Reserva </p>
                    <a href="https://www.google.es/maps/@43.3409416,-8.3621853,16.53z" target="_blank">
                        <img className={style.icono} src={iconoFooter9} alt="iconoM"></img>
                    </a>
                </div>
            </div>
        </>
    )
}
export default FormularioCarrito