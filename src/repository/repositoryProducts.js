import {pool} from "../../DB.js"

class Product {
   async getAllProducts(){
    const {rows} =await pool.query("SELECT * FROM products")
    console.log(rows)
    return rows 
   }
   async insertProduct( name_product,description,price,id_product){
      console.log(name_product,description,price,id_product)
      const {rows,rowCount}=await pool.query("INSERT INTO products(name_product,description,price,id_product) VALUES($1,$2,$3,$4)",[ name_product,description,price,id_product] )   
   console.log(rowCount,rows)
   return rowCount >=1 ? "success": "failed"
   }
   
}

export default new Product()



