export default (sequelize, DataTypes) => {
    const Source = sequelize.define("Source", {
      name: { type: DataTypes.STRING, allowNull: false, unique: true }
    });
    Source.associate = (models) => {
      Source.hasMany(models.Car, { foreignKey: "source_id" });
    };
    return Source;
  };