import express from "express";
import * as controller from '../controllers/creditScheduleController.js';

const router = express.Router();

// Получить график конкретного кредита
router.get("/:creditId", controller.getSchedule);

// Удалить график кредита
router.delete("/:creditId", controller.deleteSchedule);

export default router;
