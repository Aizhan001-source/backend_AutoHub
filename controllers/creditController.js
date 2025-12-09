import { creditService } from "../business_logic/creditService.js";

export async function createCredit(req, res) {
  try {
    const { user_id, price, firstPayment, rate, months } = req.body;
    const result = await creditService.calculateAndSave(user_id, { price, firstPayment, rate, months });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getCredits(req, res) {
  try {
    const { userId } = req.params;
    const credits = await creditService.getAllByUser(userId);
    res.json(credits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getSchedule(req, res) {
  try {
    const { id } = req.params;
    const schedule = await creditService.getSchedule(id);
    res.json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
