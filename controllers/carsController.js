import { carService } from "../business_logic/carService.js";

export const getCars = async (req, res) => {
  try {
    const cars = await carService.getAll();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await carService.getById(req.params.id);
    res.json(car);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const createCar = async (req, res) => {
  try {
    const car = await carService.create(req.body);
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    await carService.update(req.params.id, req.body);
    res.json({ message: "Car updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    await carService.delete(req.params.id);
    res.json({ message: "Car deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
