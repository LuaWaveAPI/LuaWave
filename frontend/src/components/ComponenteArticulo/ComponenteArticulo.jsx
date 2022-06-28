import style from "./ComponenteArticulo.module.css"
function ComponenteArticulo({ articulo }) {
    return (
        <>
            <div className={style.main}>
                <img className={style.imagen} src={"http://localhost:4000/public/" + articulo.Photo} alt={articulo.Name} />
                <p>{articulo.Name}</p>
            </div>
        </>
    );
}

export default ComponenteArticulo;