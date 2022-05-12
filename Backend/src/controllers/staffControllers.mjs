// getAllStaffController getStaffController postStaffController putStaffController deleteStaffController
import {
    getIt,
    findOne,
    insertIt,
    updateStaff,
    deleteIt,
    findAll,
    sqlCallback,
} from "./dbcontrollers.mjs";

/**Controlador para obtener los datos de todo el Staff 
*
* @param {*} request
* @param {*} response
* @returns
*/
export function getAllStaffController(request, response) {
    try {
        const keys = "Staff_id, Name, DNI, Email, Phone, Address, Active";
        getIt(keys, "Staff", (error, data) => {
            if (error) {
                console.error(error);
                response.status(500);
                response.send("Database error.");
                return;
            }
            if (data) {
                const json = JSON.stringify(data);
                response.status(200);
                response.send(json);
                return;
            } if (error) {
                console.error(error);
                response.status(500);
                response.send("Database error.");
                return;
            }
            if (data) {
                const json = JSON.stringify(data);
                response.status(200);
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

/**Controlador para obtener los datos de un único trabajador del Staff
*/
export function getStaffController(request, response) {
    try {
        findOne(
          "Name, DNI, Email, Phone, Address, Active",
          "Staff",
          "Staff_id",
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
              response.status(200);
              response.send(json);
              return;
            } else {
              response.status(404);
              response.send("Trabajador no encontrado");
            }
          }
        );
      } catch (err) {
        response.status(500);
        console.log(err);
        response.send(err);
        return;
      }
}

/**Controlador para añadir un trabajador al Staff (se genera su id de personal de LuaWave)
 * TODO: se necesitaría autorización
*/
export function postStaffController(request, response) {
    try {
        const { Name, DNI, Password, Email, Phone, Address, Active } = request.body;
        if (!Name || !DNI || !Password || !Email || !Phone || !Address || !Active) {
            response.status(400);
            response.send("Algún campo esta vacío");
            return;
        }
        findOne("Name", "Staff", "Name", Name, (error, data) => {
            if (error) {
                console.error(error);
                throw error;
            }
            if (data) {
                response.status(401);
                response.send("El trabajador ya existe");
                return;
            } else {
                insertIt(request.body, "Staff", sqlCallback);
                response.status(201);
                response.send("Trabajador registrado correctamente");
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

/**Controlador para actualizar el Staff
 * TODO: se necesitaría autorización
*/
export function putStaffController(request, response) {
    try {
        const { Name, DNI, Password, Email, Phone, Address, Active } = request.body;
        if (!Name || !DNI || !Password || !Email || !Phone || !Address || !Active) {
            response.status(400);
            response.send("Algún campo esta vacío");
            return;
        }
        findOne("Name", "Staff", "Staff_id", Staff_id, (error, data) => {
            if (error) {
                console.error(error);
                throw error;
            }
            if (data) {
                updateStaff("Staff_id", Staff_id, request.body);
                response.send(`Datos del trabajador ${data.Name} actualizados`);
            } else {
                response.send("Trabajador no encontrado");
            }
        });
    } catch (err) {
        response.status(500);
        console.log(err);
        response.send(err);
        return;
    }
}

/**Controlador para eliminar un trabajador del Staff
 * TODO: se necesitaría autorización
*/
export function deleteStaffController(request, response) {
    try {
        const { Staff_id } = request.body;
        if (!Staff_id) {
            response.status(400);
            response.send("Algún campo esta vacío");
            return;
        }
        findOne("Name", "Staff", "Staff_id", Staff_id, (error, data) => {
            if (error) {
                response.status(500);
                console.error(error);
                throw error;
            }
            if (data) {
                response.status(200);
                deleteIt("Staff", "Staff_id", Staff_id);
                response.send(`Trabajador ${data.Name} eliminado correctamente`);
            } else {
                response.status(404);
                response.send("Trabajador no encontrado");
            }
        });
    } catch (err) {
        response.status(500);
        console.log(err);
        response.send(err);
        return;
    }
}


