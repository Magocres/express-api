import express from "express"
import morgan from "morgan"
import { log, log2 } from "./middlewares/logger.js"
import router from "./routes/index.js"
import "./cron/cron.js"
import { dbConnection } from "./config/db.js"

const PORT = process.env.PORT || 3000

dbConnection()
  .then(() => {
    console.log("DB Connected")
    app.listen(PORT, () => {
      console.log("Server is running")
    })
  })
  .catch(error => {
    throw new Error("Error")
  })

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use("/", router)

app.get("/", (req, res) => {
  res.json({
    status: "OK",
  })
})
