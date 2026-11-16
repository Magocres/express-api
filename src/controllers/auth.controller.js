import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export async function register(req, res) {
  const { email, password } = req.body
  try {
    const hasedPassword = await bycript.hash(password, 10)

    const user = await User.create({
      email,
      password: hasedPassword,
    })

    res.status(201).json(user)
  } catch (error) {
    console.log(error)
  }
}

export const login = (req, res) => {
  req.json("Usuario logeado")
}
