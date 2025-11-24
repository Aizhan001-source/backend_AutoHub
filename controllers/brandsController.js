import { brandService } from "../business_logic/brandService.js";

export const getBrands = async (req, res) => {
  try {
    const brands = await brandService.getAll();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createBrand = async (req, res) => {
  try {
    const brand = await brandService.create(req.body);
    res.status(201).json(brand);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
