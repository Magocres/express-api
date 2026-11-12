import express from "express"
import morgan from "morgan"
import { log } from "./middlewares/logger.js"
import router from "./routes/user.routes.js"

const app = express()

app.use(express.json()) //Pasamos el texto que nos envia en objeto reconocible por JS (JSON)
app.use(morgan("dev"))
app.use("/users", router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log("Server is running")
})

app.get("/", (req, res) => {
  res.json({
    status: "OK",
  })
})

app.get("/users", log, (req, res) => {
  res.status(201).json("Todos los usuarios")
})

app.post("/users/:id", (req, res) => {
  console.log(req.body)
  res.json("Usuario creado")
})

app.put("/users/:id", (req, res) => {
  console.log(req.params.id) //Cogemos el id del usuario
  res.json("Usuario actualizado")
})

app.delete("/users/:id", (req, res) => {
  console.log(req.params.id)
  res.json("Usuario eliminado")
})
