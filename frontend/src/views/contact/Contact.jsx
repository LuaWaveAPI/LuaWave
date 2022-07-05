import style from './Contact.module.css';
import { useState } from "react";
import { urls } from '../../defines/defines.jsx';
import { useNavigate } from "react-router-dom";


function Contact({setErrorLog, setAlertText }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [coment, setComent] = useState("")
    const navigate = useNavigate();

    console.log(urls[5])

    function changeHandler(event, set) {
        set(event.target.value)
    }


    function postContact(event) {
        if (name === "" || email === "" || coment === "") {

            setErrorLog("No se pueden dejar campos vacíos");
            setAlertText(true);

        } else {
            const bodyOrder = {
                name: name,
                email: email,
                coment: coment
            }
            if (bodyOrder.email.includes("@") && bodyOrder.email.includes(".")) {
                fetch(urls[5],
                    {
                        method: 'POST',
                        body: JSON.stringify(bodyOrder),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }
                );
                event.preventDefault()
                navigate("/");



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
                    <button type="button" onClick={postContact} className={style.size} >Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Contact