export default (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
      name: { type: DataTypes.STRING, allowNull: false, unique: true }
    });
  
    Region.associate = (models) => {
      Region.hasMany(models.City, { foreignKey: "region_id" });
    };
  
    return Region;
  };
  