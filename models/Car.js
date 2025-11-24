export default (sequelize, DataTypes) => {
    const Car = sequelize.define("Car", {
      brand_id: { type: DataTypes.INTEGER, references: { model: "Brands", key: "id" } },
      model_id: { type: DataTypes.INTEGER, references: { model: "Models", key: "id" } },
      city_id: { type: DataTypes.INTEGER, references: { model: "Cities", key: "id" } },
      source_id: { type: DataTypes.INTEGER, references: { model: "Sources", key: "id" } },
      price: DataTypes.STRING,
      year: DataTypes.STRING,
      generation: DataTypes.STRING,
      body: DataTypes.STRING,
      engine: DataTypes.STRING,
      transmission: DataTypes.STRING,
      drive: DataTypes.STRING,
      steering: DataTypes.STRING,
      color: DataTypes.STRING,
      customs: DataTypes.STRING,
      options: DataTypes.STRING,
      main_image: DataTypes.STRING,
      url: DataTypes.STRING
    });
    Car.associate = (models) => {
      Car.belongsTo(models.Brand, { foreignKey: "brand_id" });
      Car.belongsTo(models.Model, { foreignKey: "model_id" });
      Car.belongsTo(models.City, { foreignKey: "city_id" });
      Car.belongsTo(models.Source, { foreignKey: "source_id" });
      Car.hasMany(models.Photo, { foreignKey: "car_id" });
    };
    return Car;
  };