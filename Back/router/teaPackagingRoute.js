//! import de la method router depuis le module express
import { Router } from "express";

//! import des fonctions créée pour la "maintenance" (ici) de la page category 
import { selectAllTeaPackaging, createTeaPack } from "../controller/teaPackagingPage.js"

//! la const  router a pour valeur router()
const router = Router()

//! route ou sera afficher la category page
router.get("/", selectAllTeaPackaging); // donc route /tea
router.post("/add", createTeaPack); // route pour ajouter un nouveau teaPackaging


//! export de la variable router
export default router