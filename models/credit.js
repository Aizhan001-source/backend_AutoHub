// models/Credit.js
export default (sequelize, DataTypes) => {
  const Credit = sequelize.define("credit", {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    car_price: { type: DataTypes.FLOAT, allowNull: false },
    first_payment: { type: DataTypes.FLOAT, allowNull: false },
    rate: { type: DataTypes.FLOAT, allowNull: false },
    months: { type: DataTypes.INTEGER, allowNull: false },
    monthly_payment: { type: DataTypes.FLOAT, allowNull: false },
    total_payment: { type: DataTypes.FLOAT, allowNull: false },
    overpayment: { type: DataTypes.FLOAT, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: "credits",
    timestamps: false
  });

  Credit.associate = (models) => {
    Credit.belongsTo(models.User, { foreignKey: "user_id" });
    Credit.hasMany(models.CreditSchedule, { foreignKey: "credit_id" });
  };

  return Credit;
};
