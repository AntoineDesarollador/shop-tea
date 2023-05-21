
//_ 2EME ETAPE

//! import pool du database.js
import { pool } from "../config/database.js"

//! déclaration d'un objet Query pour les différentes étapes du query find, findByvalue et write
class Query{



//! on cherche et trouve les query tables
static async find(query){
  const [result] = await pool.execute(query);
  return result;
}

//! on les recuperes par leurs valeurs (colonnes)
 static async findByValue(query, value){
  const [result] = await pool.execute(query, [value]);
 return result;
}

//! on les écrit toutes les données de chaque colonnes dans le document json

  static async write(query, data){
  const [result]= await pool.execute(query, [...Object.values(data)]);
  return result;
  }
}


//! exportation de l'objet Query
export default Query;