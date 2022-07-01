import { config } from "dotenv";
if (process.env.NODE_ENV != "production") {
    config();
    PUBLIC_URL = "http://localhost:"
  }
const urls = [
    PUBLIC_URL+process.env.PORT+"/api/v0.0/articles/surf/con",
    PUBLIC_URL+process.env.PORT+"/api/v0.0/articles/surf/sin",
    PUBLIC_URL+process.env.PORT+"/api/v0.0/articles/skate/con",
    PUBLIC_URL+process.env.PORT+"/api/v0.0/articles/skate/sin",
    PUBLIC_URL+process.env.PORT+"/api/v0.0/order"

]

export {urls}