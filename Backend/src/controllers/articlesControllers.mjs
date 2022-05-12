import { deleteIt, findOne, updateArticle, getIt, insertIt, sqlCallback } from "./dbcontrollers.mjs";

/**Controlador que obtinen todos los datos que quieres de la tabla articulos
 * 
 * @param {*} request 
 * @param {*} response 
 * @returns 
 */
export function getAllArticlesController(request,response){
    try {
        const keys = "Articles_id, Name, Description";
        getIt(keys, "Articles", (error, data)=>{
            if ( error ) {
                console.error(error);
                response.status(500);
                response.send("Database error.");
                return
            };
            if ( data ){
                const json = JSON.stringify(data);
                response.status(200)
                response.send(json);
                return
            };
        });
    } catch (err) {
        response.status(500);
        console.log(err);
        response.send(err);
        return
    }
}

/**Controlador que obtiene un unico articulo a traves de 
 * un parametro en la ruta
 * @param {*} request 
 * @param {*} response s
 * @returns 
 */
export function getArticlesController(request,response){
    try{
    findOne("Name,Description,Price", "Articles", "Articles_id", request.params.id, (error, data)=>{
        if ( error ) {
            console.error(error);
            response.status(500);
            response.send("Database error.");
            return
        };
        if ( data ){
            const json = JSON.stringify(data);
            response.send(json);
            return
        } else {
            response.status(404)
            response.send("Articulo no encontrado")
        };
    });
    } catch (err){
        response.status(500);
        console.log(err);
        response.send(err);
        return
    }

}


export function postArticleController(request, response) {
    try {
        const {Name, Description, Photo, Stock, Price, Categoria} = request.body;
        if ( !Name || !Description || !Photo || !Stock || !Price || !Categoria) {
            response.status(400);
            response.send("Algun campo esta vacio");
            return
        }
        findOne("Name","Articles", "Name", Name, (error, data)=>{
            if (error) {
                console.error(error);
                throw error;
            }
            if ( data ) {
                response.status(401);
                response.send("El articulo ya existe");
                return
            } else {
                insertIt(request.body,"Articles",sqlCallback);
                response.status(201);
                response.send("Articulo registrado correctamente");
                return
            }
        });
    } catch (err) {
        response.status(500);
        console.log(err)
        response.send(err);
        return
    }
}


// TODO: poner autorizacion y respuesta 401
export function putArticleController (request, response) {
    try {
        const {Name, Description, Photo, Stock, Price, Categoria} = request.body;
        if ( !Name || !Description || !Photo || !Stock || !Price || !Categoria) {
            response.status(400);
            response.send("Algun campo esta vacio");
            return
        }
        findOne("Name", "Articles", "Articles_id", Articles_id, (error, data)=>{
            if (error) {
                console.error(error);
                throw error;
            }
            if(data) {
                updateArticle("Articles_id", Articles_id, request.body);
                response.send(`Datos del articulo ${data.Name} modificado`);
            }else{
                response.send("Articulo no encontrado");
            }
        })
    } catch (err) {
        response.status(500);
        console.log(err)
        response.send(err);
        return
    }
}

// TODO: poner autorizacion y respuesta 401
export function deleteArticleController (request, response) {
    try{    
        const {Articles_id} = request.body;
            if ( !Articles_id) {
                response.status(400);
                response.send("Algun campo esta vacio");
                return
            }
        findOne("Name", "Articles", "Articles_id", Articles_id, (error, data)=>{
            if (error) {
                response.status(500)
                console.error(error);
                throw error;
            }
            if(data) {
                responde.status(200)
                deleteIt("Articles", "Articles_id", Articles_id);
                response.send(`Articulo ${data.Name} borrado correctamente`);
            }else{
                response.status(404)
                response.send("Articulo no encontrado");
            }
        });
    } catch (err){
        response.status(500);
        console.log(err)
        response.send(err);
        return
    }
}
