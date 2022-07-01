import express from "express";
import multer from "multer";
import { config } from "dotenv";
import {
  deleteArticleController,
  getAllArticlesController,
  getArticlesController,
  getSkateConArticlesController,
  getSkateSinArticlesController,
  getSurfConArticlesController,
  getSurfSinArticlesController,
  postArticleController,
  putArticleController,
} from "./controllers/articlesControllers.mjs";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
  postCategoryController,
  putCategoryController,
  deleteCategoryController,
} from "./controllers/categoriesControllers.mjs";
import { getAllLogController } from "./controllers/logControllers.mjs";
import { loginCreateToken } from "./controllers/loginControllers.mjs";
import {
  getAllContactController,
  postContactController,
  deleteContactController,
} from "./controllers/contactControllers.mjs";
import {
  deleteOrderController,
  getAllOrdersController,
  getOrderController,
  postOrderController,
  putOrderController,
} from "./controllers/ordersControllers.mjs";
import {
  getAllStaffController,
  getStaffController,
  postStaffController,
  putStaffController,
  deleteStaffController,
} from "./controllers/staffControllers.mjs";

const PATH_PREFIX = "/api/v0.0";
//config();
if (process.env.NODE_ENV != "production") {
  config();
}
const UPLOADS_FOLDER = "./photosArticles/";
const app = express();

/*
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Dominio desde el que se llama y se quiere permitir
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  }); // Deshabilitar CORS
  */

/*
 const port = 4000;
*/

console.log(process.env);
const port = process.env.PORT;


try {
  const upload = multer({ dest: UPLOADS_FOLDER });
  const jsonParser = express.json();

  app.use("/public/", express.static(UPLOADS_FOLDER));
  app.use("/", express.static("../frontend/build"));
  // app.use("/backoffice/", express.static("../../frontendos/build"));

  //Articles
  app.get(PATH_PREFIX + "/articles/", getAllArticlesController);
  app.get(PATH_PREFIX + "/articles/surf/con", getSurfConArticlesController);
  app.get(PATH_PREFIX + "/articles/surf/sin", getSurfSinArticlesController);
  app.get(PATH_PREFIX + "/articles/skate/con", getSkateConArticlesController);
  app.get(PATH_PREFIX + "/articles/skate/sin", getSkateSinArticlesController);
  app.get(PATH_PREFIX + "/article/:id", getArticlesController);
  app.post(
    PATH_PREFIX + "/articles/",
    upload.single("Photo"),
    postArticleController
  );
  app.put(
    PATH_PREFIX + "/article/",
    upload.single("Photo"),
    putArticleController
  );
  app.delete(PATH_PREFIX + "/article", jsonParser, deleteArticleController);

  //Categories
  app.get(PATH_PREFIX + "/categories/", getAllCategoriesHandler);
  app.get(PATH_PREFIX + "/category/:id", jsonParser, getCategoryHandler);
  app.post(PATH_PREFIX + "/category/", jsonParser, postCategoryController);
  app.put(PATH_PREFIX + "/category/", jsonParser, putCategoryController);
  app.delete(PATH_PREFIX + "/category", jsonParser, deleteCategoryController);

  //Orders
  app.get(PATH_PREFIX + "/orders/", getAllOrdersController);
  app.get(PATH_PREFIX + "/order/:id", getOrderController);
  app.post(PATH_PREFIX + "/order/", jsonParser, postOrderController);
  app.put(PATH_PREFIX + "/order/", jsonParser, putOrderController);
  app.delete(PATH_PREFIX + "/order/", jsonParser, deleteOrderController);

  //Staff
  app.get(PATH_PREFIX + "/staffs/", getAllStaffController);
  app.get(PATH_PREFIX + "/staff/:id", getStaffController);
  app.post(PATH_PREFIX + "/staff/", jsonParser, postStaffController);
  app.put(PATH_PREFIX + "/staff/", jsonParser, putStaffController);
  app.delete(PATH_PREFIX + "/staff/", jsonParser, deleteStaffController);

  //Log
  app.get(PATH_PREFIX + "/log/", getAllLogController);

  //Login
  app.post(PATH_PREFIX + "/login/", jsonParser, loginCreateToken);

  app.use(function (err, req, res, next) {
    if (!err) {
      next();
    } else {
      res.status(500);
      res.render("error", { error: err });
    }
  });
  //Contact
  app.get(PATH_PREFIX + "/contact/", getAllContactController);
  app.post(PATH_PREFIX + "/contact/", jsonParser, postContactController);
  app.delete(PATH_PREFIX + "/contact/", jsonParser, deleteContactController);

  app.use(function (err, req, res, next) {
    if (!err) {
      next();
    } else {
      res.status(500);
      res.render("error", { error: err });
    }
  });

  //Express running
  app.listen(port, () => {
    console.log(`Express running... Example app listening on port ${port}`);
  });
} catch (err) {
  console.log("Algo va mal");
  console.log(err);
}
