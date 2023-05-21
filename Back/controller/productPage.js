
//_ 3EME ETAPE

        //! importation l'objet query depuis  ../models/index.js
        import Query from "../models/index.js"

        //! import la method formidable depuis le module formidable pour traiter les images
        import formidable from "formidable";

        //! import de la method fs depuis le module (déja inclus dans node) pour lire les fichiers 
       import fs from "fs"



        //! mise en place de la partie admin pour les pages produits


        //! Ici on récupere tous les thés et leurs "datas"
        export const selectAllTea = async (req, res) => {
            
            //, try -- > tu essaye ce qui est demandé si cela ne marche pas alors tu renvoies le catch (error)      
           
            try{
            //, recupération de toutes les colonnes de la table tea pour ensuite travailler sur chacune d'elle
                
                const query = `
                SELECT * FROM tea
            `;

            //, attente de trouver les query
            const result = await Query.find(query);

            //, reponse avec un status 200 (ok) et envoie sous forme json de result soit des query récupérés
            res.status(200).json({result});
            }
            //, Sinon erreur 
            catch (error){
                res.json({msg:error})
            }
        }


        //! Ici on récupere tous les thés et on sépare l'image du reste des données car la manipulation n'est pas la meme

        export  const selectOneTea = async (req,res) => {

            //, on déclare une const en liant l'id a la requete des parametres d'un thé
            const { id } = req.params
            
            //, try -- > tu essaye ce qui est demandé si cela ne marche pas alors tu renvoies le catch (error)      
            try {
                const query = ` 
                //, recupération de toutes les colonnes de la table tea pour ensuite travailler sur chacune d'elle
                SELECT  SELECT tea.id as teaId, mainTitle, subTitle, category_id,  description, url_img AS urlImg, alt_img
                FROM  tea`;

               //, attente de trouver les id deja query déja trouvés        
                const result = await Query.findByValue(query,id);
                
                //, reponse avec un status 200 (ok) et envoie sous forme json de result soit des query récupérés
                res.status(200).json({result});
                }
                //, Sinon erreur 
                catch (error){
                    res.json({msg:error})
    }};


    //! création d'un produit
    export const createTea = async(req,res) => {

        //, chemin ou sera enregistré l'image du nouveau produit
        const uploadDir = "./public/img/tea";

        //, on donne comme valeur, a chaque donnée du nouveau objet, sous forme de string
        let url_img = "";
        let imgTitle = "";
        let mainTitle = "";
        let subTitle = "";
        let description = "";
        let altImg = "";
        let category_id = null;

  
    
    //! 1ere étape lors de la création d'un produit --> l'image

          //_ configuration de formidable

            //, détermination des regles d'enregistrement de chaque image produit
            const customOptions = {

                //? chemin d'enregistrement de la nouvelle image
                uploadDir: uploadDir,

                //? format d'enregistrement de la nouvelle image
                keepExtensions: true,

                //? Taille maximal du fichier image
                maxFileSize: 5 * 1024 * 1024 * 1024, // 5Mb

                //? Taille minimale du fichier image
                minFileSize: 10,

                //? plusieurs photos ? : sur false 
                multiples: false,
            };
      

    //! déclaration variable form avec pour valeur formidable qui reprend les fonctionnalité dans la const customOptions
            const form = formidable (customOptions)

       

//! recupération des données du formulaire permettant d'interargir avec la page product

//, try -- > tu essaye ce qui est demandé si cela ne marche pas alors tu renvoies le catch (error) 

            try{

                //, on parse le formulaire avec comme réponse 3 possibilités
                //, error, chaque champs qui définissent un produit, le fichier image 
                    form.parse(req, async(err, fields, file) =>{
                
                        //? Si l'error est retournée
                        if(err){
                                    console.log("Error parsing the files");
                                    //? Tu renvoies un status erreur 400 sous format json
                                    res.status(400).json({
                                    
                                    //? Messages a retourner en cas d'erreur
                                        status: "Fail",
                                        message: "There was an error parsing the files",
                                        error: err,
                                    });
                        }

                    //, On récupere par décomposition chaque élement du formulaire qui compose chaque produit et représente chaque champs du formulaire
                        ({mainTitle, subTitle, description, category_id, altImg}= fields);
                       
                        //? on donne le status "number" a l'id_category afin de pouvoir le manipuler par la suite
                        category_id = parseInt(category_id);

                    //, récupération de l'image
                        const files = files.url_img;

                    //, Si pas de photo, on efface

                        //? on lis le fichier grace au module fs
                        fs.readFile(files.filepath, async function (err,data){
                            //? Si pas de donnée recue alors data.lenght == 0
                            if(data.length == 0){
                                fs.unlink(file.filepath, function (err){
                                    if (err) throw err;

                                })
                             } else {
                                    url_img = file.newFilename;

                                    //, Insertion de l'image dans la BDD
                                    const query =  `
                                    INSERT INTO tea (url_img) 
                                    VALUES (?)
                                  `;

                                  //, on attend d'avoir écris l'url de la nouvelle image
                                await Query.write(query, {
                                    url_img,
                                });
                        

                                //, Insertion du reste des données du nouveau produit dans la BDD
                                const query2 = `
                                        INSERT INTO tea (mainTitle, subTitle, description, category_id, alt_img) 
                                        VALUES (?, ?, ?, ?, ?)
                                    `;

                                 //, on attend d'avoir écris les nouvelles données du nouveau produit
                                await Query.write(query2, {
                                    mainTitle,
                                    subTitle,
                                    description,
                                    category_id,
                                    altImg,
                                });
                                res.status(201).json({ msg: "insertion ok" });
                            }
                          });
                        });
                      } catch (error) {
                        res.json({ msg: error });
                      }
                    }