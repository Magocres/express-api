import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export async function register(req, res) {
  const { email, password } = req.body
  try {
    const hasedPassword = await bycript.hash(password, 10)

    await User.create({
      email,
      password: hasedPassword,
    })

    res.status(201).json("Creado")
  } catch (error) {
    console.log(error)
  }
}

export const login = (req, res) => {
  req.json("Usuario logeado")
}
