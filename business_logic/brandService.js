import { brandRepository } from "../data_acces/brandRepository.js";

export const brandService = {
  async getAll() {
    return await brandRepository.getAll();
  },

  async getById(id) {
    const brand = await brandRepository.getById(id);
    if (!brand) throw new Error("Brand not found");
    return brand;
  },

  async create(data) {
    if (!data.name) throw new Error("Invalid brand data");
    return await brandRepository.create(data);
  },

  async update(id, data) {
    return await brandRepository.update(id, data);
  },

  async delete(id) {
    return await brandRepository.delete(id);
  },
};
