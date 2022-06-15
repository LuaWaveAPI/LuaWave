import { getAllContact } from "./dbControllers.mjs";

export function getAllContact(request, response) {
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
