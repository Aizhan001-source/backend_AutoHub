import { cityService } from "../business_logic/cityService.js";

export const getCities = async (req, res) => {
  try {
    const cities = await cityService.getAll();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCityById = async (req, res) => {
  try {
    const city = await cityService.getById(req.params.id);
    res.json(city);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const createCity = async (req, res) => {
  try {
    const city = await cityService.create(req.body);
    res.status(201).json(city);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateCity = async (req, res) => {
  try {
    await cityService.update(req.params.id, req.body);
    res.json({ message: "City updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCity = async (req, res) => {
  try {
    await cityService.delete(req.params.id);
    res.json({ message: "City deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
