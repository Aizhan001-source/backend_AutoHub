import db from "../models/index.js";

export const modelRepository = {
  getAll: () => db.Model.findAll(),
  getById: (id) => db.Model.findByPk(id),
  create: (data) => db.Model.create(data),
  update: (id, data) => db.Model.update(data, { where: { id } }),
  delete: (id) => db.Model.destroy({ where: { id } }),
};
