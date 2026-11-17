import Task from "../models/task.model.js"

export async function createTasks(req, res) {
  try {
    const { title, description, completed } = req.body

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "El título y la descripción son obligatorios" })
    }

    const newTask = await Task.create({
      title,
      description,
      completed: completed ?? false,
      user: req.user.id,
    })

    return res.status(201).json({ message: "Tarea creada con éxito" })
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" })
  }
}

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find()
    return res.json(tasks)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "Error interno del servidor" })
  }
}

export async function deleteTasks(req, res) {
  try {
    const { id } = req.params

    const deletedTask = await Task.findOneAndDelete({
      _id: id,
      user: req.user.id,
    })

    if (!deletedTask) {
      return res
        .status(404)
        .json({ error: "Tarea no encontrada o no autorizada" })
    }

    return res.json({ message: "Tarea eliminada con éxito" })
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" })
  }
}
