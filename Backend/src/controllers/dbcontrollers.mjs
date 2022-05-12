import { luawave } from "../models/luawaveDB.mjs";

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

export function getIt(keys, table, callback) {
  luawave.all(`SELECT ${keys} FROM ${table}`, callback);
}

export function deleteIt(table, value, value2) {
  luawave.run(`DELETE FROM ${table} 
    WHERE ${value} = "${value2}"`);
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
  "Stock",
  "Photo",
  "Price",
  "Categoria",
]);
export const updateRentalArticle = updateFactory("Rental_articles", luawave, [
  "Rental_article_id",
  "Articles_id",
  "Rental_id",
  "Rental_date",
  "Return_date",
  "Quantity",
  "Price",
]);

export const updateCategoria = updateFactory("Categoria", luawave, [
  "ID_categoria",
  "Name",
  "Description",
]);

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
