import style from '../PanelAdmin/PanelAdmin.module.css'
import { useState } from "react";


function PanelAdmin({ setErrorLog, setAlertText }) {
    const URL = "http://localhost:4000/api/v0.0/contact/";
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")

    function changeHandler(event, set) {
        set(event.target.value)
    }


    function postContact() {
        if (user === "" || email === "" || contrasena === "") {
            alert("Algún campo está vacío")
            /*
            setErrorLog(
                <div>
                    <p>¡Algún campo está vacío!</p>
                    <p>¡Debes rellenar los campos!</p>
                </div>
            );
            setAlertText(true)
                */
        } else {
            const bodyOrder = {
                user: user,
                email: email,
                contrasena: contrasena
            }
            if (bodyOrder.email.includes("@") && bodyOrder.email.includes(".")) {
                fetch(URL,
                    {
                        method: 'POST',
                        body: JSON.stringify(bodyOrder),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
            }


        }
    }



    return (
        <>
            <h1 className={style.texto}>Panel Admin</h1>
            <div className={style.centrarFormulario}>
                <form className={style.contact}>
                    <input type="text" value={user} placeholder="Usuario" name="user" id="inputuser" onChange={(event) => changeHandler(event, setUser)} />
                    <input type="email" value={email} placeholder="Correo electrónico" name="mail" id="inputmail" onChange={(event) => changeHandler(event, setEmail)} />
                    <input type="text" value={contrasena} placeholder="Contraseña" name="contrasena" id="inputcontrasena" onChange={(event) => changeHandler(event, setContrasena)} />
                    <button type="submit" onClick={postContact} className={style.size} >Entrar</button>
                </form>
            </div>

        </>
    )
}

export default PanelAdmin
