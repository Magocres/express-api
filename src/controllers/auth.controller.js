import User from "../models/user.model.js"

export async function register(req, res) {
  const { email, password } = req.body
  try {
    await User.create({
      email,
      password,
    })
    res.status(201).json("Creado")
  } catch (error) {
    console.log(error)
  }
}

export const login = (req, res) => {
  req.json("Usuario logeado")
}
