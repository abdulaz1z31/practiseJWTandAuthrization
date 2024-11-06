import { User, Category, Admin } from "../models/index.model.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, age } = req.body;

    const newUser = await User.create({ name, age, email, password });

    res.status(201).json({
      message: "Aded user successfully",
      user: newUser,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

export const updateUsersById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
};

export const createCartegory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const newCategory = await Category.create({ name, description });

    res.status(201).json({
      message: "Aded cartegory successfully",
      category: newCategory,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllCartegorys = async (req, res, next) => {
  try {
    const cartegories = await Category.find();
    res.status(200).send(cartegories);
  } catch (err) {
    next(err);
  }
};

export const updateCartegorysById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cartegory = await Category.findById(id);

    if (!cartegory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(201).send(cartegory);
  } catch (err) {
    next(err);
  }
};

export const createAdmin = async (req, res, next) => {
  try {
    const { name, email, password, age } = req.body;

    const newAdmin = await Admin.create({ name, age, email, password });

    res.status(201).json({
      message: "Aded admin successfully",
      admin: newAdmin,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();
    res.status(200).send(admins);
  } catch (err) {
    next(err);
  }
};

export const updateAdminsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(201).send(admin);
  } catch (err) {
    next(err);
  }
};
