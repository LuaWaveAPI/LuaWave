import {
  findOne,
  findAll,
  getIt,
  insertIt,
  deleteIt,
  sqlCallback,
} from "./dbcontrollers.mjs";

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
    response.status(500);
    console.log(err);
    response.send(err);
    return;
  }
}

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
    response.status(500);
    console.log(request.params.id);
    console.log(err);
    response.send(err);
    return;
  }
}

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
    response.status(500);
    console.log(err);
    response.send(err);
    return;
  }
}
