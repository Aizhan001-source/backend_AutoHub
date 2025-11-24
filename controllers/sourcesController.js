import { sourceService } from "../business_logic/sourceService.js";

export const getSources = async (req, res) => {
  try {
    const sources = await sourceService.getAll();
    res.json(sources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSourceById = async (req, res) => {
  try {
    const source = await sourceService.getById(req.params.id);
    res.json(source);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const createSource = async (req, res) => {
  try {
    const source = await sourceService.create(req.body);
    res.status(201).json(source);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateSource = async (req, res) => {
  try {
    await sourceService.update(req.params.id, req.body);
    res.json({ message: "Source updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteSource = async (req, res) => {
  try {
    await sourceService.delete(req.params.id);
    res.json({ message: "Source deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
