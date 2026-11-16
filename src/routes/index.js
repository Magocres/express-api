import express from "express"
import userRouter from "./user.routes.js"
import authRouter from "./auth.routes.js"

const router = express.Router()

router.use("./user.routes.js", userRouter)
router.use("./user.auth.js", authRouter)

export default router
