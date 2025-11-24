import { modelRepository } from "../data_acces/modelRepository.js";

export const modelService = {
  async getAll() {
    return await modelRepository.getAll();
  },

  async getById(id) {
    const model = await modelRepository.getById(id);
    if (!model) throw new Error("Model not found");
    return model;
  },

  async create(data) {
    if (!data.name || !data.brand_id) throw new Error("Invalid model data");
    return await modelRepository.create(data);
  },

  async update(id, data) {
    return await modelRepository.update(id, data);
  },

  async delete(id) {
    return await modelRepository.delete(id);
  },
};
