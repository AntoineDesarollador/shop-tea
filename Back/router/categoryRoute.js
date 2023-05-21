
//_ 4EME ETAPE


//! import de la method router depuis le module express
import { Router } from "express";

//! import des fonctions créée pour la "maintenance" (ici) de la page category 
import { selectAllCategory } from "../controller/categoryPage.js"

//! la const  router a pour valeur router()
const router = Router()

//! route ou sera afficher la category page
router.get("/", selectAllCategory) // donc route /category

//! permet d'envoyer la création d'une nouvelle category 



//! export de la variable router
export default router;