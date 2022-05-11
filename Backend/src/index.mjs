import express from "express";
import { deleteArticleController, getAllArticlesHandler, getArticlesHandler, postArticleController, putArticleController } from "./controllers/articlesControllers.mjs";
import { getAllCategoriasHandler, getCategoriasHandler, postCategoriaController } from "./controllers/categoriasControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();
const port = 3000;

try{
    const jsonParser = express.json();
//Articles
    app.get(PATH_PREFIX+"/articles/", getAllArticlesHandler);
    app.get(PATH_PREFIX+"/article/:id", getArticlesHandler);
    app.post(PATH_PREFIX+"/article/",jsonParser, postArticleController);
    app.put(PATH_PREFIX+"/article/", jsonParser, putArticleController);
    app.delete(PATH_PREFIX+"/article", jsonParser, deleteArticleController);
    app.get(PATH_PREFIX+"/categorias/", getAllCategoriasHandler);
    app.get(PATH_PREFIX+"/categorias/:id", getCategoriasHandler);


    app.listen(port,()=>{
        console.log("Express running...")});
}catch(err){
    console.log("Algo va mal")
}