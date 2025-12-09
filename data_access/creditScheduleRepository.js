import db from "../models/index.js";

export const creditScheduleRepository = {
  async createMany(creditId, schedule) {
    return await Promise.all(schedule.map(item => 
      db.CreditSchedule.create({
        credit_id: creditId,
        month: item.month,
        payment: item.payment,
        interest: item.interest,
        body: item.body,
        balance: item.balance
      })
    ));
  },

  async getByCreditId(creditId) {
    return await db.CreditSchedule.findAll({
      where: { credit_id: creditId },
      order: [["month", "ASC"]]
    });
  },

  async deleteByCreditId(creditId) {
    return await db.CreditSchedule.destroy({
      where: { credit_id: creditId }
    });
  }
};
