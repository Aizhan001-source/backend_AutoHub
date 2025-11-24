import db from "../models/index.js";

export const carService = {
  async getCarsByBrand(brandId) {
    return await db.Car.findAll({
      where: { brand_id: brandId },
      include: [db.Brand, db.Model, db.City, db.Photo]
    });
  },

  async searchCars(query) {
    return await db.Car.findAll({
      where: {
        price: { 
            
        }
      },
      include: [db.Brand, db.Model, db.City, db.Photo]
    });
  }
};
