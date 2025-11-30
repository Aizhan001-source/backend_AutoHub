import db from "../models/index.js";

export const sourceRepository = {
  getAll: () => db.Source.findAll(),
  getById: (id) => db.Source.findByPk(id),
  create: (data) => db.Source.create(data),
  update: (id, data) => db.Source.update(data, { where: { id } }),
  delete: (id) => db.Source.destroy({ where: { id } }),
};
