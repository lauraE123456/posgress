import repoUsers from "../repository/repositoryUsers.js";

class constrollerUser{
    async insertUser(req,res){
        try {
            const{identity,first_name,last_name,email}=req.body
            const resultUser=await repoUsers.insertUsers(identity,first_name,last_name,email)
            res.json({message:resultUser})
        } catch (error) {
           res.status(500).json({message:"error this create new user"})
        }
    }
}

export default new constrollerUser()