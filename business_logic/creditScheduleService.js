import { creditScheduleRepository } from "../data_access/creditScheduleRepository.js";

export const creditScheduleService = {
  async saveSchedule(creditId, schedule) {
    return await creditScheduleRepository.createMany(creditId, schedule);
  },

  async getSchedule(creditId) {
    return await creditScheduleRepository.getByCreditId(creditId);
  },

  async deleteSchedule(creditId) {
    return await creditScheduleRepository.deleteByCreditId(creditId);
  }
};
