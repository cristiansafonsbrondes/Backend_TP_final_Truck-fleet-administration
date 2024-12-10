import { Router } from "express"
import { getalltrucks, addtruck, updateTruckById, deleteTruckById  } from "../controllers/truckcontroller.js"

const truckRouter = Router()

truckRouter.get("/", getalltrucks)
truckRouter.post("/", addtruck)
truckRouter.put("/:id", updateTruckById)
truckRouter.delete("/:id", deleteTruckById)

export { truckRouter }