import {Router} from "express";
import controller from "../controller/controller.product.js"

const router = Router()


router.get("/AllProducts",controller.getAllProducts)

router.post("/InsertProducts",controller.insertProducts)

export default router
