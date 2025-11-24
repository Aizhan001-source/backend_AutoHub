import db from "../models/index.js";

export const brandRepository = {
  getAll: () => db.Brand.findAll(),
  getById: (id) => db.Brand.findByPk(id),
  create: (data) => db.Brand.create(data),
  update: (id, data) => db.Brand.update(data, { where: { id } }),
  delete: (id) => db.Brand.destroy({ where: { id } }),
};
