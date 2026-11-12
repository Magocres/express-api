export const log = (req, res, next) => {
  console.log("Esto es un middleware")
  next()
}

export const log2 = (req, res, next) => {
  console.log("Esto es el segundo middleware")
  next()
}
