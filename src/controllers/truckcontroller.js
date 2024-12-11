import truckModel from "../models/truckModel.js"
import { validationResult } from "express-validator"

const getalltrucks = async (req, res) => {
    try {
        const trucks = await truckModel.getAllTrucks()
        res.json(trucks)
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

const addtruck = async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) { 
        return res.status(400).json({ errors: errors.array() }); 
    }

    const { vin, truckNumber, make, model, year } = req.body
    try {
        const newTruck = await truckModel.addTruck({ vin, truckNumber, make, model, year })
        res.status(200).json(newTruck)
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

const updateTruckById = async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) { 
            return res.status(400).json({ errors: errors.array() }); 
    }

    const { id } = req.params
    const { vin, truckNumber, make, model, year } = req.body
    try {
        const updatedTruck = await truckModel.updateTruckById(id, req.body)
        res.status(200).json(updatedTruck)
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}
const deleteTruckById = async (req, res) => {
    const { id } = req.params
    try {
        const delTruck = await truckModel.deleteTruckById({ _id: id })
        res.status(200).json(delTruck)
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

export { getalltrucks, addtruck, updateTruckById, deleteTruckById }