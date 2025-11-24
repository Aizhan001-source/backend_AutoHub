import db from "../models/index.js";

export const getOptions = async (req, res, next) => {
  try {
    const options = await db.Option.findAll();
    res.json(options);
  } catch (err) {
    next(err);
  }
};

export const getOptionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const option = await db.Option.findByPk(id);
    if (!option) return res.status(404).json({ message: "Опция не найдена" });
    res.json(option);
  } catch (err) {
    next(err);
  }
};

export const createOption = async (req, res, next) => {
  try {
    const newOption = await db.Option.create(req.body);
    res.status(201).json(newOption);
  } catch (err) {
    next(err);
  }
};

export const updateOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const option = await db.Option.findByPk(id);
    if (!option) return res.status(404).json({ message: "Опция не найдена" });

    await option.update(req.body);
    res.json(option);
  } catch (err) {
    next(err);
  }
};

export const deleteOption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const option = await db.Option.findByPk(id);
    if (!option) return res.status(404).json({ message: "Опция не найдена" });

    await option.destroy();
    res.json({ message: "Опция удалена" });
  } catch (err) {
    next(err);
  }
};
