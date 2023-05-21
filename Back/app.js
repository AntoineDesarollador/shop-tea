

//! import express depuis le modul express
import express from "express";

//! import du module dotenv/config
import "dotenv/config"

import cors from "cors"

import router from "./router/indexRoute.js";



import { LOCAL_PORT } from "./config/const.js";


const PORT = process.env.PORT || LOCAL_PORT;


console.log ("port",PORT)


const app = express();


app .use(cors({
  origin: '*'
}))
  .use(express.static("public"))
  .use(express.json()) // basé sur body-parse rôle pour le json
  .use(express.urlencoded({ extended: true })) // aussi basé sur body parser
  .use(router);
 




app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));