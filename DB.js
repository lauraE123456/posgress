import {Pool} from "pg"


const PGUSER="neondb_owner"
const PGPASSWORD="npg_BzTRcPjLgk17"
const HOST= 'ep-calm-rice-a47lf9kg-pooler.us-east-1.aws.neon.tech'
const DATABASE = "neondb"

const pool = new Pool({
    user:PGUSER,
    host:HOST,
    database:DATABASE,
    password:PGPASSWORD,
    port:5432,
     ssl: {
    rejectUnauthorized: false, // Ignora el certificado autofirmado
  }
})

pool.connect().then(()=>{console.log("Connectado a postgres")}).catch((error)=>{console.log(error)})

export  {pool}