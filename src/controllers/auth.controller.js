import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function register(req, res) {
  try {
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "El email y la contraseña son obligatorios" })
    }

    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ error: "El correo ya está registrado" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      password: hashedPassword,
    })

    const userResponse = { id: user.id, email: user.email }

    return res.status(201).json({
      message: "Usuario registrado con éxito",
      user: userResponse,
    })
  } catch (error) {
    console.error("Error en register:", error)
    return res.status(500).json({ error: "Error interno del servidor" })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body || {}

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Faltan credenciales (email o contraseña)" })
    }

    const user = await User.findOne({ where: { email } })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid email or password" })
    }

    if (!process.env.JWT_SECRET) {
      console.error("Falta configurar JWT_SECRET en el archivo .env")
      return res
        .status(500)
        .json({ error: "Error de configuración del servidor" })
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    )

    return res.json({
      message: "Login Successfully",
      token,
    })
  } catch (error) {
    console.error("Error en login:", error)
    return res.status(500).json({ error: "Error interno del servidor" })
  }
}
