export default (sequelize, DataTypes) => {
    const CreditSchedule = sequelize.define("CreditSchedule", {
      credit_id: { type: DataTypes.INTEGER, allowNull: false },
      month: { type: DataTypes.INTEGER, allowNull: false },
      payment: { type: DataTypes.DECIMAL, allowNull: false },
      interest: { type: DataTypes.DECIMAL, allowNull: false },
      body: { type: DataTypes.DECIMAL, allowNull: false },
      balance: { type: DataTypes.DECIMAL, allowNull: false }
    });
  
    CreditSchedule.associate = (models) => {
      CreditSchedule.belongsTo(models.Credit, { foreignKey: "credit_id" });
    };
  
    return CreditSchedule;
  };

  