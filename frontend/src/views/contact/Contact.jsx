import style from "../Contact/Contact.module.css"

function Contact () {
    return (
        <>
        <div className="contact">
        <h1>Contáctanos</h1>
        <form>
        <input type="text" placeholder="Nombre" name="name" id="inputname" />
        <br />
        <input type="email" placeholder="Correo eléctrónico" name="mail" id="inputmail" />
        <br />
        <textarea name="coment" placeholder="Haznos llegar tu mensaje" id="areacoment" cols="30" rows="10"></textarea>
        <br />
        <button className="submit" type="button">Enviar</button>
        </form>
        </div>
        </>
    )
}

export default Contact