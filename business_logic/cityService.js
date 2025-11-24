import { cityRepository } from "../data_acces/cityRepository.js";

export const cityService = {
  async getAll() {
    return await cityRepository.getAll();
  },

  async getById(id) {
    const city = await cityRepository.getById(id);
    if (!city) throw new Error("City not found");
    return city;
  },

  async create(data) {
    if (!data.name || !data.code) throw new Error("Invalid city data");
    return await cityRepository.create(data);
  },

  async update(id, data) {
    return await cityRepository.update(id, data);
  },

  async delete(id) {
    return await cityRepository.delete(id);
  },
};
