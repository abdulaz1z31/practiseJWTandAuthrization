import {Category} from "../models/index.model.js";


export const getAllCartegories = async (req, res, next) => {
  try {
    const cartegorys = await Category.find();
    res.status(200).json(cartegorys);
  } catch (err) {
    next(err);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const { name, description} = req.body;

    const newCategory = await Category.create({ name, description });

    res.status(201).json({
      message: "Aded category successfully",
      category: newCategory,
    });
  } catch (err) {
    next(err);
  }
};

export const getCartegoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cartegory = await Category.findById(id);

    if (!cartegory) {
      return res.status(404).json({ message: "Cartegory not found" });
    }

    res.status(200).json(cartegory);
  } catch (err) {
    next(err);
  }
};
