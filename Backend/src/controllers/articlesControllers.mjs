import {
  deleteIt,
  findOne,
  updateArticle,
  getIt,
  insertIt,
  sqlCallback,
  findAll,
  insertLog,
} from "./dbControllers.mjs";

/**Controlador que obtinen todos los datos que quieres de la tabla articulos
 *
 * @param {*} request
 * @param {*} response
 * @returns
 */
export function getAllArticlesController(request, response) {
  try {
    const keys =
      "Articles_id, Name, Description, Category, Price , Photo, Stock";
    getIt(keys, "Articles", (error, data) => {
      if (error) throw error;
      if (data) {
        const json = JSON.stringify(data);
        response.status(200);
        response.send(json);
        return;
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

/**Controlador que obtinen todos los datos con categoria Surf
 *
 * @param {*} request
 * @param {*} response
 * @returns
 */
export function getSurfConArticlesController(request, response) {
  try {
    const keys = "Articles_id, Name, Description, Category, Price, Photo";
    findAll(
      keys,
      "Articles",
      "Category",
      "Surf con accesorios",
      (error, data) => {
        if (error) throw error;
        if (data) {
          const json = JSON.stringify(data);
          response.status(200);
          response.send(json);
          return;
        }
      }
    );
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

export function getSurfSinArticlesController(request, response) {
  try {
    const keys = "Articles_id, Name, Description,Category, Price, Photo";
    findAll(
      keys,
      "Articles",
      "Category",
      "Surf sin accesorios",
      (error, data) => {
        if (error) throw error;
        if (data) {
          const json = JSON.stringify(data);
          response.status(200);
          response.send(json);
          return;
        }
      }
    );
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

/**Controlador que obtinen todos los datos con categoria skate
 *
 * @param {*} request
 * @param {*} response
 * @returns
 */
export function getSkateConArticlesController(request, response) {
  try {
    const keys = "Articles_id, Name, Description, Category, Price, Photo";
    findAll(
      keys,
      "Articles",
      "Category",
      "Skate con accesorios",
      (error, data) => {
        if (error) throw error;
        if (data) {
          const json = JSON.stringify(data);
          response.status(200);
          response.send(json);
          return;
        }
      }
    );
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

export function getSkateSinArticlesController(request, response) {
  try {
    const keys = "Articles_id, Name, Description, Category, Price, Photo";
    findAll(
      keys,
      "Articles",
      "Category",
      "Skate sin accesorios",
      (error, data) => {
        if (error) throw error;
        if (data) {
          const json = JSON.stringify(data);
          response.status(200);
          response.send(json);
          return;
        }
      }
    );
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

/**Controlador que obtiene un unico articulo a traves de
 * un parametro en la ruta
 * @param {*} request
 * @param {*} response s
 * @returns
 */
export function getArticlesController(request, response) {
  try {
    findOne(
      "Name,Description,Price,Category",
      "Articles",
      "Articles_id",
      request.params.id,
      (error, data) => {
        if (error) throw error;
        if (data) {
          const json = JSON.stringify(data);
          response.status(200);
          response.send(json);
          return;
        } else {
          response.status(404);
          response.send("Artículo no encontrado");
        }
      }
    );
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

export function postArticleController(request, response) {
  try {
    console.log(request.file.filename)
    const completedObject = {
			...request.body,
			Photo: request.file.filename
		}
		
    const { Name, Description, Photo, Stock, Price, Category } = completedObject;
    if (!Name || !Description || !Photo || !Stock || !Price || !Category) {
      response.status(400);
      response.send("Algún campo esta vacío");
      return;
    }
    findOne("Name", "Articles", "Name", Name, (error, data) => {
      if (error) {
        console.error(error);
        throw error;
      }
      if (data) {
        insertIt(completedObject, "Articles", sqlCallback);
        response.status(201);
        response.send(
          "CUIDADO! Has creado un articulo con un nombre ya existente"
        );
        return;
      } else {
        insertIt(completedObject, "Articles", sqlCallback);
        response.status(201);
        response.send("Artículo registrado correctamente");
        return;
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

// TODO: poner autorizacion y respuesta 401
export function putArticleController(request, response) {
  try {
    console.log(request.file.filename)
    const completedObject = {
			...request.body,
			Photo: request.file.filename
		}
		
    const { Articles_id, Name, Description, Photo, Price, Category } =
      completedObject;
      
    if (
      !Articles_id ||
      !Name ||
      !Description ||
      !Photo ||
      !Price ||
      !Category
    ) {
      response.status(400);
      response.send("Algún campo esta vacio");
      return;
    }
    findOne("Name", "Articles", "Articles_id", Articles_id, (error, data) => {
      if (error) {
        console.error(error);
        throw error;
      }
      if (data) {
        fs.rm(`../../photosAticles/${data.photo}`)
        updateArticle("Articles_id", Articles_id, completedObject);
        response.send(`Datos del artículo ${data.Name} modificado`);
      } else {
        response.send("Artículo no encontrado");
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

// TODO: poner autorizacion y respuesta 401
export function deleteArticleController(request, response) {
  try {
    const { Articles_id } = request.body;
    if (!Articles_id) {
      response.status(400);
      response.send("Algún campo esta vacío");
      return;
    }
    findOne("Name", "Articles", "Articles_id", Articles_id, (error, data) => {
      if (error) {
        response.status(500);
        console.error(error);
        throw error;
      }
      if (data) {
        response.status(200);
        deleteIt("Articles", "Articles_id", Articles_id);
        response.send(`Artículo ${data.Name} borrado correctamente`);
      } else {
        response.status(404);
        response.send("Artículo no encontrado");
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Articles/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}
