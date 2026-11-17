import express from "express"
import morgan from "morgan"
import { log, log2 } from "./middlewares/logger.js"
import router from "./routes/index.js"
import "./cron/cron.js"
import { dbConnection } from "./config/db.js"

// 1. PRIMERO inicializamos Express y los middlewares
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // <-- Añadido para mayor compatibilidad
app.use(morgan("dev"))

// Rutas
app.use("/", router)

app.get("/", (req, res) => {
  res.json({
    status: "OK",
  })
})

// 2. DESPUÉS conectamos a la BD y levantamos el servidor
const PORT = process.env.PORT || 3000

dbConnection()
  .then(() => {
    console.log("DB Connected")
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.error("Error connecting to DB:", error)
  })
