import { Router } from "express";
import { getOptions, getOptionById, createOption, updateOption, deleteOption } from "../controllers/optionsController.js";

const router = Router();

router.get("/", getOptions);
router.get("/:id", getOptionById);
router.post("/", createOption);
router.put("/:id", updateOption);
router.delete("/:id", deleteOption);

export default router;
