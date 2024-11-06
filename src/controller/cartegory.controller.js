import {Category} from "../models/index.model.js";


export const getAllCartegories = async (req, res, next) => {
  try {
    const cartegorys = await Category.find();
    res.status(200).json(cartegorys);
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
