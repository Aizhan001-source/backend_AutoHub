import db from "../models/index.js";

export const photoRepository = {
  getAll: () => db.Photo.findAll(),
  getById: (id) => db.Photo.findByPk(id),
  create: (data) => db.Photo.create(data),
  update: (id, data) => db.Photo.update(data, { where: { id } }),
  delete: (id) => db.Photo.destroy({ where: { id } }),
};
