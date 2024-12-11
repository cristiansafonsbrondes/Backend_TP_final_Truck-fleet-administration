import { Router } from "express";
import {  getalltrucks, getTruckById, addtruck,  updateTruckById,  deleteTruckById} from "../controllers/truckcontroller.js";
import truckValidator from "../middleware/truckValidator.js";
const truckRouter = Router();

truckRouter.get("/", getalltrucks);
truckRouter.get("/:id", getTruckById);
truckRouter.post("/", truckValidator.addTruckValidate, addtruck);
truckRouter.put("/:id", truckValidator.updateTruchValidate, updateTruckById);
truckRouter.delete("/:id", deleteTruckById);

export { truckRouter };
