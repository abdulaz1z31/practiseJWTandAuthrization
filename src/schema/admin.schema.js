import Joi from "joi"

export const adminSchema = Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),
    password:Joi.string().pattern(new RegExp("^[a-z0-9]{3,30}$")),
});

// export const superAdminSchema = Joi.object({
//     name:Joi.string().alphanum().min(3).max(30).required(),
//     password:Joi.string().pattern(new RegExp("^[a-z0-9]{3,30}$")),
// });