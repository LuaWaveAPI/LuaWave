import {
  findOne,
  getIt,
  insertIt,
  deleteIt,
  sqlCallback,
  updateCategory,
} from "./dbControllers.mjs";

/**Controlador para obtener los datos de todas las categorías*/
export function getAllCategoriesHandler(request, response) {
  try {
    const keys = "ID_category, Name, Description";
    getIt(keys, "Categories", (error, data) => {
      if (error) {
        console.error(error);
        response.status(500);
        response.send("Database error.");
        return;
      }
      if (data) {
        const json = JSON.stringify(data);
        response.send(json);
        return;
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Categories/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

/**Controlador para obtener los datos de una sola categoría, en función su ID*/
export function getCategoryHandler(request, response) {
  try {
    findOne(
      "Name,Description",
      "Categories",
      "ID_category",
      request.params.id,
      (error, data) => {
        if (error) {
          console.error(error);
          response.status(500);
          response.send("Database error.");
          return;
        }
        if (data) {
          const json = JSON.stringify(data);
          response.send(json);
          return;
        } else {
          response.status(404);
          response.send("Categoría no encontrada");
        }
      }
    );
  } catch (err) {
    insertLog(
      Date.now(),
      "/Categories/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

/**Controlador para añadir los datos de una sola categoría [Name, Description] ya que
 * la ID_category se genera y asigna automáticamente en la base de datos*/
export function postCategoryController(request, response) {
  try {
    const { Name, Description } = request.body;
    if (!Name || !Description) {
      response.status(400);
      response.send("Algún campo esta vacío");
      return;
    }
    findOne("Name", "Categories", "Name", Name, (error, data) => {
      if (error) {
        console.error(error);
        throw error;
      }
      if (data) {
        response.status(401);
        response.send("La categoría ya existe");
        return;
      } else {
        insertIt(request.body, "Categories", sqlCallback);
        response.send("Categoría registrada correctamente");
        return;
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Categories/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

/**Controlador para modificar los datos de una sola categoría con el mismo cuerpo del POST
 * añadiendo la ID_Category
 */
export function putCategoryController(request, response) {
  try {
    const { ID_category, Name, Description } = request.body;
    if (!ID_category || !Name || !Description) {
      response.status(400);
      response.send("Algún campo esta vacio");
      return;
    }
    findOne("Name", "Categories", "ID_category", ID_category, (error, data) => {
      if (error) {
        console.error(error);
        throw error;
      }
      if (data) {
        updateCategory("ID_category", ID_category, request.body);
        response.send(`Datos de la categoría modificados`);
      } else {
        response.send("Categoría no encontrada");
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Categories/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}

/**Controlador para borrar una categoría, en función de su ID_category*/
export function deleteCategoryController(request, response) {
  try {
    const { ID_category } = request.body;
    if (!ID_category) {
      response.status(400);
      response.send("Algún campo esta vacío");
      return;
    }
    findOne("Name", "Categories", "ID_category", ID_category, (error, data) => {
      if (error) {
        response.status(500);
        console.error(error);
        throw error;
      }
      if (data) {
        response.status(200);
        deleteIt("Categories", "ID_category", ID_category);
        response.send(`Categoría borrada correctamente`);
      } else {
        response.status(404);
        response.send("Categoría no encontrada");
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Categories/", 
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error)=> response.send(error)
    )
    response.status(500);
    return;
  }
}
