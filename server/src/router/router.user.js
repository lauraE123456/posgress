import { Router } from "express";
import controllerUser from "../controller/controller.user.js";
const router=Router()

router.post("/createUsers",controllerUser.insertUser)

export default router