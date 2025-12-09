import express from "express";
import * as controller from "../controllers/creditController.js";

const router = express.Router();

router.post("/calc-credit", controller.createCredit);
router.get("/credits/:userId", controller.getCredits);
router.get("/credit/:id/schedule", controller.getSchedule);

export default router;