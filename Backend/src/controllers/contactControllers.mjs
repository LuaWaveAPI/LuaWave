import {
  insertContact,
  sqlCallback,
  getAllContact,
  findContact,
  deleteContact,
} from "./dbControllers.mjs";

export function getAllContactController(request, response) {
  try {
    const keys = "id, name, email, coment";
    getAllContact((error, data) => {
      if (error) {
        console.error(error);
        response.status(500);
        response.send("Database error.");
        return;
      }
      if (data) {
        response.json(data);
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

export function postContactController(request, response) {
  try {
    const { name, email, coment } = request.body;
    insertContact(name, email, coment, sqlCallback);
    response.send("Contacto añadido correctamente");
  } catch {
    insertLog(
      Date.now(),
      "/Contact/",
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error) => response.send(error)
    );
    response.status(500);
    return;
  }
}

export function deleteContactController(request, response) {
  try {
    const { id } = request.body;
    if (!id) {
      response.status(400);
      response.send("El campo esta vacío");
      return;
    }
    findContact("id", "Contact", "id", id, (error, data) => {
      if (error) {
        response.status(500);
        console.error(error);
        throw error;
      }
      if (data) {
        response.status(200);
        deleteContact("Contact", "id", id);
        response.send(`Contacto eliminado correctamente`);
      } else {
        response.status(404);
        response.send("Contacto no encontrado");
      }
    });
  } catch (err) {
    insertLog(
      Date.now(),
      "/Contact/",
      JSON.stringify(err.message),
      JSON.stringify(err),
      (error) => response.send(error)
    );
    response.status(500);
    return;
  }
}
