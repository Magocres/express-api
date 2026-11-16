import mongoose from "mongoose"

export async function dbConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test")
  } catch (error) {
    console.log(error)
  }
}
