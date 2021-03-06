import { getAllLog } from "./dbControllers.mjs";

export function getAllLogController(request, response) {
    try {
        const keys = "Staff_id, Name, DNI, Email, Phone, Address, Active";
        getAllLog((error, data) => {
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