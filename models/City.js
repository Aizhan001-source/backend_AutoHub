export default (sequelize, DataTypes) => {
    const City = sequelize.define("City", {
      name: { type: DataTypes.STRING, allowNull: false },
      code: { type: DataTypes.STRING, allowNull: false, unique: true },
      region_id: { type: DataTypes.INTEGER, references: { model: "Regions", key: "id" } }
    });
    City.associate = (models) => {
      City.belongsTo(models.Region, { foreignKey: "region_id" });
      City.hasMany(models.Car, { foreignKey: "city_id" });
    };
    return City;
  };