import{ Author }from '../models/index.model.js';
import { createTokens } from '../helpers/jwt.js';
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
        const { name, password } = req.body;

        const author = await Author.findOne({ name, password });
        if (!author) {
            return res.status(401).json({ message: "name or passwrod is invalid" });
        }
        const payload = {
            name: author.name,
            email:author.email
        }
        
        const token = createTokens(payload)
        res.status(200).json({
            message: "Logged in successfully",
            token
        });
    } catch (err) {
        next(err);
    }
};
