import express from "express"
import { log, log2 } from "../middlewares/logger.js"

const router = express.Router()

router.get("/", log2, (req, res) => {
  res.status(201).json("Todos los usuarios")
})

router.post("/:id", (req, res) => {
  console.log(req.body)
  res.json("Usuario creado")
})

router.put("/:id", (req, res) => {
  console.log(req.params.id)
  res.json("Usuario actualizado")
})

router.delete("/:id", (req, res) => {
  console.log(req.params.id)
  res.json("Usuario eliminado")
})

export default router
