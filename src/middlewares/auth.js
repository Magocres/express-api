import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
  const authoritation = req.header.authorization

  if (!authoritation || authoritation.startWith("Bearer ")) {
    return res.status(401)
  }

  const token = authoritation.split(" ")[1]

  jwt.verify(token, process.env.JWT_SECRET)

  console.log(authoritation)
  console.log(token)

  next()
}

export default auth
