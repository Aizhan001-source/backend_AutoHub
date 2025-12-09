import { creditRepository } from "../data_access/creditRepository.js";

export const creditService = {
  async calculateAndSave(userId, creditInput) {
    const { price, firstPayment, rate, months } = creditInput;

    if (!price || !firstPayment || !rate || !months) {
      throw new Error("Invalid credit data");
    }

    const loan = price - firstPayment;
    const monthlyRate = rate / 12 / 100;

    const monthlyPayment =
      loan * (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    let balance = loan;
    let totalPayment = 0;
    const schedule = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const body = monthlyPayment - interest;
      balance -= body;
      totalPayment += monthlyPayment;

      schedule.push({
        month: i,
        payment: Math.round(monthlyPayment),
        interest: Math.round(interest),
        body: Math.round(body),
        balance: Math.round(balance > 0 ? balance : 0)
      });
    }

    const overpayment = totalPayment - loan;

    const credit = await creditRepository.create({
      user_id: userId,
      car_price: price,
      first_payment: firstPayment,
      rate,
      months,
      monthly_payment: Math.round(monthlyPayment),
      total_payment: Math.round(totalPayment),
      overpayment: Math.round(overpayment)
    });

    // Сохраняем график
    await creditRepository.createSchedule(credit.id, schedule);

    return {
      creditId: credit.id,
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      overpayment: Math.round(overpayment),
      schedule
    };
  },

  async getAllByUser(userId) {
    return await creditRepository.getCreditsByUser(userId);
  },

  async getSchedule(creditId) {
    return await creditRepository.getScheduleByCreditId(creditId);
  }
};