import db from "../models/index.js";

export const carRepository = {
  getAll: () => db.Car.findAll(),
  getById: (id) => db.Car.findByPk(id),
  create: (data) => db.Car.create(data),
  update: (id, data) => db.Car.update(data, { where: { id } }),
  delete: (id) => db.Car.destroy({ where: { id } }),
};
