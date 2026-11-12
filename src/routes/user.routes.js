import express from "express"
import { log, log2 } from "../middlewares/logger.js"
import {
  getUsers,
  createUsers,
  putUsers,
  deleteUsers,
} from "../controllers/user.controller.js"

const router = express.Router()

router.get("/", getUsers)

router.post("/:id", createUsers)

router.put("/:id", putUsers)

router.delete("/:id", deleteUsers)

export default router
