export default (sequelize, DataTypes) => {
    const Model = sequelize.define("Model", {
      name: { type: DataTypes.STRING, allowNull: false },
      brand_id: {
        type: DataTypes.INTEGER,
        references: { model: "Brands", key: "id" },
        onDelete: "CASCADE"
      }
    }, {
      tableName: "Models"
    });
  
    Model.associate = (models) => {
      Model.belongsTo(models.Brand, { foreignKey: "brand_id" });
      Model.hasMany(models.Car, { foreignKey: "model_id" });
    };
  
    return Model;
  };