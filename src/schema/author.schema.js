import Joi from "joi"

export const authorSchema = Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),
    password:Joi.string().pattern(new RegExp("^[a-z0-9]{3,30}$")),
});