import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/db.js"; 

const db = {};

import CarModel from "./Car.js";
import BrandModel from "./Brand.js";
import CityModel from "./City.js";
import ModelModel from "./Model.js";
import PhotoModel from "./Photo.js";
import SourceModel from "./Source.js";
import RegionModel from "./Region.js";

db.Car = CarModel(sequelize, DataTypes);
db.Brand = BrandModel(sequelize, DataTypes);
db.City = CityModel(sequelize, DataTypes);
db.Model = ModelModel(sequelize, DataTypes);
db.Photo = PhotoModel(sequelize, DataTypes);
db.Source = SourceModel(sequelize, DataTypes);
db.Region = RegionModel(sequelize, DataTypes);

Object.values(db).forEach((model) => {
  if (model.associate) model.associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
