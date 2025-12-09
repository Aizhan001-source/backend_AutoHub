import { creditScheduleService } from "../business_logic/creditScheduleService.js";

export async function getSchedule(req, res) {
  try {
    const { creditId } = req.params;
    const schedule = await creditScheduleService.getSchedule(creditId);
    res.json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка получения графика кредита" });
  }
}

export async function deleteSchedule(req, res) {
  try {
    const { creditId } = req.params;
    await creditScheduleService.deleteSchedule(creditId);
    res.json({ message: "График кредита удален" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка удаления графика кредита" });
  }
}
