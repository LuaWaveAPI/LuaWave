import style from "./ComponenteArticulo.module.css"
function ComponenteArticulo({articulo}) {
    return (
    <>
        <div className={style.main}>
        <img className={style.imagen} src={articulo.Photo} alt={articulo.Name}/>
        <p>{articulo.Name}</p>
        </div>
    </>
    );
  }
  
  export default ComponenteArticulo;