
//_ 4EME ETAPE

    //! import de la method router depuis le module express
    import { Router } from "express";

    //! import des *_routes depuis ./*.js
    import product_router from "./pageRoute.js"
    import category_router from "./categoryRoute.js"
    import packaging_router from "./packagingRoute.js"
    import TeaPackaging_router from "./teaPackagingRoute.js"



    //! const router= Router()
   const router = Router()

    //! router.get vers le chemin principal "/" avec req,res {}
    
router.get("/", (req, res) => {
    res.json({ msg: `app running` });
  });

    //! envoie du message de confirmation que l'app tourne bien et donc la réponse


    //! route utiliser par le router avec des chemin spécifiques (page necessaire) et des valeurs spécifiques 
  
    
    router.use("/category/tea", product_router)
    .use("/category", category_router)
    .use("/packaging", packaging_router)
    .use("/teaPackaging", TeaPackaging_router)

    

    //! export de router
    export default router;

    