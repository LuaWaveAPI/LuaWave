import express, { json } from "express";
import {
  deleteArticleController,
  getAllArticlesController,
  getArticlesController,
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
import {
  getAllStaffController,
  getStaffController,
  postStaffController,
  putStaffController,
  deleteStaffController,
} from "./controllers/staffControllers.mjs";

const PATH_PREFIX = "/api/v0.0";
const app = express();
const port = 3000;

try {
  const jsonParser = express.json();
  //Articles
  app.get(PATH_PREFIX + "/articles/", getAllArticlesController);
  app.get(PATH_PREFIX + "/article/:id", getArticlesController);
  app.post(PATH_PREFIX + "/article/", jsonParser, postArticleController);
  app.put(PATH_PREFIX + "/article/", jsonParser, putArticleController);
  app.delete(PATH_PREFIX + "/article", jsonParser, deleteArticleController);

  //Categories
  app.get(PATH_PREFIX + "/categories/", getAllCategoriesHandler);
  app.get(PATH_PREFIX + "/category/:id", jsonParser, getCategoryHandler);
  app.post(PATH_PREFIX + "/category/", jsonParser, postCategoryController);
  app.put(PATH_PREFIX + "/category/", jsonParser, putCategoryController);
  app.delete(PATH_PREFIX + "/category", jsonParser, deleteCategoryController);

  //Staff
  app.get(PATH_PREFIX + "/staffs/", getAllStaffController);
  app.get(PATH_PREFIX + "/staff/:id", getStaffController);
  app.post(PATH_PREFIX + "/staff/", jsonParser, postStaffController);
  app.put(PATH_PREFIX + "/staff/", jsonParser, putStaffController);
  app.delete(PATH_PREFIX + "/staff/", jsonParser, deleteStaffController);

  //Express running
  app.listen(port, () => {
    console.log(`Express running... Example app listening on port ${port}`);
  });
} catch (err) {
  console.log("Algo va mal");
}
