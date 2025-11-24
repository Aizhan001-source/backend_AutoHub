import { modelService } from "../business_logic/modelService.js";

export const getModels = async (req, res) => {
  try {
    const models = await modelService.getAll();
    res.json(models);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getModelById = async (req, res) => {
  try {
    const model = await modelService.getById(req.params.id);
    res.json(model);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const createModel = async (req, res) => {
  try {
    const model = await modelService.create(req.body);
    res.status(201).json(model);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateModel = async (req, res) => {
  try {
    await modelService.update(req.params.id, req.body);
    res.json({ message: "Model updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteModel = async (req, res) => {
  try {
    await modelService.delete(req.params.id);
    res.json({ message: "Model deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
