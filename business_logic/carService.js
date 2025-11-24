import { carRepository } from "../data_acces/carRepository.js";

export const carService = {
  async getAll() {
    return await carRepository.getAll();
  },

  async getById(id) {
    const car = await carRepository.getById(id);
    if (!car) throw new Error("Car not found");
    return car;
  },

  async create(data) {
    if (!data.brand_id || !data.model_id || !data.price) {
      throw new Error("Invalid car data");
    }
    return await carRepository.create(data);
  },

  async update(id, data) {
    return await carRepository.update(id, data);
  },

  async delete(id) {
    return await carRepository.delete(id);
  },
};
