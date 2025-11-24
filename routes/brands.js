import { Router } from "express";
import { getBrands, createBrand } from "../controllers/brandsController.js";

const router = Router();

router.get("/", getBrands);
router.post("/", createBrand);

export default router;
