import {
  findOne,
  findAll,
  getIt,
  insertIt,
  deleteIt,
  sqlCallback,
} from "./dbcontrollers.mjs";

export function getAllCategoriasHandler(request, response) {
  try {
    const keys = "ID_categoria, Name, Description";
    getIt(keys, "Catergorias", (error, data) => {
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

export function getCategoriaHandler(request, response) {
  try {
    findOne(
      "Name,Description",
      "Categorias",
      "ID_categoria",
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

export function postCategoriaController(request, response) {
  try {
    const { Name, Description, Photo, Price } = request.body;
    if (!Name || !Description || !Photo || !Price) {
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
        response.status(401);
        response.send("La categoria ya existe");
        return;
      } else {
        insertIt(request.body, "Categoria", sqlCallback);
        response.send("Categoria registrada correctamente");
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
