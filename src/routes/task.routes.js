import express from "express"
import {
  getTasks,
  createTasks,
  deleteTasks,
} from "../controllers/task.controller.js"

const task = express.Router()

task.get("/", getTasks)

task.post("/", createTasks)

task.delete("/:id", deleteTasks)

export default task
