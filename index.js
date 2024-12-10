import { connectDB } from "./src/config/mongo.js"
import express from "express"
import { truckRouter } from "./src/routes/truckRouter.js"
process.loadEnvFile()

const PORT = process.env.PORT || 1234

const app = express()
app.use(express.json())

app.use("/api/truck", truckRouter)

app.listen(PORT, () => {
console.log("Servidor en escucha por el puerto http://localhost:" + PORT)
})
connectDB()