
//_ 1ERE ETAPE


    //, export des données du fichier .env via la method process.env
    //, création du const et export 


        export const {
            LOCAL_PORT,
            DB_HOST,
            DB_NAME,
            DB_USER,
            DB_PWD,
            DB_PORT
        } = process.env;

        

