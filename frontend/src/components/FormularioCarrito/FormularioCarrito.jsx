import { useState } from "react";
import { urls } from "../../defines/defines";

function FormularioCarrito (){
    const [ name, setName ] = useState("");
    const [ DNI, setDNI ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ codepostal, setCodepostal ] = useState("");
    
    function changeHandler (event, set) {
        set(event.target.value);
    }

    function postOrder(){
        const data = JSON.parse(localStorage.getItem("articulos"));
        const bodyOrder = {
            Name: name,
            DNI: DNI,
            Email: email,
            Phone: phone,
            Code_postal: codepostal,
            Articles: data
        };
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
        setCodepostal("")
    }
    
    
    return(
        <>
        <input type="text" value={name} placeholder="Escribe tu nombre" onChange={(event)=>changeHandler(event, setName)}/>
        <input type="text" value={DNI} placeholder="Escribe tu DNI" onChange={(event)=>changeHandler(event, setDNI)}/>
        <input type="text" value={email} placeholder="Escribe tu email" onChange={(event)=>changeHandler(event, setEmail)}/>
        <input type="text" value={phone} placeholder="Escribe tu telefono" onChange={(event)=>changeHandler(event, setPhone)}/>
        <input type="text" value={codepostal} placeholder="Escribe tu Codigo postal" onChange={(event)=>changeHandler(event, setCodepostal)}/>
        <button onClick={postOrder}>Comprar</button>
        </>
    )
}
export default FormularioCarrito