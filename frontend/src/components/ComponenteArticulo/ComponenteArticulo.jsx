import style from "./ComponenteArticulo.module.css"
import { HOST } from "../../defines/host";
function ComponenteArticulo({ articulo }) {
    return (
        <>
            <div className={style.main}>
                <img className={style.imagen} src={HOST+"public/" + articulo.Photo} alt={articulo.Name} />
                <p>{articulo.Name}</p>
            </div>
        </>
    );
}

export default ComponenteArticulo;