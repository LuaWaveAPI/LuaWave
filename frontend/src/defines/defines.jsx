import { config } from "dotenv";
if (process.env.NODE_ENV != "production") {
    config();
  }
const urls = [
    "http://localhost:"+process.env.PORT+"/api/v0.0/articles/surf/con",
    "http://localhost:"+process.env.PORT+"/api/v0.0/articles/surf/sin",
    "http://localhost:"+process.env.PORT+"/api/v0.0/articles/skate/con",
    "http://localhost:"+process.env.PORT+"/api/v0.0/articles/skate/sin",
    "http://localhost:"+process.env.PORT+"/api/v0.0/order"

]

export {urls}