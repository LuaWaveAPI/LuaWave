function ComponenteArticulo({articulo}) {
    
    return (
    <>
        <div>

        </div>
        <p>{articulo.Name}</p>
        <img src={articulo.Photo} alt={articulo.Name}/>
    </>
    );
  }
  
  export default ComponenteArticulo;