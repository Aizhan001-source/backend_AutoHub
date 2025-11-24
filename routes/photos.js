import { Router } from "express";
import { getPhotos, getPhotoById, createPhoto, updatePhoto, deletePhoto } from "../controllers/photosController.js";

const router = Router();

router.get("/", getPhotos);
router.get("/:id", getPhotoById);
router.post("/", createPhoto);
router.put("/:id", updatePhoto);
router.delete("/:id", deletePhoto);

export default router;
