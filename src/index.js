import express from "express"
import cors from "cors"
import morgan from "morgan"

import routerProduct from "./router/router.products.js"
import routerUser from "./router/router.user.js"
const app = express()



app.get("/",(req,res)=>{    
    res.json({message:'Server'})  
})

app.use(express.json());
app.use(morgan("dev"))
app.use(cors())

app.use('/api',routerProduct)
app.use('/api',routerUser)

const PORT = 8080

app.listen(PORT,()=>{
    console.log("Connect port ",PORT)
})