
import { Router } from "express";
import { createPack, deletePack, selectAllPackaging, modifyPack } from "../controller/packagingPage.js";

 

const router = Router();

router.get("/", selectAllPackaging); //! donc route vers la "page" packaging
router.post("/add", createPack); //! donc route pour ajouter le nouveau packaging dans la BDD
router.delete("/delete/:id", deletePack); //! donc route pour supprimer un packaging (id)
router.put("/modify/:id", modifyPack); //! donc route pour modifier un packaging (id)

//! export de router
export default router;