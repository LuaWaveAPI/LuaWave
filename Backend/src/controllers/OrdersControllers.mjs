import { luawave } from "../models/luawaveDB.mjs";
import {
    deleteIt,
    findOne,
    getIt,
    insertIt,
    findAll,
    updateRental,
  } from "./dbControllers.mjs";

/**Controlador que obtienen todos los pedidos de forma mas simplificada,
 * este controlador no muestra los articulos relacionados con cada pedido
 * @param {*} request
 * @param {*} response
 * @returns
 */
export function getAllOrdersController(request, response) {
    try {
        getIt(
            "Rental_id, Name, DNI, Email, Phone, Code_postal",
            "Rental", 
            (err, data) => {
                if (err) throw err;
                if (data) {
                    response.json(data);
                    return;
                }
            }
        );
    } catch (err) {
        insertLog(
          Date.now(),
          "/Orders/", 
          JSON.stringify(err.message),
          JSON.stringify(err),
          (error)=> response.send(error)
        )
        response.status(500);
        return;
      }
}


/**Controlador un un pedido mas detalladamente con sus articulos
 * 
 * @param {*} request 
 * @param {*} response 
 * @returns 
 */
export function getOrderController(request, response) {
    try {
        findOne(
            "Rental_id, Name, DNI, Email, Phone, Code_postal",
            "Rental",
            "Rental_id",    
            request.params.id,
            (err, data) => {
                if (err) throw err;
                if (data) {
                    findAll(
                    "Articles_id, Quantity, Price",
                    "Rental_articles",
                    "Rental_id", 
                    request.params.id,
                    (err,articles)=>{
                        if (err) throw err;
                        if (data) {
                            data.Articles= articles
                            response.json(data);
                            return;
                        }
                    })
                } else {
                    response.status(404);
                    response.send("Pedido no encontrado");
                }
            }
        );
    } catch (err) {
        insertLog(
          Date.now(),
          "/Orders/", 
          JSON.stringify(err.message),
          JSON.stringify(err),
          (error)=> response.send(error)
        )
        response.status(500);
        return;
      }
}

/** Controlador para añadir pedido
 * 
 * PRIMERO: Insertamos en la tabla Rental los datos proporcionados,
 * SEGUNDO: Obtenemos el identificador de ese nuevo pedido,
 * TERCERO: insertamos todos los articulos con ese nuevo identificador en la tabla Rental_articles.
 * 
 * @param {*} request 
 * @param {*} response 
 * @returns 
 */
export function postOrderController(request, response) {
    try {
        const {Name, DNI, Email, Phone, Code_postal, Articles} = request.body
        if (!Name || !DNI || !Email || !Phone || !Code_postal) {
            response.status(400);
            response.send("Algún campo esta vacío");
            return;
        }else{
            insertIt(
            {Name, DNI, Email, Phone, Code_postal}, 
            "Rental", 
            (err)=>{
                if (err) throw err;
            })
            luawave.get(`SELECT last_insert_rowid() as id`,
            (error,lastID)=>{
                if (error) throw err;
                if (lastID) {
                    for(let item of Articles){
                        findOne(
                        "Price",
                        "Articles",
                        "Articles_id", 
                        item.Articles_id,
                        (err,data)=>{
                            if (err) throw err;
                            if (data) {
                                insertIt(
                                    {
                                    Rental_id: lastID.id,
                                    Articles_id: item.Articles_id, 
                                    Quantity: item.Quantity,
                                    Price: data.Price
                                    }, 
                                    "Rental_articles", 
                                    (err)=>{
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
        insertLog(
          Date.now(),
          "/Orders/", 
          JSON.stringify(err.message),
          JSON.stringify(err),
          (error)=> response.send(error)
        )
        response.status(500);
        return;
      }
  }

/**Controlador para modificar un pedido.
 * PRIMERO: Busca si existe el pedido,
 * SEGUNDO: Modifica los datos de dicho pedidos,
 * TERCERO: borra todos los datos relacionado con dicho pedido en la tabla
 * Rental_articles y vuelve a inserte los nuevos que le proporcionemos.
 * 
 * @param {*} request 
 * @param {*} response 
 * @returns 
 */
export function putOrderController(request, response) {
    try {
        const {Rental_id, Name, DNI, Email, Phone, Code_postal, Articles} = request.body
        if (!Rental_id || !Name || !DNI || !Email || !Phone || !Code_postal) {
            response.status(400);
            response.send("Algún campo esta vacio");
            return;
        }else{
            findOne(
            "Rental_id", 
            "Rental", 
            "Rental_id", 
            Rental_id, 
            (err, data) => {
                if (err) throw err;
                if (data) {
                    const order = {Rental_id, Name, DNI, Email, Phone, Code_postal}
                    updateRental("Rental_id", Rental_id, order)
                    deleteIt("Rental_articles", "Rental_id", Rental_id)
                    for(let item of Articles){
                        findOne("Price","Articles","Articles_id", item.Articles_id,(err,data)=>{
                            if (err) throw err;
                            if (data) {
                                let price = data.Price
                                insertIt(
                                {
                                    Rental_id: Rental_id, 
                                    Articles_id: item.Articles_id, 
                                    Quantity: item.Quantity, 
                                    Price: price
                                }, 
                                "Rental_articles", 
                                (err)=>{
                                    if (err) throw err;
                                })
                            }   
                        })
                    }
                    response.status(201)
                    response.send("Pedido modificado correctamente")
                } else {
                    response.send("Pedido no encontrado");
                }
            })
        }
    } catch (err) {
        insertLog(
          Date.now(),
          "/Orders/", 
          JSON.stringify(err.message),
          JSON.stringify(err),
          (error)=> response.send(error)
        )
        response.status(500);
        return;
      }
}

/**Controlador que borra un pedido.
 * PRIMERO: Busca si existe dicho pedido,
 * SEGUNDO: Borra todos los datos relacionados de la tabla Rental_Articles,
 * TERCERO: Elimina el pedido de la tabla Rental.
 * 
 * @param {*} request 
 * @param {*} response 
 * @returns 
 */
export function deleteOrderController(request, response) {
    try {
        const { Rental_id } = request.body;
        if (!Rental_id) {
            response.status(400);
            response.send("Algún campo esta vacío");
            return;
        }
        findOne(
        "Rental_id", 
        "Rental", 
        "Rental_id", 
        Rental_id, 
        (err, data) => {
            if (err) throw err;
            if (data) {
                response.status(200);
                deleteIt("Rental_articles", "Rental_id", Rental_id)
                deleteIt("Rental", "Rental_id", Rental_id);
                response.send(`Pedido Nº ${data.Rental_id} borrado correctamente`);
            } else {
                response.status(404);
                response.send("Pedido no encontrado");
            }
        });
    } catch (err) {
        insertLog(
          Date.now(),
          "/Orders/", 
          JSON.stringify(err.message),
          JSON.stringify(err),
          (error)=> response.send(error)
        )
        response.status(500);
        return;
      }
  }