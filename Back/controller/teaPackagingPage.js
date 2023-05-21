
      //! importation l'objet query depuis  ../models/index.js
      import Query from "../models/index.js"

      //! import la method formidable depuis le module formidable pour traiter les images
      import formidable from "formidable";

      //! import de la method fs depuis le module (déja inclus dans node) pour lire les fichiers 
      import fs from "fs"

      export const selectAllTeaPackaging = async (req, res) => {

    try {
        //,recupération data de la table packaging
        const query = `SELECT * FROM tea_packaging`;

        //, attente de trouver les query
        const result = await Query.find(query);

        
        //, envoie d'une reponse avec le statu 200
        res.status(200).json({result});
    }

    //, sinon message d'erreur
    catch(error){
        res.json({msg: error})
    }
}


/**
 * creation d'un teaPackaging
 */

//, export d'une const dans laquelle nous pourrons créer un nouveau teapackaging
export const createTeaPack = async (req, res) => {

    //, declaration d'une const avec plusieurs parametre qui auront comme valeur la requete du body
    const { ref, price, tea_id, packaging_id } = req.body;

     //,recupération data de la table packaging
    try {

      //, recupération des champs du post
      const query = `
          INSERT INTO teaPackaging (ref, price, tea_id, packaging_id) 
          VALUES (?, ?, ?, ?)
      `;

      //, attendre de d'ecrire les valeurs de chaque query
      await Query.write(query, {
        stock,
        price,
        tea_id,
        packaging_id,
      });

      //, message de confirmation que le nouveau packaging a bien été créé
      res.status(200).json(" created ");
    } 
    //, sinon message d'erreur
    catch (error) {
      res.json({ msg: error });
    }
  };