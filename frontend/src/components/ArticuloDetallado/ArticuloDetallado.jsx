import { Article } from "../../models/ArticleClass.mjs";
import styles from "./ArticuloDetallado.module.css"
function ArticuloDetallado({ articuloFull, showButton }) {
    function addNewProduct(article) {
        const data = JSON.parse(localStorage.getItem("articulos"));
        const newdata = new Article(article);
        data.push(newdata)
        localStorage.setItem("articulos", JSON.stringify(data));
    }
    return (
        <>
            <div className={styles.divDerecha}>
            <p className={styles.pBold}>{articuloFull.Description}</p>
                <div className={styles.cuadrarNum}>
                    <p>{articuloFull.Price} € </p>
                    <p>{articuloFull.Name}</p>
                </div>
                {showButton && <button className={styles.buttonBlack} onClick={() => addNewProduct(articuloFull)}>Añadir al carrito</button>}
                <img className={styles.imagen} src={"http://localhost:4000/public/" + articuloFull.Photo} alt={articuloFull.Name} />
            </div>

        </>
    );
}

export default ArticuloDetallado;