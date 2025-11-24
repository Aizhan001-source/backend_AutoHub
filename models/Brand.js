export default (sequelize, DataTypes) => {
  const Brand = sequelize.define("Brand", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  });

  Brand.associate = (models) => {
    Brand.hasMany(models.Model, { foreignKey: "brand_id" });
    Brand.hasMany(models.Car, { foreignKey: "brand_id" });
  };

  return Brand;
};
