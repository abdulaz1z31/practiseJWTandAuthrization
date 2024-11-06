import { Author } from "../models/index.model.js";

export const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};

export const createAuthor = async (req, res, next) => {
  try {
    const { name, email, password, bio, age } = req.body;

    const newAuthor = await Author.create({ name, email, password, bio, age });

    res.status(201).json({
      message: "Aded author successfully",
      author: newAuthor,
    });
  } catch (err) {
    next(err);
  }
};

export const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);

    if (!author) {
      return res.status(404).json({ message: "Author not foudn" });
    }

    res.status(200).json(author);
  } catch (err) {
    next(err);
  }
};
