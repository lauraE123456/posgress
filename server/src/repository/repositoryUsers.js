import { pool } from "../../DB.js";

class Users{
    async insertUsers(identity,first_name,last_name,email){
        const {rowCount}= await pool.query("INSERT INTO users (identity,first_name,last_name,email) VALUES ($1,$2,$3,$4)",[identity,first_name,last_name,email])
        return rowCount >=1 ? "success": "failed"
    }
}

export default new Users()