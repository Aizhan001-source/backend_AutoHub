import { Router } from "express";
import { getModels, getModelById, createModel, updateModel, deleteModel } from "../controllers/modelsController.js";

const router = Router();

router.get("/", getModels);
router.get("/:id", getModelById);
router.post("/", createModel);
router.put("/:id", updateModel);
router.delete("/:id", deleteModel);

export default router;
