import { sourceRepository } from "../data_acces/sourceRepository.js";

export const sourceService = {
  async getAll() {
    return await sourceRepository.getAll();
  },

  async getById(id) {
    const source = await sourceRepository.getById(id);
    if (!source) throw new Error("Source not found");
    return source;
  },

  async create(data) {
    if (!data.name) throw new Error("Invalid source data");
    return await sourceRepository.create(data);
  },

  async update(id, data) {
    return await sourceRepository.update(id, data);
  },

  async delete(id) {
    return await sourceRepository.delete(id);
  },
};
