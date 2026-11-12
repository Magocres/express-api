export const getUsers = (req, res) => {
  res.status(201).json("Todos los usuarios")
}

export const createUsers = (req, res) => {
  console.log(req.body)
  res.json("Usuario creado")
}

export const putUsers = (req, res) => {
  console.log(req.params.id)
  res.json("Usuario actualizado")
}

export const deleteUsers = (req, res) => {
  console.log(req.params.id)
  res.json("Usuario eliminado")
}
