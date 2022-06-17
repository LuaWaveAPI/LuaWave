import { insertContact, sqlCallback, getAllContact } from "./dbControllers.mjs";

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
