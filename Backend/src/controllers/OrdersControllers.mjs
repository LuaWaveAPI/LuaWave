import { luawave } from "../models/luawaveDB.mjs";
import {
    deleteIt,
    findOne,
    updateArticle,
    getIt,
    insertIt,
    sqlCallback,
    findAll,
  } from "./dbcontrollers.mjs";

/**Controlador que obtinen todos los datos que quieres de la tabla ordenes
 *
 * @param {*} request
 * @param {*} response
 * @returns
 */
export function getAllOrdersController(request, response) {
try {
    getIt("Rental_id, Name, DNI, Email, Phone, Code_postal", "Rental", (error, data) => {
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
    findOne("Rental_id, Name, DNI, Email, Phone, Code_postal",
    "Rental",
    "Rental_id",    
    request.params.id,
    (error, data) => {
        if (error) {
        console.error(error);
        response.status(500);
        response.send("Database error.");
        return;
        }
        if (data) {
            findAll("Rental_articles_id, Articles_id, Quantity, Price","Rental_articles","Rental_id", request.params.id,(err,datas)=>{
                if (err) {
                    console.error(err);
                    response.status(500);
                    response.send("Database error.");
                    return;
                    }
                if (data) {
                    data.Articles= datas
                    response.json(data);
                    return;
                }
            })
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
}

export function postOrderController(request, response) {
    try {
        const {Name, DNI, Email, Phone, Code_postal, Articles} = request.body
        if (!Name || !DNI || !Email || !Phone || !Code_postal) {
            response.status(400);
            response.send("Algún campo esta vacío");
            return;
        }else{
            const rentalOrder = {Name, DNI, Email, Phone, Code_postal}
            insertIt(rentalOrder, "Rental", (err)=>{
                if(err){
                    console.log(err)
                    throw err
                }
            })
            luawave.get(`SELECT last_insert_rowid() as id`,
            (error,datas)=>{
            if (error) {
                console.error(error);
                throw error;
            }
            if (datas) {
                for(let item of Articles){
                    findOne("Price","Articles","Articles_id", item.Articles_id,(err,data)=>{
                        if (err) {
                            console.error(err);
                            throw err;
                        }
                        if (data) {
                            let price = data.Price
                            const order = {Rental_id: datas.id, Articles_id: item.Articles_id, Quantity: item.Quantity, Price: price}
                            insertIt(order, "Rental_articles", (err)=>{
                                if(err){
                                    console.log(err);
                                    throw err;
                                }
                            })
                        }   
                    })
                }
                response.status(201)
                response.send("Pedido añadido correctamente")
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
  