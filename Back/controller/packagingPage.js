//_ 3EME ETAPE

        //! importation l'objet query depuis  ../models/index.js
        import Query from "../models/index.js"

        //! import la method formidable depuis le module formidable pour traiter les images
        import formidable from "formidable";

        //! import de la method fs depuis le module (déja inclus dans node) pour lire les fichiers 
        import fs from "fs"


    //! Mise em place de la partie admin pour la partie packaging

    //! Ici on recupere tous les packaging et leurs data

    export const selectAllPackaging = async (req, res) => {

        try 
        {
            //,recupération data de la table packaging
            const query = `SELECT * FROM packaging`;

            //, attente de trouver les query
            const result = await Query.find(query);

            //, envoie d'une reponse avec le statu 200
            res.status(200).json({result});
        }
        catch(error){
            res.json({msg: error})
        }
    }

//! création d'un packaging 

//, export de la const qui permettra la création d'un nouveau packaging
export const createPack = async (req,res) => {
    const { weight } = req.body; 
 try{
//, La crátion se fera au niveau de la table packaging dans laquelle on rajoutera une valeur a la colonne weight
    const query = `
    INSERT INTO packaging (weight) VALUES (?)
`;

//, attendre de d'ecrire les valeurs de chaque query
const result = await Query.write(query, {weight});

//, message de confirmation que le nouveau packaging a bien été créé
res.status(200).json(" created ");

//, sinon message d'erreur
} catch (error) {
res.json({ msg: error });
}
 }


//! Deleted un packaging 

export const deletePack = async (req,res)=> {
    const { id } = req.params
    try{
        const query = `
        DELETE FROM packaging WHERE id=?
    `;

    await Query.findByValue(query, parseInt(id));
    res.status(200).json({msg: "deleted"});
    }catch (error){
        res.status(200).json({ msg: error });
    }
};

//! Modify un packaging 

export const modifyPack = async (req, res) => {
    const { id } = req.params;
    const { weight } = req.body;

    try {
        const query = `UPDATE packaging
        SET weight = ?
        WHERE id = ?
  `;

  await Query.write(query, {weight, id});
  res.status(200).json("updated");
    }catch (error){
        res.status(200).json({msg: error})
    }
}
