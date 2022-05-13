import { luawave } from "../models/luawaveDB.mjs";
import {
    deleteIt,
    findOne,
    updateArticle,
    getIt,
    insertIt,
    sqlCallback,
  } from "./dbcontrollers.mjs";

/**Controlador que obtinen todos los datos que quieres de la tabla articulos
 *
 * @param {*} request
 * @param {*} response
 * @returns
 */
/*export function getAllOrdersController(request, response) {
try {
    const keys = "Rental_Articles_id, Rental_id, Articles_id, Quantity";
    getIt(keys, "Rental_Articles", (error, data) => {
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
    }
    });
} catch (err) {
    response.status(500);
    console.log(err);
    response.send(err);
    return;
    }
}

export function getOrderController(request, response) {
try {
    findOne(
    "Rental_Articles_id, Rental_id, Articles_id, Quantity",
    "Rental_Articles",
    "Rental_Articles_id",
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
        response.send("Artículo no encontrado");
        }
    });
} catch (err) {
    response.status(500);
    console.log(err);
    response.send(err);
    return;
    }
}*/

export function postOrderController(request, response) {
    try {
        const {Name, DNI, Articles} = request.body
        if (!Name || !DNI) {
            response.status(400);
            response.send("Algún campo esta vacío");
            return;
        }else{
            const rentalOrder = {Name, DNI}
            insertIt(rentalOrder, "Rental", sqlCallback)
            luawave.get(`SELECT last_insert_rowid() as Rental_id"`,
            (error,data)=>{
            if (error) {
                console.error(error);
                throw error;
            }
            if (data) {
                const ID = data.Rental_id
                for(let item of Articles){
                    const order = {ID, Article_id: item.Articles_id, Quantity: item.Quantity}
                    insertIt(order, "Rental_articles", sqlCallback)
                }
            }
            })
            
        }
    } catch (err) {
      response.status(500);
      console.log(err);
      response.send(err);
      return;
    }
  }
  