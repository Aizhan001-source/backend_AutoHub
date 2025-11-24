import { photoService } from "../business_logic/photoService.js";

export const getPhotos = async (req, res) => {
  try {
    const photos = await photoService.getAll();
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPhotoById = async (req, res) => {
  try {
    const photo = await photoService.getById(req.params.id);
    res.json(photo);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const createPhoto = async (req, res) => {
  try {
    const photo = await photoService.create(req.body);
    res.status(201).json(photo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updatePhoto = async (req, res) => {
  try {
    await photoService.update(req.params.id, req.body);
    res.json({ message: "Photo updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deletePhoto = async (req, res) => {
  try {
    await photoService.delete(req.params.id);
    res.json({ message: "Photo deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
