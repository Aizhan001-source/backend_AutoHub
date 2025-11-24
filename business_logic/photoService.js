import { photoRepository } from "../data_acces/photoRepository.js";

export const photoService = {
  async getAll() {
    return await photoRepository.getAll();
  },

  async getById(id) {
    const photo = await photoRepository.getById(id);
    if (!photo) throw new Error("Photo not found");
    return photo;
  },

  async create(data) {
    if (!data.url || !data.car_id) throw new Error("Invalid photo data");
    return await photoRepository.create(data);
  },

  async update(id, data) {
    return await photoRepository.update(id, data);
  },

  async delete(id) {
    return await photoRepository.delete(id);
  },
};
