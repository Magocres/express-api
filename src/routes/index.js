import express from "express"
import userRouter from "./user.routes.js"
import authRouter from "./auth.routes.js"
import taskRouter from "./task.routes.js"

const router = express.Router()

router.use("/users", userRouter)
router.use("/auth", authRouter)
router.use("/task", taskRouter)

export default router
