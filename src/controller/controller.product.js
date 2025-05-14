import repoProducts from "../repository/repositoryProducts.js"

class controllerProduct {
    async getAllProducts (req,rep){
        try {
            rep.json(await repoProducts.getAllProducts())
        } catch (error) {
            console.log(  error)
            rep.status(500).json({message:"Algo salio mal "})
        }
    }
    async insertProducts(req,res){
        try {
            const {name_product,description,price,id_product}=req.body
            const result= await  repoProducts.insertProduct(name_product,description,price,id_product)
            res.json({message: result})
            
        } catch (error) {
            console.log(  error)
            res.status(500).json({message:"Algo salio mal "})
        }

    }
}

export default new controllerProduct()