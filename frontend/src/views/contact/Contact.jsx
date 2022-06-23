import style from "../Contact/Contact.module.css"
import { useState } from "react";

function Contact () {
    const URL = "http://localhost:4000/api/v0.0/contact/";
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [coment, setComent] = useState ("")

    function changeHandler (event, set) {
        set(event.target.value)
    }
    
    function postContact() {
        if(name === "" || email === "" || coment === ""){
            alert("Algún campo está vacío")
    }else {
        const bodyOrder = {
            name: name,
            email: email,
            coment: coment
        }

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

    return (
        <>
        <div className="contact">
        <h1>Contáctanos</h1>
        <form>
        <input type="text" value={name} placeholder="Nombre" name="name" id="inputname" onChange={(event)=>changeHandler(event, setName)} />
        <br />
        <input type="email" value={email} placeholder="Correo electrónico" name="mail" id="inputmail" onChange={(event)=>changeHandler(event, setEmail)} />
        <br />
        <textarea name="coment" value={coment} placeholder="Haznos llegar tu mensaje" id="areacoment" cols="30" rows="10" onChange={(event)=>changeHandler(event, setComent)}></textarea>
        <br />
        <button onClick={postContact} className="submit" >Enviar</button>
        </form>
        </div>
        </>
    )
}

export default Contact