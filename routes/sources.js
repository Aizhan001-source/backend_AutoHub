import { Router } from "express";
import { getSources, getSourceById, createSource, updateSource, deleteSource } from "../controllers/sourcesController.js";

const router = Router();

router.get("/", getSources);
router.get("/:id", getSourceById);
router.post("/", createSource);
router.put("/:id", updateSource);
router.delete("/:id", deleteSource);

export default router;
