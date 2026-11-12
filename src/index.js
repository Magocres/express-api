import express from "express"
import morgan from "morgan"
import { log, log2 } from "./middlewares/logger.js"
import router from "./routes/user.routes.js"
import "./cron/cron.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use("/users", router)

app.get("/", (req, res) => {
  res.json({
    status: "OK",
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server is running")
})
