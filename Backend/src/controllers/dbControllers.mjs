import { log } from "../models/log.mjs";
import { luawave } from "../models/luawaveDB.mjs";

/** Seleccion en la tabla que indiques, obteniendo valores que quieres
 *  y con una condicion simple
 *
 * Los valores que quieres que te seleccione @param {String} select
 * La table donde los quieres seleccionar @param {String} table
 * Nombre de la columna de la tabla @param {String} comparator
 * Sobre lo que quieres conmparar@param {El tipo de dato de la columna} value
 * Callback sobre la respuesta @param {Function} callback
 */
export function findOne(select, table, comparator, value, callback) {
  luawave.get(
    `
        SELECT ${select}
        FROM ${table}
        WHERE ${comparator} = "${value}"
        `,
    callback
  );
}

export function findContact(select, table, comparator, value, callback) {
  log.get(
    `
        SELECT ${select}
        FROM ${table}
        WHERE ${comparator} = "${value}"
        `,
    callback
  );
}

/** Seleccion todo los datos que indiques en la tabla que indiques, obteniendo todos
 *  los valores que cumplan las condicion indicada.
 *
 *  Los valores que quieres que te seleccione @param {String} select
 *  La table donde los quieres seleccionar @param {String} table
 *  Nombre de la columna de la tabla @param {String} comparator
 *  Sobre lo que quieres conmparar @param {El tipo de dato de la columna} value
 *  Callback sobre la respuesta @param {Function} callback
 */
export function findAll(select, table, comparator, value, callback) {
  luawave.all(
    `
        SELECT All ${select}
        FROM ${table}
        WHERE ${comparator} = "${value}"
        `,
    callback
  );
}

/**Insertas unos datos en una tabla
 *
 * El body de la peticion @param {Object} object
 * La table donde los quieres insertar @param {String} table
 * Callback sobre la respuesta @param {Function} callback
 */
export function insertIt(object, table, callback) {
  const newLabels = Object.keys(object);
  const newValues = Object.values(object);
  const labels = newLabels.join(", ");
  let prop = "?";
  for (let idx = 1; idx < newValues.length; idx++) {
    prop = prop + ",?";
  }
  const sql = `
        INSERT INTO ${table} (${labels})
        VALUES (${prop});
    `;
  luawave.run(sql, newValues, callback);
}
/**
 *
 * Codigo de tiempo en el momento de insert @param {Number} date
 * Endpoint donde se sucede el error @param {String} endpoint
 * Desscripci??n del error @param {String} description
 * Callback sobre la respuesta @param {Function} callback
 */
export function insertLog(
  date,
  endpoint,
  description,
  descriptionCompleted,
  callback
) {
  log.run(
    `INSERT INTO Register (Date, Endpoint, Description, DescriptionCompleted)
  VALUES (${date}, "${endpoint}", "${description}", "${descriptionCompleted}");`,
    callback
  );
}

export function insertContact(name, email, coment, callback) {
  log.run(
    `INSERT INTO Contact (name, email, coment)
  VALUES ("${name}", "${email}", "${coment}");`,
    callback
  );
}

/** Obtienes todo los datos que necesitas de una tabla
 *
 * Valores que quieres obtener @param {String} keys
 * Tablas donde quieres seleccionar @param {String} table
 * Callback sobre la respuesta @param {Function} callback
 */
export function getIt(keys, table, callback) {
  luawave.all(`SELECT ${keys} FROM ${table}`, callback);
}

/** Obtienes todo los datos de la base de datos log que necesitas de una tabla
 *
 * Valores que quieres obtener @param {String} keys
 * Callback sobre la respuesta @param {Function} callback
 */
export function getAllLog(callback) {
  log.all(`SELECT * FROM Register`, callback);
}

/** Obtienes todo los datos de la base de datos log que necesitas de la tabla Contact
 *
 * Valores que quieres obtener @param {String} keys
 * Callback sobre la respuesta @param {Function} callback
 */
export function getAllContact(callback) {
  log.all(`SELECT * FROM Contact`, callback);
}

/** Eliminas una fila de una tabla a traves de una condicion
 *
 * Tablas donde quieres eliminar @param {String} table
 * Nombre de la columna de la tabla @param {String} comparator
 * Sobre lo que quieres conmparar @param {El tipo de dato de la columna} value
 */
export function deleteIt(table, comparator, value) {
  luawave.run(`DELETE FROM ${table} 
    WHERE ${comparator} = "${value}"`);
}

export function deleteContact(table, comparator, value) {
  log.run(`DELETE FROM ${table} 
    WHERE ${comparator} = "${value}"`);
}

export const updateRental = updateFactory("Rental", luawave, [
  "Rental_id",
  "Name",
  "DNI",
  "Email",
  "Phone",
  "Code_postal",
]);
export const updateArticle = updateFactory("Articles", luawave, [
  "Articles_id",
  "Name",
  "Description",
  "Price",
  "Category",
  "Photo"
]);

export const updateCategory = updateFactory("Categories", luawave, [
  "ID_category",
  "Name",
  "Description",
]);

export const updateStaff = updateFactory("Staff", luawave, [
  "Staff_id",
  "Name",
  "DNI",
  "Password",
  "Email",
  "Phone",
  "Address",
  "Active",
]);

/** Realiza un itinirario para construir el cuerpo del UPDATE
 * y devuelve la sentencia a usar
 *
 * Tabla en la que hacer el UPDATE @param {String} table
 * Archivo de la base de datos a consultar por express @param {.db} db
 * Array de Strings de los nombre de las columnas@param {Array} item
 * ***Importante en la array conservar el mismo orden enviado en el Body***
 * @returns
 */
function updateFactory(table, db, item) {
  const updatedate = [];
  for (let idx = 0; idx < item.length; idx++) {
    updatedate[idx] = item[idx] + " = " + "?";
  }
  const columns = updatedate.join(",");
  return function (comparator, id, item) {
    const newValues = Object.values(item);
    const sql = `UPDATE ${table}
        SET ${columns}
        WHERE ${comparator} = ${id};`;
    db.run(sql, newValues);
  };
}

export function sqlCallback(error, data) {
  console.log("error:", error, "data:", data);
  if (error) throw error;
}
