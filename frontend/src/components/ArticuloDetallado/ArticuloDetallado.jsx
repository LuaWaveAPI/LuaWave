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
            {showButton &&
                <div className={styles.divDerecha}>
                    <img className={styles.imagen} src={"http://localhost:4000/public/" + articuloFull.Photo} alt={articuloFull.Name} />
                    {showButton && <button onClick={() => addNewProduct(articuloFull)}>Añadir al carrito</button>}
                    <div className={styles.cuadrarTexto}>
                        <p> {articuloFull.Price} €</p>
                        <p>{articuloFull.Name} -</p>
                    </div>
                    <p className={styles.pBold}>{articuloFull.Description}</p>
                </div>}
        </>
    );
}

export default ArticuloDetallado;