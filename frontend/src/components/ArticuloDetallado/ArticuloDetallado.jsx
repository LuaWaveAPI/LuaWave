import { Article } from "../../models/ArticleClass.mjs";
import styles from "./ArticuloDetallado.module.css"
function ArticuloDetallado({ articuloFull, showButton }) {
    function addNewProduct(article) {
        const data = JSON.parse(localStorage.getItem("articulos"));
        const newdata = new Article(article);
        data.push(newdata)
        localStorage.setItem("articulos", JSON.stringify(data));
    }
    // const [id] = JSON.parse(localStorage.getItem("articulos"));      
    //     localStorage.setItem("articulos", JSON.stringify(new Article(id)));
    return (
        <>
            <div className={styles.divDerecha}>

                <div className={styles.cuadrarNum}>
                    <p> {articuloFull.Price} €</p>
                    <p>{articuloFull.Name} -</p>
                </div>
                {showButton && <button className={styles.buttonBlack} onClick={() => addNewProduct(articuloFull)}>Añadir al carrito</button>}
                <p className={styles.pBold}>{articuloFull.Description}</p>
                <div className={styles.divImagen}>
                    <img className={styles.imagen} src={"http://localhost:4000/public/" + articuloFull.Photo} alt={articuloFull.Name} />
                </div>
            </div>
        </>
    );
}

export default ArticuloDetallado;