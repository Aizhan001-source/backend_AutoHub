export default (sequelize, DataTypes) => {
    const Photo = sequelize.define("Photo", {
      url: DataTypes.STRING,
      car_id: { type: DataTypes.INTEGER, references: { model: "Cars", key: "id" } }
    });
    Photo.associate = (models) => {
      Photo.belongsTo(models.Car, { foreignKey: "car_id" });
    };
    return Photo;
  };