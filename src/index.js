import express from "express"
import morgan from "morgan"
import { log, log2 } from "./middlewares/logger.js"
import router from "./routes/user.routes.js"
import cron from "node-cron"

const app = express()

app.use(express.json()) //Pasamos el texto que nos envia en objeto reconocible por JS (JSON)
app.use(morgan("dev"))
app.use("/users", router)

cron.schedule("* * * * *", () => {
  console.log("Buenos días!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server is running")
})

app.get("/", (req, res) => {
  res.json({
    status: "OK",
  })
})
