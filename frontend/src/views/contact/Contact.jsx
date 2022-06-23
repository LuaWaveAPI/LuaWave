import style from "../contact/Contact.module.css"

function Contact () {
    

    return (
        <>
        <div className="contact">
        <h1>Contáctanos</h1>
        <form action="http://localhost:4000/api/v0.0/contact/" method="POST" target="_blank">
        <input type="text" placeholder="Nombre" name="name" id="inputname" />
        <br />
        <input type="email" placeholder="Correo eléctrónico" name="mail" id="inputmail" />
        <br />
        <textarea name="coment" placeholder="Haznos llegar tu mensaje" id="areacoment" cols="30" rows="10"></textarea>
        <br />
        <button className="submit" type="submit">Enviar</button>
        </form>
        </div>
        </>
    )
}

export default Contact