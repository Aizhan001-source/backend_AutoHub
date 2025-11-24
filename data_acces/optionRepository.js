import db from "../models/index.js";

export const optionRepository = {
  getAll: () => db.Option.findAll(),
  getById: (id) => db.Option.findByPk(id),
  create: (data) => db.Option.create(data),
  update: async (id, data) => {
    const option = await db.Option.findByPk(id);
    if (!option) throw new Error("Option not found");
    return option.update(data);
  },
  delete: async (id) => {
    const option = await db.Option.findByPk(id);
    if (!option) throw new Error("Option not found");
    return option.destroy();
  }
};