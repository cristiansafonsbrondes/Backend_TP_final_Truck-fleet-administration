import mongoose from "mongoose";

const truckSchema = new mongoose.Schema(
  {
    vin: { type: String, required: true, unique: true },
    truckNumber: { type: Number, require: true, unique: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
  },
  { versionKey: false }
);

const truck = mongoose.model("truck", truckSchema);

const getAllTrucks = async () => {
  try {
    const trucks = await truck.find();
    return trucks;
  } catch (error) {
    throw new Error(`Error al obtener Flota: ${error.message}`);
  }
};

const getTruckById = async (id) => {
    try {
      const findTruck = await truck.findById(id);
      return findTruck;
    } catch (error) {
      throw new Error(`Error al actualizar el vehículo: ${error.message}`);
    }
  };

const addTruck = async (dataTruck) => {
  try {
    const newTruck = new truck(dataTruck);
    await newTruck.save();
    return newTruck;
  } catch (error) {
    throw new Error(`Error al agregar el vehículo: ${error.message}`);
  }
};

const updateTruckById = async (id, updatedData) => {
  try {
    const option = { new: true };
    const updatedTruck = await truck.findByIdAndUpdate(id, updatedData, option);
    return updatedTruck;
  } catch (error) {
    throw new Error(`Error al actualizar el vehículo: ${error.message}`);
  }
};
const deleteTruckById = async (id) => {
  try {
    const deleteTruck = await truck.findByIdAndDelete(id);

    return `${deleteTruck} camión eliminado correctamente`;
  } catch (error) {
    throw new Error(`Error al eliminar el vehículo: ${error.message}`);
  }
};
export default { getAllTrucks, getTruckById, addTruck, updateTruckById, deleteTruckById };
