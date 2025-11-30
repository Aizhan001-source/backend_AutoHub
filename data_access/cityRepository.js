import db from "../models/index.js";

export const cityRepository = {
  getAll: () => db.City.findAll(),
  getById: (id) => db.City.findByPk(id),
  create: (data) => db.City.create(data),
  update: (id, data) => db.City.update(data, { where: { id } }),
  delete: (id) => db.City.destroy({ where: { id } }),
};
