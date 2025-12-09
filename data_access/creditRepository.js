import Credit from "../models/credit.js";
import CreditSchedule from "../models/CreditSchedule.js";

export const creditRepository = {
  async createCredit(data) {
    const credit = await Credit.create(data);
    return credit;
  },

  async createSchedule(creditId, schedule) {
    for (const item of schedule) {
      await CreditSchedule.create({ credit_id: creditId, ...item });
    }
  },

  async getCreditsByUser(userId) {
    return await creditRepositoryredit.findAll({ where: { user_id: userId }, order: [["created_at", "DESC"]] });
  },

  async getScheduleByCreditId(creditId) {
    return await CreditSchedule.findAll({ where: { credit_id: creditId }, order: [["month", "ASC"]] });
  }
};
