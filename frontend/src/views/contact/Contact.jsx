import style from './Contact.module.css';
import { useState } from "react";
import { HOST } from "./host"

function Contact() {
    const PATH = "api/v0.0/contact"
    const URL = HOST + PATH;
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [coment, setComent] = useState("")

    function changeHandler(event, set) {
        set(event.target.value)
    }


    function postContact() {
        if (name === "" || email === "" || coment === "") {
            alert("Algún campo está vacío")
        } else {
            const bodyOrder = {
                name: name,
                email: email,
                coment: coment
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
            <div className={style.contact}>
                <h1 className={style.texto}>Contáctanos</h1>
                <form>
                    <input type="text" value={name} placeholder="Nombre" name="name" id="inputname" onChange={(event) => changeHandler(event, setName)} />
                    <input type="email" value={email} placeholder="Correo electrónico" name="mail" id="inputmail" onChange={(event) => changeHandler(event, setEmail)} />
                    <textarea name="coment" value={coment} placeholder="Haznos llegar tu mensaje" id="areacoment" cols="30" rows="10" onChange={(event) => changeHandler(event, setComent)}></textarea>
                    <button type="submit" onClick={postContact} className={style.size} >Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Contact