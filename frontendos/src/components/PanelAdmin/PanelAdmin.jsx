import style from '../PanelAdmin/PanelAdmin.module.css'
import { useState } from "react";


function PanelAdmin({setErrorLog, setAlertText }) {
    const URL = "http://localhost:4000/api/v0.0/backoffice/";
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")

    function changeHandler(event, set) {
        set(event.target.value)
    }


    function postContact() {
        if (user === "" || email === "" || contrasena === "") {
              
            setErrorLog("No se pueden dejar campos vacíos");
            setAlertText(true);
                
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
            <div className={style.centrarFormulario}>
                <form className={style.contact}>
                    <input type="text" value={user} placeholder="Usuario" name="user" id="inputuser" onChange={(event) => changeHandler(event, setUser)} />
                    <input type="email" value={email} placeholder="Correo electrónico" name="mail" id="inputmail" onChange={(event) => changeHandler(event, setEmail)} />
                    <input type="text" value={contrasena} placeholder="Contraseña" name="contrasena" id="inputcontrasena" onChange={(event) => changeHandler(event, setContrasena)} />
                    <button type="button" onClick={postContact} className={style.size} >Entrar</button>
                </form>
            </div>

        </>
    )
}

export default PanelAdmin
