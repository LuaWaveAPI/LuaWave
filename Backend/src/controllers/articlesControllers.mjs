import { deleteIt, findOne, updateArticle, getIt, insertIt, sqlCallback } from "./dbcontrollers.mjs";

export function getAllArticlesHandler(request,response){
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

export function getArticlesHandler(request,response){
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
        };
    });
    } catch (err){
        response.status(500);
        console.log(request.params.id)
        console.log(err);
        response.send(err);
        return
    }

}

export function postArticleController(request, response) {
    try {
        const {Name, Description, Photo, Price} = request.body;
        if ( !Name || !Description || !Photo || !Price ) {
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

export function putArticleController (request, response) {
    const {Articles_id} = request.body;
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
}

export function deleteArticleController (request, response) {
    const { Articles_id }= request.body
    findOne("Name", "Articles", "Articles_id", Articles_id, (error, data)=>{
        if (error) {
            console.error(error);
            throw error;
        }
        if(data) {
            deleteIt("Articles", "Articles_id", Articles_id);
            response.send(`Articulo ${data.Name} borrado correctamente`);
        }else{
            response.send("Articulo no encontrado");
        }
    });
}