import{ Author }from '../models/index.model.js';

export const registerAuthor = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const newAuthor = await Author.create({ name, email, password });

        res.status(201).json({
            message: "Aded user successfully",
            author: newAuthor
        });
    } catch (err) {
        next(err);
    }
};

export const loginAuthor = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const author = await Author.findOne({ username, password });
        if (!author) {
            return res.status(401).json({ message: "Username or passwrod is invalid" });
        }

        res.status(200).json({
            message: "Logged in successfully",
            author
        });
    } catch (err) {
        next(err);
    }
};
