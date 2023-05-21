
    //! import de mysql depuis le module mysql2
    import mysql from "mysql2/promise";


    //_ 1ERE ETAPE

    //! import des données pour la connexion a la BDD
    import { DB_HOST, DB_NAME, DB_PORT, DB_PWD, DB_USER } from "./const.js";


    //! création de la base de donnée

    export const pool = mysql.createPool({
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PWD,
      port: DB_PORT,
    })

    //! connexion a la base de donnée
    pool
        .getConnection()
        .then((res) => console.log(`Connected to : ${res.config.database}`));
    
    export default pool